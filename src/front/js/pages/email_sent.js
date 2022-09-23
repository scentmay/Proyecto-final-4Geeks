import React from "react";
import emailSent from '../../img/email_sent.jpg'
import { Link } from "react-router-dom";

const close = () => {
    window.close()
}


export const EmailSent = () => {
    return(
        <div className="d-flex align-items-center flex-column">
            <h2>Correo enviado correctamente</h2>
            <img src={emailSent} className="align-items-center p-3" width="200" height="200"></img>
            <button className="btn" onClick={close}>CERRAR</button>
        </div>
    );
}