import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AdminDash = (props) => {
  
  const { store, actions } = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    actions.query()
  }

  return (
    <div>
      <div className="card">
        <h4 className="title">{props.type}</h4>
        <button className="btn" onClick={handleClick}>DATOS</button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id socio</th>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
