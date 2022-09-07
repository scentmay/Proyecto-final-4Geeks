import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AdminDash = (props) => {

  const { store, actions } = useContext(Context);

  let query_data = store.query;

  const handleClick = (e) => {
    e.preventDefault();
     actions.query();
  }

  const render = () => {
    return query_data.length > 0  ?
     (
      <tbody>
      {query_data.map((client) => {
      return (<tr>
        <th>{client.id}</th>
        <td>{client.userName}</td>
        <td>{client.email}</td>
        <td>{client.dni}</td>
        </tr>)}
    )}
      </tbody>
    )
    :""
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
            {render()}
        </Table>
      </div>
    </div>
  );
};
