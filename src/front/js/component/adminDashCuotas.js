import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const AdminDashCuotas = (props) => {

  const { store, actions } = useContext(Context);

  let query_data = store.query;
  let navigate = useNavigate();

  function handleMail(email, name) {
    navigate(`/contactform/${email}/${name}`)
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
             client.corrienteDePago ? ("Pagado"):("PENDIENTE")
        }</td>
        <td><button className="btn" style={{fontSize:".6em"}} onClick={() => {handleMail(client.email, client.userName)}}>mail</button></td>
        </tr>)})}
      </tbody>
    )
    :""
  };


  return (
    <div>
      <div className="card" style={{width:"100%"}}>
        <h4 className="title"><u>{props.type}</u></h4>
        <Table striped bordered hover variant="dark" size="sm" responsive style={{borderColor:"#ffeba7"}}>
          <thead>
            <tr>
              <th>id socio</th>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
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