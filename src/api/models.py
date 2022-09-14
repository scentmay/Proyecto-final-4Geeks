from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    userName = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    dni = db.Column(db.String(120), unique=True, nullable=False)
    direccion = db.Column(db.String(120), unique=False, nullable=False)
    telefono = db.Column(db.String(120), unique=False, nullable=False)
    peso = db.Column(db.Float(20), unique=False, nullable=False)
    corrienteDePago = db.Column(db.Boolean, unique=False, nullable=False)
    fechaDeAlta = db.Column(db.DateTime, unique=False, nullable=False)
    pagos = db.relationship('Pago', backref='cliente', lazy=True)
    

    def __repr__(self):
        return f'<Este es el id del cliente {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "userName": self.userName,
            "lastName": self.lastName,
            "dni": self.dni,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "peso": self.peso,
            "corrienteDePago": self.corrienteDePago,
            "fechaDeAlta": self.fechaDeAlta
        }

class Entreno(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    fechaEntreno = db.Column(db.DateTime, default = datetime.now())

class EntrenoContiene(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_ejercicio = db.Column(db.Integer, db.ForeignKey('ejercicio.id'))
    id_entreno = db.Column(db.Integer, db.ForeignKey('entreno.id'))
    series = db.Column(db.Integer, unique=False, nullable=False)
    repeticiones = db.Column(db.Integer, unique=False, nullable=False)
    peso = db.Column(db.Integer, unique=False, nullable=False)

class Ejercicio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'))
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)
    video = db.Column(db.String(120), unique=False, nullable=False)
    dificultad = db.Column(db.String(120), unique=False, nullable=False)

class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)

class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    email = db.Column(db.String(120), unique=True, nullable=False)
    objective = db.Column(db.String(120), unique=False, nullable=False)    
    medical = db.Column(db.String(120), unique=False, nullable=False)    
    message = db.Column(db.String(120), unique=False, nullable=False)    

    def serialize(self):
        return {
            "cliente_id": self.cliente_id,
            "email": self.email,
            "objective": self.objective,
            "medical": self.medical,
            "message": self.message
        }

class Objectives(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    objective = db.Column(db.String(120), unique=True, nullable=False)





class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    fechaPago = db.Column(db.DateTime, default = datetime.now())
    monto = db.Column(db.Integer, unique=False, nullable=False)


    def __repr__(self):
        return f'<Pago {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "cliente_id": self.cliente_id,
        }
