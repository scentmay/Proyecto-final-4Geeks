import React from "react";
import { Link } from "react-router-dom";
import "../../styles/user.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../img/logo.png"
import Nav from 'react-bootstrap/Nav';



export const Usuario = () => {
    return (
        <div className="container-fluid p-0">

            <div className="Perfil">
                <div className="Perfil">
                    <section className="seccion-perfil-usuario">
                        <div className="perfil-usuario-header">
                            <div className="perfil-usuario-portada">
                                <div className="perfil-usuario-avatar">
                                    <img src="http://localhost/multimedia/relleno/img-c9.png" alt="img-avatar" />
                                    <button type="button" className="boton-avatar">
                                        <i className="far fa-image"></i>
                                    </button>
                                </div>
                                <button type="button" className="boton-portada">
                                    <i className="fa-user"></i> Log out
                                </button>
                            </div>
                        </div>
                        <div className="perfil-usuario-body">
                            <div className="perfil-usuario-bio">
                                <h3 className="titulo">Franco Piedrabuena</h3>
                                <p className="texto">Hola, este es tu Perfil de Usuario</p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <div className="body2">
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Editar Perfil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Mis registros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Actividades</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};



{/* <div className="patternBg dark:patternBgD w-full h-fit min-h-screen bg-center py-10">
<div className="container mx-auto">
    <div className=" col-span-full mx-auto">
        <div> */}
{/* Carga el encabezado de la sección de usuario */ }
{/* 

        </div>
    </div>
    <div className="flex justify-center">
        <div className="mb-4 border-b">
            <ul
                className="flex flex-wrap -mb-px font-bellfort text-xl text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent" */}
//     role="tablist"
// >
{/* Tab de la sección de sesiones */ }

{/* <li className="mr-2" role="presentation">
                    <button
                        // className={active_class}
                        id="sessions-tab"
                        data-tabs-target="#sessions"
                        type="button"
                        // role="tab"
                        aria-controls="sessions"
                        aria-selected="true"
                        onClick={(e) => {
                            changeTab(e);
                        }}
                    >
                        Sesiones
                    </button>
                </li> */}

{/* Tab de la sección de tipos de editar suscripción */ }

{/* <li className="mr-2" role="presentation">
<button
  className={deactive_class}
  id="training-tab"
  data-tabs-target="#training"
  type="button"
  // role="tab"
  aria-controls="training"
  aria-selected="false"
  onClick={(e) => {
    changeTab(e);
  }}
>
  Suscripción
</button>
</li> */}

{/* Tab de la sección de editar los datos del usuario */ }

{/* <li className="mr-2" role="presentation">
                    <button
                        // className={deactive_class}
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        // role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        onClick={(e) => {
                            changeTab(e);
                        }}
                    >
                        Editar perfil
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div id="myTabContent"> */}
{/* Contenido de la sección de gestión de sesiones */ }
{/* 
        <div
            className="p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
            id="sessions"
            role="tabpanel"
            aria-labelledby="sessions-tab"
        >

        </div> */}

{/* Contenido de la sección de administración de suscripciones
<div
className="hidden p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
id="training"
role="tabpanel"
aria-labelledby="training-tab"
>
<SubscriptionTiers />
</div> */}

{/* Contenido de la sección de tarifas de suscripciones */ }

{/* <div
            className="hidden p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
        >

        </div>
    </div>
</div>
</div> */}






        //     <div className="container">
        //     <div className="w-2/3 mx-auto rounded-xl text-center bg-L-Gray-light border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 dark:bg-D-Gray-dark">
        //         <p className="text-2xl text-L-Gray-med dark:text-D-Gray-med pt-3 px-3">
        //             Hola,{" "}
        //             <span className="text-L-Gray-dark dark:text-D-Gray-light">
        //                 {}
        //             </span>
        //             . Tienes{" "}
        //             <span className="text-L-Gray-dark dark:text-D-Gray-light">
        //                 {}
        //             </span>{" "}
        //             sesiones disponibles
        //         </p>
        //         <p className="text-m text-L-Gray-dark dark:text-D-Gray-light px-5 pb-3">
        //             Actualmente estas suscrito al Plan S y tu próxima fecha de pago será
        //             el 01/05/2022
        //         </p>
        //     </div>
        // </div>