import React from "react";
import { Link } from "react-router-dom";

export const Suscription = () => {
  return (
    <>
      <h2 className="text-center">Nuestras Promociones</h2>
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
        <div className="col px-2">
          <div className="bg-white precio-col">
            <div className="precio-col-header">
              <h3>Contrato por 15€/mes</h3>
              <p>para principiantes</p>
            </div>

            <div className="precio-col-features">
              <p>Acceso exclusivo a vestuarios</p>
              <p>Característi</p>
              <p>Pulsera magnetide regalo</p>
            </div>


          </div>
        </div>

        <div className="col px-2">
          <div className="bg-white precio-col">
          <div className="precio-col-header">
            <h3>Contrato por 20€/mes</h3>
            <p>para intermedios</p>
          </div>

          <div className="precio-col-features">
            <p>Accesos exclusivos</p>
            <p>Beneficios </p>
            <p>+ Cosas</p>
          </div>


        </div>
        </div>

        <div className="col px-2">
          <div className="bg-white precio-col">
          <div className="precio-col-header">
            <h3>Contraro por 30€/mes</h3>
            <p>para profesionales</p>
          </div>

          <div className="precio-col-features">
            <p>Beneficios premiun</p>
            <p>Descuentos en abonos</p>
            <p>Mochila + toalla de regalo</p>
          </div>
            

          </div>
        </div>

        <div className="col px-2">
          <div className="bg-white precio-col">
          <div className="precio-col-header">
            <h3>Contrato por 50€/mes</h3>
            <p>para intermedios</p>
          </div>

          <div className="precio-col-features">
            <p>Accesos exclusivos</p>
            <p>Beneficios </p>
            <p>+ Cosas</p>
          </div>


        </div>
        </div>
      </div>

      <hr />
    </>
  );
};
