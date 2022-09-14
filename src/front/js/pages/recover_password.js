import React, { useContext, useRef } from "react";
import fondoWas from "../../img/fondoWas.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
// import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';

export const Recover_password = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    navigate("/login")
  };

  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    actions.getPassword(email);
    handleShow();
  };

  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ backgroundImage: `url(${fondoWas})` }}
    >
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Correo enviado</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-center fs-4">
          Ahora será redirigido a la página de login
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>
      {/* Fin modal */}

      <div className="card m-5">
        <h2>Recuperación de contraseña</h2>
        <p style={{ color: "white" }}>
          Introduce el e-mail asociado a tu cuenta de S&F FIT y te enviaremos un
          correo con la información solicitada.
        </p>
        <div className="field ">
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <Link to={"/login"}>
            <button className="btn ms-3">Volver</button>
          </Link>
          <button className="btn ms-3" onClick={handleClick}>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
};

// Este es el formulario tipo
{
  /* <form id="form">
  <div class="field">
    <label for="to_name">to_name</label>
    <input type="text" name="to_name" id="to_name">
  </div>
  <div class="field">
    <label for="from_name">from_name</label>
    <input type="text" name="from_name" id="from_name">
  </div>
  <div class="field">
    <label for="message">message</label>
    <input type="text" name="message" id="message">
  </div>
  <div class="field">
    <label for="reply_to">reply_to</label>
    <input type="text" name="reply_to" id="reply_to">
  </div>

  <input type="submit" id="button" value="Send Email" >
</form> */
}
