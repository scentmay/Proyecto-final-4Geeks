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
        setUserAux({ ...store.user })
    }, [store.user]);

    return (

        <>
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
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                    <EditarPerfil />
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                    <Registros />
                                </div>
                                <div className="tab-pane fade" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab" tabindex="0">
                                    <Entrenamiento />
                                </div>
                                <div className="tab-pane fade" id="nav-pago" role="tabpanel" aria-labelledby="nav-pago-tab" tabindex="0">
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

        </>




    );
};




// Este funciona bien falta estilo 
{/* <Nav className="justify-content-center" activeKey="/home"></Nav> */ }
{/* <div className="nav">
    <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">EDITARPERFIL</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">MISREGISTROS</button>
        </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
            <EditarPerfil />
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            <Registros />
        </div>
    </div>
</div>
 */}









// este funciona dentro de todo 

{/* <div className="navs">
<ul className="nav nav-tabs my-4 justify-content-center border-0" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">EditarPerfil</button>
    </li>
    <li className="nav-item" role="presentation">
        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">MisRegistros</button>
    </li>
</ul>
</div>
<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
<EditarPerfil />
</div>
</div>
<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
<Registros />
</div>
</div> */}



{/* <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Editar Perfil</Nav.Link>
                        <EditarPerfil />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Mis registros</Nav.Link>
                        <Registros />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Entrenamientos</Nav.Link>
                        <Entrenamiento />
                    </Nav.Item>
                </Nav> */}







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