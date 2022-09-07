import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/admin.css";
import fondo from "../../img/signup_img.jpg";
import { AdminDash } from "../component/admindashboard"

export const Admin = () => {
  const { store, actions } = useContext(Context);

  const redirigir = () => {
		// console.log("Entrando aquí...")
		setTimeout(()=>{
		  navigate("/login")
		}, 5000)
	}

  return (
    <div>
      <div
        className="mainContainer"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="form d-flex justify-content-center">
          {store.user.token &&
          store.user.token != "" &&
          store.user.token != undefined ? (
            <div>
              <AdminDash />
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
    </div>
  );
};
