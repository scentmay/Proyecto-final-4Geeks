import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";

export const NewAdmin = (props) => {
  const { store, actions } = useContext(Context);
  const [emailNewUser, setEmailNewUser] = useState("")
  const [nameNewUser, setNameNewUser] = useState("")


  function handleMail(email, name) {
    window.open(`https://3000-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu64.gitpod.io/contactform/${email}/${name}`, '_blank');
    // window.open('http://ejemplo.com/archivo.pdf', '_blank');
    // navigate(`/contactform/${email}/${name}`)
  }

  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <h4 className="title">
          <u>{props.type}</u>
        </h4>
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
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
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
                <td>código</td>
                <td><button className="btn" style={{fontSize:".6em"}} onClick={() => {handleMail(emailNewUser, nameNewUser)}}>ENVIAR CÓDIGO</button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
