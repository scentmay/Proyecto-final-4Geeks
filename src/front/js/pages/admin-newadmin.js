import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/admin.css";
import { NewAdmin } from "../component/newadmin";
import Sidebar from "../component/adminSideBar";
import { useMediaQuery } from "react-responsive";

export const AdminNewAdmin = () => {
  const { store, actions } = useContext(Context);
  const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });

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
    <>
      {store.user.token &&
      store.user.token != "" &&
      store.user.token != undefined ? (
        isBigScreen ? (
          <div className="flex">
            <div>
              <Sidebar />
            </div>
            <div className="content ms-5" style={{ width: "100%" }}>
              <NewAdmin />
            </div>
          </div>
        ) : (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4" style={{ display: "flex", justifyContent: "center" }}>
                  <Link to="/admin-home">
                    <button className="btn" style={{ width: "110px" }}>
                      Socios
                    </button>
                  </Link>
                </div>
                <div className="col-sm-4" style={{ display: "flex", justifyContent: "center" }}>
                  <Link to="/admin-cuotas">
                    <button className="btn" style={{ width: "110px" }}>
                      Cuotas
                    </button>
                  </Link>
                </div>
                <div className="col-sm-4" style={{ display: "flex", justifyContent: "center" }}>
                  <Link to="/admin-newadmin">
                    <button className="btn" style={{ width: "110px" }}>
                      New Admin
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <NewAdmin />
          </div>
        )
      ) : (
        <div className="form d-flex justify-content-center">
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
        </div>
      )}
    </>
  );
};
