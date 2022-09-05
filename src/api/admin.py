  
import os
from flask_admin import Admin
from .models import db, User, Cliente, Entreno, EntrenoContiene, Ejercicio, Categoria, Survey, Objectives
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Cliente, db.session))
    admin.add_view(ModelView(Entreno, db.session))
    admin.add_view(ModelView(EntrenoContiene, db.session))
    admin.add_view(ModelView(Ejercicio, db.session))
    admin.add_view(ModelView(Categoria, db.session))
    admin.add_view(ModelView(Survey, db.session))
    admin.add_view(ModelView(Objectives, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))