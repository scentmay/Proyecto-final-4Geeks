import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/user.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../img/logo.png"
import Nav from 'react-bootstrap/Nav';
import { Context } from "../store/appContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EditarPerfil } from "../component/editperfil";




export const Usuario = () => {

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({});
    const [oldUser, setOldUser] = useState({});
    useEffect(() => {
        window.document.dispatchEvent(
            new Event("DOMContentLoaded", {
                bubbles: true,
                cancelable: true,
            })
        );
        setOldUser(store.user);
    }, [store.user]);

    return (
        <div className="container-fluid p-0">

            <div className="Perfil">
                <div className="Perfil">
                    <section className="seccion-perfil-usuario mt-5">
                        <div className="perfil-usuario-body">
                            <div className="perfil-usuario-bio">
                                <h3 className="titulo">Hola, Franco Piedrabuena</h3>
                                <p className="text">Este es tu Perfil de Usuario, donde podras ver tus datos, progresos y actividades</p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <div className="body2">
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Editar Perfil</Nav.Link>
                        <EditarPerfil />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Mis registros</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div >
    );
};

{/* Tab de la sección de editar los datos del usuario */ }



// <li className="mr-2" role="presentation">
// <button
//     // className={deactive_class}
//     id="profile-tab"
//     data-tabs-target="#profile"
//     type="button"
//     // role="tab"
//     aria-controls="profile"
//     aria-selected="false"
//     onClick={(e) => {
//         changeTab(e);
//     }}
// >
//     Editar perfil
// </button>
// </li>


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



        //editar perfil

    //     <div className="container items-center justify-center mx-auto">
    //     <div className="relative z-0 mb-6 w-full group">
    //         <input
    //             type="user"
    //             onChange={(e) => {
    //                 setUser({ ...user, username: e.target.value });
    //             }}
    //             name="floating_user"
    //             className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-M-Lime peer"
    //             defaultValue={oldUser.username}
    //             required
    //         />
    //     </div>

    // </div>