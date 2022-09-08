import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/admin.css";
import fondo from "../../img/signup_img.jpg";
import { AdminDashSocios } from "../component/adminDashSocios"
import { AdminDashCuotas } from "../component/adminDashCuotas"

export const Admin = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const redirigir = () => {
		console.log("Entrando aquí...")
		setTimeout(()=>{
		  navigate("/login")
		}, 5000)
	}

  useEffect(() => {
    actions.query();
  },[])

  return (
    <div>
      <div className="mainContainer" style={{ backgroundImage: `url(${fondo})` }}>
        <h2 style={{ color: "white"}}><u>Panel de control</u></h2>
        <div className="form d-flex justify-content-center" style={{alignItems:"flex-start"}}>
        
          <div className="tarjetas m-2">
            <AdminDashSocios type="socios" col1="nombre" col2="correo" col3="dni"></AdminDashSocios>
          </div>

          <div className="tarjetas m-2">
            <AdminDashCuotas type="cuotas" col1="nombre" col2="teléfono" col3="estado pago"></AdminDashCuotas>
          </div>
      
          
        



          {/* {store.user.token &&
          store.user.token != "" &&
          store.user.token != undefined ? (
            <div>
              <AdminDash type="socios" col1="nombre" col2="correo" col3="dni"/>
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
          )} */}
        </div>
      </div>
    </div>
  );
};
