"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Survey
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import datetime

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

    newClient = Cliente(email=body['email'], password=body['password'], userName=body['name'], lastName=body['lastName'], dni=body['dni'], direccion=body['address'], telefono=body['phone'], objetivo='Por definir', peso=85.3, corrienteDePago=True, fechaDeAlta=datetime.datetime.now())
    
    db.session.add(newClient)
    db.session.commit()

    return jsonify("Usuario creado, mensaje del backend"), 200

#registro de encuesta
@api.route("/survey", methods =["POST", "GET"])
def survey():

    if request.method == 'POST':
        body = request.get_json()

        if body is None:
            raise APIException("You need to specify the request body as a json object(survey info)", status_code=400)

        newSurvey = Survey(id = body['id'], email = body['email'], objective = body['objective'], medical = body['medical'], message = body['message'])

        db.session.add(newSurvey)
        db.session.commit()

        return jsonify("Encuesta creada, mensaje del backend"), 200

    if request.method == 'GET':
        pass
        # montar método get de una fila

# login de usuario
@api.route("/login", methods =["POST"])
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

  