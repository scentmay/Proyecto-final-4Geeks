import React, { useContext } from "react";
import fondoWas from "../../img/fondoWas.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export const Recover_password = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    navigate("/hide-login");
  };


  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    actions.getPassword(email);
    handleShow();
  };

  return (
    <div className="mainContainer">
     <div className="form d-flex justify-content-center">
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Petición recibida</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-4">
            Va a ser redirigido a una página para resetear su contraseña
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
          Introduce el e-mail asociado a tu cuenta de S&F FIT y procederemos a resetear la contraseña
          </p>
          <div className="field ">
            <input
              className="input-field"
              type="email"
              placeholder="email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <Link to={'/login'}><button className="btn ms-3">Volver</button></Link>
            <Link to={"/hide-login"}>
              <button className="btn ms-3" onClick={handleClick}>ENVIAR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

