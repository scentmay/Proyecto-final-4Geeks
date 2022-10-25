import React from "react";
import { Link } from "react-router-dom";
import "../../styles/subs.css"

export const Suscription = () => {
  return (
    <>
      <div className="container-fluid" style={{ color: "#ffeba7" }}><h3></h3></div>
      <div className="row row-cols-1 row-cols-md-3 g-4" id="suscri">

        <div className="col mb-5">
          <div className="card1" id="card1">
            <div className="py-3">
              <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>20</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#ffeba7" }}>Basico</h5>
              <p className="card-text">Contratando el servicio básico, podrás acceder a las instalaciones, vestuarios y tendrás una bonificación en la inscripción.</p>
            </div>
            <div className="card-footer text-muted py-3">
              <a href="https://buy.stripe.com/test_fZe6pJ9hndY8c6s3cc" target="_blank" className="btn btn-primary">Suscribirme</a>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card1 " id="card1">
            <div className="py-3">
              <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>30</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#ffeba7" }}>Intermedio</h5>
              <p className="card-text">Contratando el servicio intemedio, además de acceder a las instalaciones, te puedes llevar una mochila de regalo.</p>
            </div>
            <div className="card-footer text-muted py-3">
              <a href="https://buy.stripe.com/test_3cs29tgJP8DO1rO28a" target="_blank" className="btn btn-primary">Suscribirme</a>
            </div>
          </div>
        </div>
        <div className="col mb-5" >
          <div className="card1" id="card1">
            <div className="py-3">
              <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>50</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#ffeba7" }}>Premium</h5>
              <p className="card-text"> Contratando el servicio Premium, podrás acceder a instalaciones, te llevarás una mochila de regalo y un mes gratis.</p>
            </div>
            <div className="card-footer text-muted py-3">
              <a href="https://buy.stripe.com/test_fZe9BV3X35rC3zW7sv" target="_blank" className="btn btn-primary">Suscribirme</a>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
