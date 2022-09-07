import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AdminDash = (props) => {

  const { store, actions } = useContext(Context);

  const query_data = store.query;

  const handleClick = (e) => {
    // e.preventDefault();
    var contenido = document.querySelector('#contenido');
    actions.query();
    contenido.innerHTML = ''; //importante empezar a pintar la tabla desde cero
    query_data.map((item) => {
      contenido.innerHTML += `
      <tr>
        <th>${item.id}</th>
        <td>${item.userName}</td>
        <td>${item.email}</td>
        <td>${item.dni}</td>
      </tr>
      `
    })
  };



  return (
    <div>
      <div className="card" style={{width:"100%"}}>
        <h4 className="title">{props.type}</h4>
        <button className="btn" onClick={handleClick}>DATOS</button>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>id socio</th>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
            </tr>
          </thead>
          <tbody id="contenido">
          </tbody>
        </Table>
      </div>
    </div>
  );
};
