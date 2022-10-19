import React from "react";
import "../../styles/home.css";

export const Carusel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide py-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

          <div className="container" id="referencia">
            <div className="carousel-caption text-start">
              <h2 className="font-weight" style={{ color: "#ffeba7" }}>
                Bienvenidos a S&F Fit
              </h2>
              <br></br>
              <br></br>
              <p>
                Somos un gimnasio con un concepto premium, que encabeza una rama
                de servicios especializada en el equipamiento e instalación de
                gimnasios de alta competitividad
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="/login">
                  Accede a tu espacio
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

          <div className="container">
            <div className="carousel-caption">
              <h2 className="font-weight" style={{ color: "#ffeba7" }}>
                Tenemos increíbles promociones
              </h2>
              <br/>
              <br/>
              <p>
                Puedes encontrarlas en nuestro home o bien una vez ya registrado
                y logueado.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#galeria">
                  Motívate
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

          <div className="container">
            <div className="carousel-caption text-end">
              <h2 className="font-weight" style={{ color: "#ffeba7" }}>
                ¿Qué estas esperando? Súmate!
              </h2>
              <br></br>
              <br></br>
              <p>
                <a className="btn btn-lg btn-primary" href="/signup">
                  Únete a nosotros
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
