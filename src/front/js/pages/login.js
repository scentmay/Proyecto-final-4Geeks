import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../../styles/login.css'
import fondo from '../../img/signup_img.jpg'
import { Formik, Field, Form, ErrorMessage } from "formik";

export const Login = () => {
  const { store, actions } = useContext(Context);

  //Función para limpiar el token del store
  const logOut = () => {
    actions.cleanStore();
  }

  return (
		<div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
			<div className="form d-flex justify-content-center"> 

        {
            (store.user.token && store.user.token != "" && store.user.token != undefined) ?

            //Si está logado
            (
              <div>
                <div className="card">
                  <h4 className="title" style={{color: "#ffeba7"}}>Zona privada</h4>
                  <p style={{color: "white"}}>Bienvenido a su zona privada, no olvide acceder a la encuesta para rellenar sus datos</p>
                  <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}>Log out</Link>
                  
                  {
                    (store.user.role == "admin")?(<Link to={'/admin'} className="btn btn-primary btn-lg mt-3 ms-3">ADMIN</Link>):(<Link to={'/usuario'} className="btn btn-primary btn-lg mt-3 ms-3">Usuario</Link>)
                  }
                  <Link to={'/survey'} className="btn btn-primary btn-lg mt-3 ms-3">Realizar encuesta</Link>
                  <Link to={'/'} className="btn btn-primary btn-lg mt-3 ms-3">Volver a home</Link>
                </div>
              </div>
            )

          :
            // Si NO está logado
           (
              <div className="card">
                <h4 className="title" style={{color: "#ffeba7"}}>Login</h4>
                  
                <Formik
                  initialValues={{
                    name: "",
                    pass: ""
                  }}

                  validate={(values) => {
                    let errores = {};
                    
                    // validación del input email
                    if(!values.email){
                      errores.email = 'Por favor ingresa un correo';
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                      errores.email = 'El correo sólo puede contener letras, números, puntos, guiones y el guión bajo '
                    }

                    // validación del input password
                    if(!values.pass){
                      errores.pass = 'Por favor ingresa una contraseña válida';
                    }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{4,8})/.test(values.pass)) {
                      errores.pass = 'La contraseña debe tener de 4 a 8 caracteres y debe contener números, letras minúsculas y mayúsculas'
                    }

                    return errores;
                  }}

                  onSubmit={(values, {resetForm}) => {
                    resetForm();
                    actions.login(values.email, values.pass);
                  }}
                  >
                  {({errors}) => (
                    <Form>
                      <div className="field ">

                        <span style={{color: "#ffeba7"}}>
                          <i className="fa-solid fa-at"></i>
                        </span>

                        <Field 
                          className="input-field" 
                          placeholder="email"
                          type="text"
                          name="email"
                        />
                      </div>

                      <ErrorMessage name="email" component={() => (
                        <div className="error">{errors.email}</div>
                      )} />


                      <div className="field ">

                        <span style={{color: "#ffeba7"}}>
                          <i className="fa-solid fa-lock"></i>
                        </span>

                        <Field
                          className="input-field" 
                          placeholder="password"
                          type="password"
                          name="pass"
                        />
                      </div>

                      <ErrorMessage name="pass" component={() => (
                        <div className="error">{errors.pass}</div>
                      )} />
                      
                      <div className="buttons d-flex mt-2">
                        <Link to={'/'}><button className="btn ms-3">Volver</button></Link>
                        <button type="submit" className="btn">LOGIN</button>
                        <Link to={'/signup'}><button className="btn ms-3">Registro</button></Link>
                      </div>
                    </Form>
                  )}
                </Formik>
                
                  <div>    
                      <Link to={'/recover-password'} className="btn-link">¿Olvidaste tu contraseña?</Link>
                  </div>
              </div>
            )
        }
			</div>			
		</div>
	);
};