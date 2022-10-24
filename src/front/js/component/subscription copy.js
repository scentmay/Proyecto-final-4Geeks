import React from "react";
import { Link } from "react-router-dom";
import "../../styles/subs.css"

export const SuscriptionCopy = () => {
  return (
    <>    <div className="text-center pt-5 py-5" style={{ color: "#ffeba7" }}><h3>Conoce nuestras promociones</h3></div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        <div className="col mb-5">
          <div className="card1" id="card1">
          <div className="py-3">
                    <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>20</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
                  </div>
              <div className="card-body">
                <h5 className="card-title"style={{ color: "#ffeba7" }}>Basico</h5>
                <p className="card-text">Contratando el servicio basico, podras acceder a las instalaciones, vestuarios y tendras una bonificacion en la inscripcion.</p>
              </div>
              <div className="card-footer text-muted py-3">
                <a href="/login" target="_blank" className="btn btn-primary">Suscribirme</a>
                </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card1 " id="card1">
          <div className="py-3">
                    <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>30</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
                  </div>
              <div className="card-body">
                <h5 className="card-title"style={{ color: "#ffeba7" }}>Intermedio</h5>
                <p className="card-text">Contratando el servicio intemedio, ademas de acceder a las instalaciones, te podes llevar una mochila de regalo.</p>
              </div>
              <div className="card-footer text-muted py-3">
                <a href="/login" target="_blank" className="btn btn-primary">Suscribirme</a>
                </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card1" id="card1">
          <div className="py-3">
                    <span className="display-1 aling-middle" style={{ color: "#ffeba7" }}>50</span> <span className="h3" style={{ color: "#ffeba7" }}>€/mes</span>
                  </div>
              <div className="card-body">
                <h5 className="card-title"style={{ color: "#ffeba7" }}>Premium</h5>
                <p className="card-text">Contratando el servicio Premium, podras acceder a instalaciones, te llevaras una mochila de regalo y un mes gratis.</p>
              </div>
              <div className="card-footer text-muted py-3">
                <a href="/login" target="_blank" className="btn btn-primary">Suscribirme</a>
                </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
