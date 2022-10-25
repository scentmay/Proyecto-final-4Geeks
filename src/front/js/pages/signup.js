import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, Form, ErrorMessage } from "formik";


export const Signup = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [visible, setVisible] = useState(true);
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handleShow = () => {
      if (store.flag_signup == true) {
        setShow(true);
      }
      if (store.flag_signup == false) {
        setShow2(true);
      }
  }
  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };

  const handleClose2 = () => {
    setShow2(false);
    clean();
    navigate("/login");
  };

  function handleCheck() {
    setVisible(!visible); //conmutamos estado
  }

  const clean = () => {
    actions.cleanStore();
  }

  useEffect(() => {
    handleShow();
  },[store.flag_signup])

  
  return (
    <div className="mainContainer">
      <div className="form d-flex justify-content-center">
        {/* Modal 1 */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Usuario registrado correctamente</Modal.Title>
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
        {/* Fin modal 1 */}

        {/* Modal 2 */}
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Credenciales incorrectas. Revise la información</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-3">
            pulse aceptar para continuar
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose2}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal 2 */}

        <div className="card">
          <h4 className="title" style={{color: "#ffeba7"}}>Formulario de registro</h4>
          <Formik 
              initialValues={{
              logEmail: "",
              logPass: "",
              logName: "",
              logLastName: "",
              logDni: "",
              logAddress: "",
              logPhone: "",
              logCode: ""
			      }}
		  	onSubmit={(valores, {resetForm} ) => {
          resetForm();
          actions.signUp(valores.logEmail, valores.logPass, valores.logName, valores.logLastName, valores.logDni, valores.logAddress, valores.logPhone, valores.logCode);
			}}

      validate={(valores) => {
        let errores = {};
        if(!valores.logEmail){
          errores.logEmail = 'Por favor ingresa un correo';
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.logEmail)){
          errores.logEmail = 'El correo sólo puede contener letras, números, puntos, guiones y el guión bajo '
        }

        if(!valores.logPass){1
          errores.logPass = 'Por favor ingresa una contraseña válida';
        }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{4,8})/.test(valores.logPass)) {
          errores.logPass = 'La contraseña debe tener de 4 a 8 caracteres y debe contener números, letras minúsculas y mayúsculas'
        }

        if(!valores.logName){
          errores.logName = 'Por favor ingresa un nombre';
        }

        if(!valores.logLastName){
          errores.logLastName = 'Por favor ingresa un apellido';
        }

        if(!valores.logDni){
          errores.logDni = 'Por favor ingresa un DNI válido';
        }else if(!/^[XYZ]?\d{5,8}[A-Z]$/.test(valores.logDni)){
          errores.logDni = 'Introduzca un nº válido de DNI'
        }

        if(!valores.logAddress){
          errores.logAddress = 'Por favor ingresa una dirección';
        }

        if(!valores.logPhone){
          errores.logPhone = 'Por favor ingresa un nº de teléfono';
        }

        return errores;
      }}
		  >
            {( {errors} ) => (
              <Form>

                <div className="field">
                  
                  <span style={{color: "#ffeba7"}}>
                    <i className="fa-solid fa-at"></i>
                  </span>

                  <Field
                      id="logEmail"
                      placeholder="Email"
                      className="input-field"
                      name="logEmail"
                      type="email"
                  />
                </div>
                
                <ErrorMessage name="logEmail" component={() => (<div className="error">{errors.logEmail}</div>)} />

                <div className="field">
                  
                <span style={{color: "#ffeba7"}}>
                  <i className="fa-solid fa-lock"></i>
                </span>

                  <Field
                    id="logPass"
                    placeholder="password"
                    className="input-field"
                    name="logPass"
                    type="password"
                  />
                </div>

                <ErrorMessage name="logPass" component={() => (<div className="error">{errors.logPass}</div>)} />

                <div className="field">

                <span style={{color: "#ffeba7"}}>
                  <i className="fa-solid fa-user"></i>
                </span>
                
                <Field
                    id="logName"
                    placeholder="Nombre"
                    className="input-field"
                    name="logName"
                    type="text"
                  />
                </div>

                <ErrorMessage name="logName" component={() => (<div className="error">{errors.logName}</div>)} />

                <div className="field">

                  <span style={{color: "#ffeba7"}}>
                   <i className="fa-regular fa-user"></i>
                  </span>

                  <Field
                    id="logLastName"
                    placeholder="Apellidos"
                    className="input-field"
                    name="logLastName"
                    type="text"
                  />
                </div>

                <ErrorMessage name="logLastName" component={() => (<div className="error">{errors.logLastName}</div>)} />

                <div className="field">
                  
                  <span style={{color: "#ffeba7"}}>
                   <i className="fa-solid fa-id-card"></i>
                  </span>


                  <Field
                    id="logDni"
                    placeholder="DNI"
                    className="input-field"
                    name="logDni"
                    type="text"
                  />
                </div>

                <ErrorMessage name="logDni" component={() => (<div className="error">{errors.logDni}</div>)} />

                <div className="field">
                
                  <span style={{color: "#ffeba7"}}>
                    <i className="fa-solid fa-address-book"></i>
                  </span>


                  <Field
                    id="logAddress"
                    placeholder="Dirección"
                    className="input-field"
                    name="logAddress"
                    type="text"
                  />
                </div>

                <ErrorMessage name="logAddress" component={() => (<div className="error">{errors.logAddress}</div>)} />

                <div className="field">
                 
                  <span style={{color: "#ffeba7"}}>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  </span>


                  <Field
                    id="logPhone"
                    placeholder="Teléfono"
                    className="input-field"
                    name="logPhone"
                    type="text"
                  />
                </div>

                <ErrorMessage name="logPhone" component={() => (<div className="error">{errors.logPhone}</div>)} />

                <div className="position-relative">
                  <input
                    type="checkbox"
                    className="mt-3"
                    onClick={() => {
                      handleCheck();
                    }}
                  />
                  <label className="ms-1">Código administrador</label>
                </div>

                {/* ocultamos el campo del código de administrador si no se marca el check */}
                <div
                  className="field"
                  style={!visible ? { display: "" } : { display: "none" }}
                >
                  <svg
                    className="input-icon"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                  </svg>
                  <Field
                    id="code"
                    placeholder="introduzca aquí un código si lo tiene..."
                    className="input-field"
                    name="logCode"
                    type="text"
                  />
                  </div>

                  <ErrorMessage name="logCode" component={() => (<div className="error">{errors.logCode}</div>)} />


                <div className="buttons">
                  <Link to={"/login"}>
                    <button className="btn ms-3">Volver</button>
                  </Link>

                  <input
                    className="btn"
                    type="reset"
                    value="Reset"
                    // onClick={() => resetForm()}
                  />

                  <button type="submit" className="btn">
                    REGISTRO
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
