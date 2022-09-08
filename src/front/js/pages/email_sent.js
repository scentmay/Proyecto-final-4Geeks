import React from "react";
import fondoWas from '../../img/fondoWas.jpg'
import emailSent from '../../img/email_sent.jpg'
import { Link } from "react-router-dom";

export const EmailSent = () => {
    return(
        <div className="d-flex align-items-center flex-column" style={{backgroundImage: `url(${fondoWas})`}}>
            <h2>Correo enviado correctamente</h2>
            <img src={emailSent} className="align-items-center p-3" width="200" height="200"></img>
            <Link to={'/admin'}><button className="btn ms-3">Panel de control</button></Link>
        </div>
    );
}