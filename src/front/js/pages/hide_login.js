import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const New_password = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };

  let navigate = useNavigate();

  const clean = () => {
    actions.cleanStore();
  }

  return (
    <div className="mainContainer">
      <div className="form d-flex justify-content-center">

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contraseña cambiada correctamente</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-4">
            Será redirigido a la página de login
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal */}

        <div className="card m-5">
          <h2>Nueva contraseña</h2>
          <p style={{ color: "white" }}>
            Nunca te pediremos la contraseña para acceder a tu zona privada
          </p>

          <p style={{ color: "white" }}>
            Contacta con nostros si necesitas ayuda
          </p>

          <Formik
                  initialValues={{
                    pass: ""
                  }}

                  validate={(values) => {
                    let errors = {};

                    // validación del input password
                    if(!values.pass){
                      errors.pass = 'Por favor ingresa una contraseña válida';
                    }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{4,8})/.test(values.pass)) {
                      errors.pass = 'La contraseña debe tener de 4 a 8 caracteres y debe contener números, letras minúsculas y mayúsculas'
                    }

                    return errors;
                  }}
                  
                  onSubmit={(values, {resetForm}) => {
                    resetForm();
                    actions.changePassword(values.pass);
                    actions.cleanStore();
                    handleShow();
                  }}
                  >
                    
                    {({errors}) => (
                    <Form>

                      <div className="field ">

                        <span style={{color: "#ffeba7"}}>
                          <i className="fa-solid fa-lock"></i>
                        </span>

                        <Field
                          className="input-field" 
                          placeholder="password"
                          type="password"
                          name="pass"
                        />
                      </div>

                      <ErrorMessage name="pass" component={() => (
                        <div className="error">{errors.pass}</div>
                      )} />
                      
                      <div className="buttons d-flex mt-2 justify-content-center">
                        <Link to={"/login"}><button className="btn ms-3" onClick={clean}>Volver</button></Link>
                        <button type="submit" className="btn">ENVIAR</button>
                      </div>
                    </Form>
                  )}

          </Formik>
          </div>
        </div>
      </div>
  );
};


