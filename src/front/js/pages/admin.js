import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/admin.css";
import fondo from "../../img/signup_img.jpg";
import { AdminDashSocios } from "../component/adminDashSocios";
import { AdminDashCuotas } from "../component/adminDashCuotas";
import { NewAdmin } from "../component/newadmin";

export const Admin = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const redirigir = () => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };

  useEffect(() => {
    actions.query();
  }, []);

  return (
    <div className="mainContainer" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="form d-flex justify-content-center">
        {store.user.token &&
        store.user.token != "" &&
        store.user.token != undefined ? (
          <div className="mainContainer container-fluid mt-2">
            <h2 style={{ color: "white" }}>
              <u>Panel de control</u>
            </h2>
            <div className="row">
              {/* primera tabla */}
              <div className="col-md-6">
                <div className="m-2">
                  <AdminDashSocios
                    type="socios"
                    col1="nombre"
                    col2="correo"
                    col3="dni"
                  ></AdminDashSocios>
                </div>
              </div>

              {/* segunda tabla */}
              <div className="col-md-6">
                <div className="m-2">
                  <AdminDashCuotas
                    type="cuotas"
                    col1="nombre"
                    col2="teléfono"
                    col3="estado pago"
                  ></AdminDashCuotas>
                </div>
              </div>

              {/* módulo para dar de alta nuevos admins */}
              <div className="col-md-6">
                <div className="m-2">
                  <NewAdmin
                    type="Nuevo administrador"
                    col1="nombre"
                    col2="email"
                    col3="código"
                  ></NewAdmin>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card">
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
      </div>
    </div>
  );
};
