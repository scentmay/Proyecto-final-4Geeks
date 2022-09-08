import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import fondoWas from '../../img/fondoWas.jpg'
import '../../styles/contact_form.css'
import { Link, useParams } from "react-router-dom";

// Cortesía de https://formsubmit.co/

export const ContactForm = () => {

  const {email, name} = useParams();

  return (
    <div className="mainContainer d-flex justify-content-center" style={{backgroundImage: `url(${fondoWas})`}} >
      <div className="card" style={{ width: "500px" }}>
        <h2>
          <u>Formulario de contacto</u>
        </h2>
        <Form className="p-3" action={`https://formsubmit.co/${email}`} method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="" defaultValue={email} name="email" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={name} name="name"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "white" }}>Comentarios</Form.Label>
            <Form.Control as="textarea" rows={4} name="comentarios" placeholder="escribe aquí los comentarios..."/>
          </Form.Group>

          <Link to={'/admin'}><button className="btn ms-3">Volver</button></Link>
          <Button variant="primary" type="submit">
            Enviar
          </Button>

          {/* indicamos página de retorno tras el envío de correo */}
          <input type="hidden" name="_next" value="https://3000-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu63.gitpod.io/emailsent"></input>
          {/* eliminamos el captcha, comentar esta línea para activarlo */}
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>


        </Form>
      </div>
    </div>
  );
};
