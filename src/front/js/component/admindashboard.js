import React from "react";
import { Link } from "react-router-dom";


export const Administrador = () => {
    return (
        <div className="">
            <div className="">
                <nav className="navbar navbar-dark bg-dark text-white">
                    Administrador
                </nav>
                <div className="sidebar">
                    <ul>
                        <li>
                          <Link to="">inicio</Link>
                        </li>
                        <li>
                        <Link to="">clientes</Link>
                        </li>
                        <li>
                        <Link to="">pagos</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

