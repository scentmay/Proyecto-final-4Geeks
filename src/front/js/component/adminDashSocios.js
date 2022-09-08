import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AdminDashSocios = (props) => {

  const { store, actions } = useContext(Context);

  let query_data = store.query;

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
        <td>{client.email}</td>
        <td>{client.dni}</td>
        </tr>)})}
      </tbody>
    )
    :""
  };


  return (
    <div>
      <div className="card" style={{width:"100%"}}>
        <h4 className="title">{props.type}</h4>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>id socio</th>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
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
