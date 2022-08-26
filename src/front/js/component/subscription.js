import React from "react";
import { Link } from "react-router-dom";

export const Suscription = () => {
    return (
        <div>
            <div className="content-center d-flex" id="tabla-precios">

                <div className="precio-col">
                    <div className="precio-col-header">
                        <h3>Contrato por 15€/mes</h3>
                        <p>para principiantes</p>
                    </div>

                    <div className="precio-col-features">
                        <p>Acceso exclusivo a vestuarios</p>
                        <p>Característica 2</p>
                        <p>Pulsera magnetide regalo</p>
                    </div>

                    <div className="precio-col-subscripcion">
                        <a>Suscribirme</a>
                    </div>
                </div>

                <div className="precio-col">
                    <div className="precio-col-header">
                        <h3>Contrato por 30€/mes</h3>
                        <p>para intermedios</p>
                    </div>

                    <div className="precio-col-features">
                        <p>Accesos exclusivos</p>
                        <p>Beneficios </p>
                        <p>+ Cosas</p>
                    </div>

                    <div className="precio-col-subscripcion">
                        <a>Suscribirme</a>
                    </div>
                </div>

                <div className="precio-col">
                    <div className="precio-col-header">
                        <h3>Contraro por 50€/mes</h3>
                        <p>para profesionales</p>
                    </div>

                    <div className="precio-col-features">
                        <p>Beneficios premiun</p>
                        <p>Descuentos en abonos</p>
                        <p>Mochila + toalla de regalo</p>
                    </div>

                    <div className="precio-col-subscripcion">
                        <a href="https://pro.empresiona.com">Suscribirme</a>
                    </div>
                </div>

                <div className="precio-col">
                    <div className="precio-col-header">
                        <h3>Contrato por 30€/mes</h3>
                        <p>para intermedios</p>
                    </div>

                    <div className="precio-col-features">
                        <p>Accesos exclusivos</p>
                        <p>Beneficios </p>
                        <p>+ Cosas</p>
                    </div>

                    <div className="precio-col-subscripcion">
                        <a>Suscribirme</a>
                    </div>
                </div>

            </div>

            <hr />
        </div>
    );
};
