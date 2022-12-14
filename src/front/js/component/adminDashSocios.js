import Table from "react-bootstrap/Table";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";

export const AdminDashSocios = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");


  //introducimos 2 estados (id a borrar y confirmación) para manejar 
  //un modal que nos pida confirmación antes de borrar usuario
  
  const handleCancelMembership = (id) => {
    setIdToDelete(id);
    setShow(true);
  };

  const handleCloseAccept = () => {
    setConfirm(true);
    setShow(false);
  };

  const handleCloseCancel = () => {
    setShow(false);
    setIdToDelete("");
  };

  let query_data = store.query;

  

  const render = () => {
    //query data tiene datos? entonces devuelve (return) un mapeo de query_data
    //a su vez, el mapeo pinta una tabla.La etiqueta <tbody> queda estático porque no va a variar,
    //por eso queda fuera del mapeo
    //caso de que query_data no tenga datos, devuelve cadena vacía

    return query_data.length > 0 ? (
      <tbody>
        {query_data.map((client) => {
          return (
            <tr>
              <th>{client.id}</th>
              <th>{client.role}</th>
              <td>{client.userName}</td>
              <td>{client.email}</td>
              <td>{client.telefono}</td>
              <td>{client.dni}</td>
              <td>
                <button
                  className="btn"
                  style={{ fontSize: ".6em" }}
                  onClick={() => {
                    handleCancelMembership(client.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    ) : (
      ""
    );
  };

  useEffect (() => {
		if(confirm == true) actions.deleteMember(idToDelete);
	},[confirm]);

  return (
    <div className="container-fluid">
      <div className="card" style={{ borderColor: "#ffeba7", width: "100%" }}>
        <h4 className="title" style={{ color: "#ffeba7" }}>
          <u>Lista de socios</u>
        </h4>
 
        {/* Modal */}
        <Modal show={show} onHide={handleCloseCancel}>
          <Modal.Header closeButton>
            <Modal.Title>¿Está seguro de eliminar el registro?</Modal.Title>
          </Modal.Header>

          <Modal.Body className="d-flex justify-content-center fs-4">
            pulse aceptar para continuar o cancelar para salir
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleCloseCancel}>
              Cancelar
            </button>
            <button className="btn" onClick={handleCloseAccept}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin modal */}

        <div className="table-responsive">
           <Table
          striped
          bordered
          hover
          variant="dark"
          responsive
          style={{ borderColor: "#ffeba7" }}
        >
          <thead>
            <tr>
              <th>id socio</th>
              <th>Rol</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>TLF</th>
              <th>DNI</th>
              <th>Acción</th>
            </tr>
          </thead>
          {/* sólo cambiamos el body de la tabla llamando a la función render,
           las cabeceras quedan estáticas */}
          {render()}
        </Table>
        </div>
       

      </div>
    </div>
  );
};
