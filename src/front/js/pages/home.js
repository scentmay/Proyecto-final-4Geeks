import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/subs.css";
import "../../styles/footer.css";
import { Suscription } from "../component/subscription";
import { Ubicacion } from "../component/ubicacion";
import { Header } from "../component/navbar";
import { Footer } from "../component/footer";
import { Contacto } from "../component/contacto";
import { Link } from "react-router-dom";
import { Carusel } from "./carusel";
import { Depo } from "../../img/depo.jpg";
import { Galeria } from "./galeria";
import { SuscriptionCopy } from "../component/subscription copy";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Carusel />
      <Galeria />
      <div className="container-fluid">
        <SuscriptionCopy />
      </div>
      <div className="container justify-content-center">
        <Ubicacion />
      </div>
    </div>
  );
};

{
  /*style={{ width: "100%" }} */
}
