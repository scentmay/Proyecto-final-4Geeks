import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import fondoWas from "../../img/fondoWas.jpg";
import "../../styles/contact_form.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

// Cortesía de https://formsubmit.co/
// el envío de correo se demora unos 15 segundos

export const ContactForm = () => {
  const { email, name } = useParams();
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();


  const redirigir = () => {
    console.log("Entrando aquí...");
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };

  

  return (
    <div
      className="mainContainer d-flex justify-content-center"
      style={{ backgroundImage: `url(${fondoWas})` }}
    >
      <div className="card align-items-center" style={{ width: "500px" }}>
        <h2>
          <u>Formulario de contacto</u>
        </h2>

        {(localStorage.getItem("token")) ? (
          <Form
            className="p-3"
            action={`https://formsubmit.co/${email}`}
            method="POST"
            style={{ width: "100%"}}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                defaultValue={email}
                name="email"
              />
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={name}
                name="name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "white" }}>Comentarios</Form.Label>
              
              {
                ("code" in localStorage)?
                (
                  <Form.Control
                  as="textarea"
                  rows={4}
                  name="comentarios"
                  value={`Hola ` + name + `, este es tu código para registrarte como administrador: \n`  + (localStorage.getItem("code"))} 
                   />
                ):(
                <Form.Control
                as="textarea"
                rows={4}
                name="comentarios"
                placeholder="escribe aquí los comentarios..."
              />
              )
              }

              
            </Form.Group>

            <Link to={"/admin"}>
              <button className="btn ms-3">Volver</button>
            </Link>
            <Button variant="primary" type="submit">
              Enviar
            </Button>

            {/* indicamos página de retorno tras el envío de correo */}
            <input
              type="hidden"
              name="_next"
              value="https://3000-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu64.gitpod.io/emailsent"
            ></input>
            {/* eliminamos el captcha, comentar esta línea para activarlo */}
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="table"></input>
          </Form>
        ) : (
          <div className="card">
            <h4 className="title">Usuario no registrado</h4>
            <p style={{ color: "white" }}>
              Será redirigido a la página de login en 5 segundos
            </p>
            <Link to={"/login"}>
              <button className="btn ms-3">Volver</button>
            </Link>
            {redirigir()}
          </div>
        )}
      </div>
    </div>
  );
};
