import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const Recover_password = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  let navigate = useNavigate();


  const handleShow = () => {
    if (store.pass_recover == true) {
      setShow(true);
    }
    else if(store.pass_recover == false) {
      setShow2(true);
    }
	}

   const handleClose = () => {
    setShow(false);
    navigate("/hide-login");
  };

  const handleClose2 = () => {
    setShow2(false);
    clean();
  };

  const clean = () => {
    actions.cleanStore();
  }

  useEffect(() => {
    handleShow();
  },[store.pass_recover])

  return (
    <div className="mainContainer">
     <div className="form d-flex justify-content-center">
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Petición recibida</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-4">
            Vas a ser redirigido a una página para resetear tu contraseña
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal */}

        {/* Modal 2*/}
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Petición recibida</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-4">
            Los datos introducidos no son correctos. Revísalo, por favor
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose2}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal 2*/}


        <div className="card m-5">
          <h2>Recuperación de contraseña</h2>
          <p style={{ color: "white" }}>
          Introduce los datos asociados a tu cuenta de S&F FIT y procederemos a resetear la contraseña
          </p>

          <Formik 
            initialValues={{
              email: "",
              dni: ""
            }}

            validate={(values) => {
              let errors={};

              // validación del input email
              if(!values.email){
                errors.email = 'Por favor ingresa un correo';
              }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                errors.email = 'El correo sólo puede contener letras, números, puntos, guiones y el guión bajo '
              }

              // validación del input password
              if(!values.dni){
                errors.dni = 'Por favor ingresa un DNI';
              }else if (!/^[XYZ]?\d{5,8}[A-Z]$/.test(values.dni)) {
                errors.dni = 'Por favor, ingresa un DNI válido'
              }

              return errors;
            }}

            onSubmit = {(values, {resetForm}) => {
              resetForm();
              actions.getPassword(values.email, values.dni);
            }}

          >

            {({errors}) => (
              <Form>
                <div className="field ">

                  <span style={{color: "#ffeba7"}}>
                    <i className="fa-solid fa-at"></i>
                  </span>

                  <Field
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="email"
                   />
                </div>

                <ErrorMessage name="email" component={() => (
                  <div className="error">{errors.email}</div>
                )} />

                <div className="field ">

                  <span style={{color: "#ffeba7"}}>
                    <i className="fa-solid fa-id-card"></i>
                  </span>

                  <Field
                    className="input-field"
                    type="text"
                    name="dni"
                    placeholder="dni"
                  />
                </div>

                <ErrorMessage name="dni" component={() => (
                  <div className="error">{errors.dni}</div>
                )} />

                <div>
                  <Link to={'/login'}><button className="btn ms-3" onClick={clean}>Volver</button></Link>
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

