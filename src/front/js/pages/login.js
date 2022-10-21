import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (store.flag_login == false) {
      setShow(true);
    }
  }
  const handleClose = () => {
    setShow(false);
    window.location.reload()
  };

  //Función para limpiar el token del store
  const logOut = () => {
    actions.cleanStore();
  };

  useEffect(() => {
    handleShow();
  }, [store.flag_login])

  return (
    <div className="mainContainer">
      <div className="form d-flex justify-content-center">
   
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Credenciales incorrectas</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-3">
            pulse aceptar para continuar
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal */}

        {store.user.token &&
        store.user.token != "" &&
        store.user.token != undefined ? (
          //Si está logado
          <div className="">
            <div className="card">
              <h4 className="title" style={{ color: "#ffeba7" }}>
                Bienvenido {store.user.userName}
              </h4>
              <p style={{ color: "white" }}>
                 Esta es tu zona privada, no olvides acceder a la encuesta
                para rellenar tus datos
              </p>

              {store.user.role == "admin" ? (
                <Link
                  to={"/admin-home"}
                  className="btn btn-primary btn-lg mt-3 ms-3"
                > 
                <i class="fa-solid fa-toolbox fa-xl me-3"></i>
                  ADMIN
                </Link>
              ) : (
                <Link
                  to={"/usuario"}
                  className="btn btn-primary btn-lg mt-3 ms-3"
                >
                  <i class="fa-solid fa-dumbbell fa-xl me-3"></i>
                  Zona Usuario
                </Link>
              )}
              <Link to={"/survey"} className="btn btn-primary btn-lg mt-3 ms-3">
                <i class="fa-solid fa-square-poll-vertical fa-xl me-3"></i>
                Realizar encuesta
              </Link>
              <Link to={"/"} className="btn btn-primary btn-lg mt-3 ms-3">
                <i class="fa-solid fa-house fa-xl me-3"></i>
                Volver a home
              </Link>
            </div>
          </div>
        ) : (
          // Si NO está logado
          <div className="card">
            <h4 className="title" style={{ color: "#ffeba7" }}>
              Login
            </h4>

            <Formik
              initialValues={{
                name: "",
                pass: "",
              }}
              validate={(values) => {
                let errors = {};

                // validación del input email
                if (!values.email) {
                  errors.email = "Por favor ingresa un correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errors.email =
                    "El correo sólo puede contener letras, números, puntos, guiones y el guión bajo ";
                }

                // validación del input password
                if (!values.pass) {
                  errors.pass = "Por favor ingresa una contraseña válida";
                } else if (
                  !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{4,8})/.test(values.pass)
                ) {
                  errors.pass =
                    "La contraseña debe tener de 4 a 8 caracteres y debe contener números, letras minúsculas y mayúsculas";
                }

                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                actions.login(values.email, values.pass);
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="field ">
                    <span style={{ color: "#ffeba7" }}>
                      <i className="fa-solid fa-at"></i>
                    </span>

                    <Field
                      className="input-field"
                      placeholder="email"
                      type="text"
                      name="email"
                    />
                  </div>

                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />

                  <div className="field ">
                    <span style={{ color: "#ffeba7" }}>
                      <i className="fa-solid fa-lock"></i>
                    </span>

                    <Field
                      className="input-field"
                      placeholder="password"
                      type="password"
                      name="pass"
                    />
                  </div>

                  <ErrorMessage
                    name="pass"
                    component={() => <div className="error">{errors.pass}</div>}
                  />

                  <div className="buttons">
                    <Link to={"/"}>
                      <button className="btn ms-3">Volver</button>
                    </Link>
                    <button type="submit" className="btn">LOGIN</button>

                    <Link to={'/signup'}><button className="btn ms-3">Registro</button></Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div>
              <Link to={"/recover-password"} className="btn-link">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
