import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'
import fondo from '../../img/signup_img.jpg'



export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  let navigate = useNavigate();

  //Función para limpiar el token del store
  const logOut = () => {
    actions.cleanStore();
  }

  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
    navigate("/login")
  };

  return (
		<div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
			<div className="form d-flex justify-content-center"> 

        {
            (store.user.token && store.user.token != "" && store.user.token != undefined) ?

            //Si está logado
            (
              <div>
                <div className="card">
                  <h4 className="title">Login</h4>
                  <p style={{color: "white"}}>Bienvenido a su zona privada, no olvide acceder a la encuesta para rellenar sus datos</p>
                  <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}>Log out</Link>
                  <Link to={'/usuario'} className="btn btn-primary btn-lg mt-3 ms-3">Usuario</Link>
                  {/* <Link to={'/admin'} className="btn btn-primary btn-lg mt-3 ms-3">ADMIN</Link> */}
                  <Link to={'/survey'} className="btn btn-primary btn-lg mt-3 ms-3">Realizar encuesta</Link>
                </div>
              </div>
            )

          :
            // Si NO está logado
           (
      	    <div className="card" style={{height: "295px"}}>
			    	<h4 className="title">Login</h4>
				    	<form id="form">
                  <div className="field ">
                  <input className="input-field" 
                  placeholder="email"
                  type="text"
                  value={email}
                  //onKeyDown={(e) => {if(e.key == 'Enter') handleClick()}} // detectar pulsación "Enter"
                  onChange={(e) => {
                    setEmail(e.target.value)}}
                  />
                  </div>

                <div className="field ">
                  <input className="input-field" 
                  placeholder="password"
                  type="password"
                  value={password}
                  //onKeyPress={(e) => {if(e.key === 'Enter') handleClick()}} // detectar pulsación "Enter"
                  onChange={(e) => {
                    setPassword(e.target.value)}}
                  />
                </div>
					    </form>

                <div className="buttons d-flex mt-2">
                    <Link to={'/'}><button className="btn ms-3">Volver</button></Link>
                    <button className="btn" onClick={handleClick}>LOGIN</button>
                    <Link to={'/signup'}><button className="btn ms-3">Registro</button></Link>
                    

                </div>
                <div>    
                    <a href="#" className="btn-link">Forgot your password?</a>
                </div>
            </div>
           )
        }
			</div>			
		</div>
	);
};