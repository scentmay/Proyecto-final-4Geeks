import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/user.css"
import "../../img/logo.png"
import { Context } from "../store/appContext";
import { EditarPerfil } from "../component/editperfil";
import { Registros } from "../component/registros";
import { Entrenamiento } from "./entrenamiento";
import { useNavigate } from 'react-router-dom';
import { Suscription } from "../component/subscription";
import fondo from '../../img/signup_img.jpg'


export const Usuario = () => {

    const { store, actions } = useContext(Context);
    const [useraux, setUserAux] = useState("");
    let navigate = useNavigate();

    const redirigir = () => {
		// console.log("Entrando aquí...")
		setTimeout(()=>{
		  navigate("/login")
		}, 5000)
	}

    useEffect(() => {
        actions.ejercicios();
        setUserAux({ ...store.user })
    }, [store.user]);

    return (

        <>
            <div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
			    <div className="form d-flex justify-content-center"> 
            {
                (store.user.token && store.user.token != "" && store.user.token != undefined) ?
                    (<div className="container-fluid p-0">
                        <div className="Perfil">
                            <div className="Perfil">
                                <section className="seccion-perfil-usuario mt-5">
                                    <div className="perfil-usuario-body">
                                        <div className="perfil-usuario-bio" style={{ backgroundColor: `#ffeba7` }}>
                                            <h3 className="titulo">Hola,{useraux.userName}!</h3>
                                            <p className="text">Este es tu Perfil de Usuario, donde podras ver tus datos, progresos y actividades</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="justify-content-center">
                            <nav>
                                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">EDITARPERFIL</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">MISREGISTROS</button>
                                    <button className="nav-link" id="nav-training-tab" data-bs-toggle="tab" data-bs-target="#nav-training" type="button" role="tab" aria-controls="nav-training" aria-selected="false">Entrenamienos</button>
                                    <button className="nav-link" id="nav-pago-tab" data-bs-toggle="tab" data-bs-target="#nav-pago" type="button" role="tab" aria-controls="nav-pago" aria-selected="false">Mis Suscripciones</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                    <EditarPerfil />
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                                    <Registros />
                                </div>
                                <div className="tab-pane fade" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab" tabIndex="0">
                                    <Entrenamiento />
                                </div>
                                <div className="tab-pane fade" id="nav-pago" role="tabpanel" aria-labelledby="nav-pago-tab" tabIndex="0">
                                    <Suscription />
                                </div>
                            </div>
                        </div>
                    </div >)
                    :
                    (<div className="card">
                        <h4 className="title">Usuario no registrado</h4>
                        <p style={{ color: "white" }}>Será redirigido a la página de login en 5 segundos</p>
                        <Link to={'/login'}><button className="btn ms-3">Volver</button></Link>
                        {redirigir()}
                    </div>)
            }
        </div>    
    </div>

        </>




    );
};
