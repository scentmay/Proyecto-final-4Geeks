import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const AdminDashCuotas = (props) => {

  const { store, actions } = useContext(Context);

  let query_data = store.query;
  let navigate = useNavigate();

  function handleMail(email, name) {
    window.open(`https://proyecto-final-sffit.herokuapp.com/contactform/${email}/${name}`, '_blank');
    // window.open('http://ejemplo.com/archivo.pdf', '_blank');
    // navigate(`/contactform/${email}/${name}`)
  }

  const render = () => {
    //query data tiene datos? entonces devuelve (return) un mapeo de query_data
    //a su vez, el mapeo pinta una tabla. <tbody> queda estático porque no va a variar, 
    //por eso queda fuera del mapeo
    //caso de que query_data no tenga datos, devuelve cadena vacía

    return query_data.length > 0  ?
    (
      <tbody>
      {query_data.map((client) => {
      return (<tr>
        <th>{client.id}</th>
        <td>{client.userName}</td>
        <td>{client.telefono}</td>
        <td>{
             client.corrienteDePago ? ("Pagada"):("PENDIENTE")
        }</td>
        <td><button className="btn" style={{fontSize:".6em"}} onClick={() => {handleMail(client.email, client.userName)}}>mail</button></td>
        </tr>)})}
      </tbody>
    )
    :""
  };


  return (
    <div className="container-fluid">
      <div className="card" style={{ borderColor: "#ffeba7", width: "100%" }}>
        <h4 className="title" style={{color:"#ffeba7"}}><u>Cuotas</u></h4>
        <Table striped bordered hover variant="dark"  responsive style={{borderColor:"#ffeba7"}}>
          <thead>
            <tr>
              <th>id socio</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Cuota</th>
              <th>Acción</th>
            </tr>
          </thead>
          {/* sólo cambiamos el body de la tabla llamando a la función render,
           las cabeceras quedan estáticas */}
            {render()}
        </Table>
      </div>
    </div>
  );
};
