import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";
import { v4 as uuidV4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';


export const NewAdmin = (props) => {
  const { store, actions } = useContext(Context);
  const [emailNewUser, setEmailNewUser] = useState("")
  const [nameNewUser, setNameNewUser] = useState("")
  const [newCodeAdmin, setNewCodeAdmin] = useState("")
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    localStorage.removeItem("code")   
    setShow(false);
}

  function handleMail(email, name) {
    window.open(`https://proyecto-final-sffit.herokuapp.com/contactform/${email}/${name}`, '_blank');
    handleShow();
  }

  function generate() {
    const newCode = uuidV4();
    setNewCodeAdmin(newCode);
    actions.setCode(emailNewUser, newCode);
 }


  return (
    <div>
        	{/* Modal */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Cambios registrados correctamente</Modal.Title>
				</Modal.Header>

				<Modal.Body className="d-flex justify-content-center fs-4">pulse aceptar para continuar</Modal.Body>

				<Modal.Footer>
					<button className="btn" onClick={handleClose}>Aceptar</button>
				</Modal.Footer>
			</Modal>
			{/* Fin modal */}
      <div className="container">
        <div className="card justify-content-center justify-content-between" style={{ borderColor: "#ffeba7", width: "90%" }}>
              <div className="d-flex align-items-center justify-content-between">
                  <h4 className="title ms-1" style={{ color: "#ffeba7" }}>
                  <u>Nuevo administrador</u>
                  </h4>
                  <button className="btn" style={{fontSize:".8em"}} onClick={() => {generate()}}>GENERAR CÓDIGO</button>
              </div>    
          <Table
            striped
            bordered
            hover
            variant="dark"
            size="sm"
            responsive
            style={{ borderColor: "#ffeba7" }}
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Código</th>
                <th>Acción</th>
              </tr>
            </thead>
            {/* sólo cambiamos el body de la tabla llamando a la función render,
            las cabeceras quedan estáticas */}
            <tbody>
              <tr>
                  <td>
                      <div className="field ">
                          <input className="input-field" 
                              placeholder="nombre"
                              type="text"
                              onChange={(e) => {
                                  setNameNewUser(e.target.value)
                                  }
                              }
                          />
                      </div>
                  </td>
                  <td>
                      <div className="field ">
                          <input className="input-field" 
                              placeholder="email"
                              type="text"
                              onChange={(e) => {
                                  setEmailNewUser(e.target.value)
                                  }
                              }
                          />
                      </div>
                  </td>
                  <td>{newCodeAdmin}</td>
                  <td><button className="btn" style={{fontSize:".8em"}} onClick={() => {handleMail(emailNewUser, nameNewUser,)}}>ENVIAR CÓDIGO</button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
};
