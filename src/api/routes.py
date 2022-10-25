"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Survey, Objectives, Pago, Code
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import datetime
import stripe

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# resgistro de usuario
@api.route("/signup", methods = ["POST"])
def register():
    body = request.get_json()

# Validaciones
# -----------------
    if body is None:
        raise APIException("You need to specify the request body as a json object (signup info)", status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email (signup info)', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password (signup info)', status_code=400)
    if 'name' not in body:
        raise APIException('You need to specify the name (signup info)', status_code=400)
    if 'lastName' not in body:
        raise APIException('You need to specify the lastName (signup info)', status_code=400)
    if 'dni' not in body:
        raise APIException('You need to specify the dni (signup info)', status_code=400)
    if 'address' not in body:
        raise APIException('You need to specify the address (signup info)', status_code=400)
    if 'phone' not in body:
        raise APIException('You need to specify the phone (signup info)', status_code=400)
    

    # at this point, all data has been validated, we can proceed to inster into the bbdd

    # CASO ADMINISTRADOR (body lleva campo "code")
    if body["code"]:

        # comparamos el código que nos llega con los que tenemos en la base de datos
        code = Code.query.filter_by(code = body["code"]).first()

        # en el caso de que haya coincidencia, es que se está registrando un nuevo administrador
        # asignamos user id 1
        if code:
            newClient = Cliente(email=body['email'], user_id=1 , password=body['password'], userName=body['name'], lastName=body['lastName'], dni=body['dni'], direccion=body['address'], telefono=body['phone'], peso=85.3, corrienteDePago=True, fechaDeAlta=datetime.datetime.now())
            db.session.add(newClient)
            db.session.commit()

            # ahora borramos el código para que no se pueda volver a utilizar
            db.session.delete(code)
            db.session.commit()
            
            return jsonify("Usuario creado, mensaje del backend"), 200

        else:
            return jsonify("Código incorrecto, mensaje del backend"), 400


    # CASO CLIENTE (body lleva campo "code" vacío, asignamos user id 3)
    newClient = Cliente(email=body['email'], user_id=3 , password=body['password'], userName=body['name'], lastName=body['lastName'], dni=body['dni'], direccion=body['address'], telefono=body['phone'], peso=85.3, corrienteDePago=True, fechaDeAlta=datetime.datetime.now())
    db.session.add(newClient)
    db.session.commit()

    return jsonify("Usuario creado, mensaje del backend"), 200


#Recuperar encuesta, actualizar, crear
@api.route("/survey/<int:id>", methods =["GET", "PUT", "POST"])
@jwt_required()
def info_survey(id):
    
    if request.method == 'GET':
        #Recuperamos el usuario
        user_survey = Survey.query.filter_by(cliente_id = id).first()


        if not user_survey:
            raise APIException("Sin resultados de encuesta para este usuario", status_code=400)
        #devolvemos el usuario con su metodo serialize
        return jsonify({
            "survey": user_survey.serialize(), 
        })
    
    if request.method == 'PUT':

        body = request.get_json()

        #Recuperamos el usuario
        user_survey = Survey.query.filter_by(cliente_id = id).first()

        #modificamos el campo correspondiente SOLO si viene con datos en el body, si viene vacío se ignora
        if body["objective"]:
            user_survey.objective = body["objective"]

        if body["medical"]:
            user_survey.medical = body["medical"]

        if body["message"]:
            user_survey.message = body["message"]

        #hacemos commit a la bbdd
        db.session.commit()

        return jsonify("Registro modificado"), 200
    
    if request.method == 'POST':
        body = request.get_json()

        if body is None:
            raise APIException("You need to specify the request body as a json object(survey info)", status_code=400)

        newSurvey = Survey(cliente_id = body['id'], email = body['email'], objective = body['objective'], medical = body['medical'], message = body['message'])

        db.session.add(newSurvey)
        db.session.commit()

        return jsonify("Encuesta creada, mensaje del backend"), 200


# login de usuario
@api.route("/login", methods = ["POST"])
def login():
    body = request.get_json()
    
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the username', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the email', status_code=400)

    email = body['email']
    password = body['password']
    #otra manera de asignar los valores
    #email = request.json.get("email")
    #password = request.json.get("password")

    user = Cliente.query.filter_by(email = email, password = password).first()

    if not user:
        return jsonify("Credenciales incorrectas, mensaje del backend"), 401

    access_token = create_access_token(identity = email)


    return jsonify({
        "user": user.serialize(), 
        "token": access_token,
    })

@api.route("/edituser/<int:id>", methods=['PUT'])
def putuser(id):
    info_request = request.get_json()
    user1 = Cliente.query.get(id)
    if user1 is None:
        raise APIException('Usuario no encontrado', status_code=404)
    if "userName" in info_request:
        user1.userName = info_request["userName"]
    if "lastName" in info_request:
        user1.lastName = info_request["lastName"]
    if "email" in info_request:
        user1.email = info_request["email"]
    if "dni" in info_request:
        user1.dni = info_request["dni"]
    if "direccion" in info_request:
        user1.direccion = info_request["direccion"]
    if "telefono" in info_request:
        user1.telefono = info_request["telefono"]
    db.session.commit()

    return jsonify({
            "userUpdate": user1.serialize()
        })  

@api.route('/stripe_webhooks/', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE_SIGNATURE']
    endpoint_secret = "whsec_66ZDul5BYF6TNDfQvK3AVAaHN66ZavUM"

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        raise e
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        raise e

    # Handle the event
    if event['type'] == 'charge.succeeded':
      charge = event['data']['object']
      ejemplo = charge.billing_details.email
      cliente = Cliente.query.filter_by(email = ejemplo).first()
      pago_a_borrar = Pago.query.filter_by(cliente_id = cliente.id).first()
      
      if pago_a_borrar:
        db.session.delete(pago_a_borrar)
        
      pago = Pago(cliente_id = cliente.id, monto = charge.amount / 100 )
      cliente.corrienteDePago = True
      db.session.add(pago)
      db.session.commit()
    #   print(nuevo_pago)

# "whsec_66ZDul5BYF6TNDfQvK3AVAaHN66ZavUM"

    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))

    return jsonify(success=True) 



@api.route('/deleteMember/<int:id>', methods = ['DELETE'] )
@jwt_required()
def eliminateMember(id):

    #Recuperamos el usuario y borramos sus datos de todas las tablas relacionadas
    user_pago = Pago.query.filter_by(cliente_id = id).first()
    user_survey = Survey.query.filter_by(cliente_id = id).first()
    user_cliente = Cliente.query.filter_by(id = id).first()

    if not user_cliente:
        raise APIException("Usuario a eliminar incorrecto", status_code=400)
    
    db.session.delete(user_pago)
    db.session.delete(user_survey)
    db.session.delete(user_cliente)
    db.session.commit()

    return jsonify("Usuario eliminado, mensaje del backend"), 200


@api.route('/query', methods = ['GET'] )
@jwt_required()
def queryExample():

    client_query = Cliente.query.all()
    
    #mapeamos cada una de las filas de la tabla cliente para devolverlo en formato json
    all_clients = list(map(lambda x: x.serialize() , client_query))
    return jsonify(all_clients)


@api.route('/recover_password', methods = ['POST'] )
def queryPassword():

    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)

    email = body['email']
    dni = body['dni']

    user = Cliente.query.filter_by(email = email, dni = dni).first()
    
    if not user:
        return jsonify("El usuario no existe"), 401

    if user:
        return jsonify({"email": user.email, "password": user.password}), 200


@api.route('/new_password', methods = ['PUT'] )
def newPassword():

    body = request.get_json()

    if body is None:
        raise APIException("No ha especificado la nueva contraseña", status_code=400)

    email = body['email']
    password = body['password']

    user = Cliente.query.filter_by(email = email).first()

    if not user:
        return jsonify("El usuario no existe"), 401

    user.password = password

    db.session.commit()

    return jsonify("Contraseña modificada"), 200
    

@api.route('/user/<int:id>/payments')
def getPaymentsByUser(id):
    userObj = Pago.query.filter_by(cliente_id = id).first()

    if not userObj:
        raise APIException('Client do not exist', 404) 

    return jsonify({
        "operacion":userObj.serialize(), 
    })

@api.route('/code', methods = ['POST'] )
@jwt_required()
def setCode():
    
    body = request.get_json()

    newCode = Code(email = body['email'], code = body['code'])
    db.session.add(newCode)
    db.session.commit()

    return jsonify("Código registrado, mensaje del backend"), 200