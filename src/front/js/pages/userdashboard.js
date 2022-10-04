import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/user.css";
import "../../img/logo.png";
import { Context } from "../store/appContext";
import { EditarPerfil } from "../component/editperfil";
import { Registros } from "../component/registros";
import { Entrenamiento } from "./entrenamiento";
import { useNavigate } from "react-router-dom";
import { Suscription } from "../component/subscription";

export const Usuario = () => {
  const { store, actions } = useContext(Context);
  const [useraux, setUserAux] = useState("");
  const [userPago, setUserPago] = useState("");
  let navigate = useNavigate();

  const redirigir = () => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };

  // let info_pago = store.pago.monto;

  useEffect(() => {
    // actions.ejercicios();
    actions.getPago(store.user.id);
    // setUserAux({ ...store.user });
  }, []);

  return (
    <>
      {store.user.token &&
      store.user.token != "" &&
      store.user.token != undefined ? (
        <div className="minav ">
          <div className="">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button

                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true" style={{ color: "#ffeba7" }}
                >
                  Editar Perfil
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false" style={{ color: "#ffeba7" }}
                > 
                  Entrenos / Registros
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                  style={{ color: "#ffeba7" }}
                >
                  Suscripciones
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                {" "}
                <EditarPerfil />
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <Registros />
                <Entrenamiento />
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <h3 className="text-center mt-4" style={{ color: "#ffeba7" }}>
              Actualmente estas suscripto a la promocion de: 
              {(store.pago == undefined || store.pago == null)
                ? (" Pendiente de contratar ")
                : (" " + store.pago.monto + " €")}
            </h3>
            <Suscription /></div>
              <div
                className="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabIndex="0"
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card " id="cardF">
          <h4 className="title">Usuario no registrado</h4>
          <p style={{ color: "white" }}>
            Será redirigido a la página de login en 5 segundos
          </p>
          <Link to={"/login"}>
            <button className="btn ms-3">Volver</button>
          </Link>
          {redirigir()}
        </div>
      )}
    </>
  );
};

// <div className="perfil-usuario-bio" style={{ backgroundColor: `#ffeba7` }}>
//     <h3 className="titulo">Hola,{useraux.userName}!</h3>
//     <p className="text">Este es tu Perfil de Usuario, donde podras ver tus datos, progresos y actividades</p>
// </div>
