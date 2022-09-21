import React, { useContext, useRef } from "react";
import fondoWas from "../../img/fondoWas.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export const New_password = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };

  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    actions.changePassword(password);
    handleShow();
  };

  return (
    <div className="mainContainer">
      <div className="form d-flex justify-content-center">
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
            Nunca le pediremos la contraseña para acceder a su zona privada
          </p>
          <div className="field ">
            <input
              className="input-field"
              type="password"
              placeholder="nueva contraseña..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <Link to={'/recover-password'}><button className="btn ms-3">Volver</button></Link>
            <Link to={"/hide-login"}>
              <button className="btn ms-3" onClick={handleClick}>ENVIAR</button>
            </Link>
          </div>
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
