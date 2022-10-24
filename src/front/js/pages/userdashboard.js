import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/user.css";
import "../../img/logo.png";
import { Context } from "../store/appContext";
import { EditarPerfil } from "../component/editperfil";
import { Registros } from "../component/registros";
import { Entrenamiento } from "./entrenamiento";
import { useNavigate } from "react-router-dom";
import { Suscription } from "../component/subscription";
// import { Cronometro } from "./cronometro";
import Modal from "react-bootstrap/Modal";
import "../../styles/login.css";


export const Usuario = () => {
  const { store, actions } = useContext(Context);
  const [useraux, setUserAux] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  let navigate = useNavigate();

  const redirigir = () => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };

  useEffect(() => {
    actions.getPago(store.user.id);
  }, []);

  useEffect(() => {
    setUserAux({ ...store.user });
  }, [store.user]);

  const handleClick = () => {
    actions.userUpdate(
      useraux.email,
      useraux.userName,
      useraux.lastName,
      useraux.dni,
      useraux.direccion,
      useraux.telefono
    );
    handleShow();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cambios registrados correctamente</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-center fs-3">
          Pulse aceptar para continuar
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>

      {store.user.token &&
      store.user.token != "" &&
      store.user.token != undefined ? (
        <div className="minav ">
          <section className="seccion-perfil-usuario">
            <div className="perfil-usuario-portada">
              <div className="perfil-usuario-avatar">
                <img
                  src="https://cdn.icon-icons.com/icons2/3551/PNG/512/trainer_man_people_avatar_person_icon_224850.png"
                  alt="img-avatar"
                />
                <button type="button" className="boton-avatar">
                
                  <i className="far fa-image"></i>
                </button>
                
              </div>
            </div>

            <div className="perfil-usuario-body">
              <div className="perfil-usuario-bio">
                <h3 className="titulo" style={{ color: "#ffeba7" }}>
                  {" "}
                  <p className="text-2xl text-L-Gray-med dark:text-D-Gray-med pt-3 px-3">
                    Hola,{" "}
                    <span className="text-L-Gray-dark dark:text-D-Gray-light">
                      {store.user.userName}
                    </span>
                  </p>
                </h3>
                <p className="texto">
                  Este es tu perfil de usuario, donde podras actualizar tus
                  datos personales, generar entrenos y modificar tus
                  suscripciones.
                </p>
              </div>

              <div className="">
              <ul
              className="nav nav-tabs justify-content-center p-0"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="btn"
                  // id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Editar Perfil
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn mt-3"
                  // id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Entrenamiento
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn"
                  // id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Suscripciones
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <EditarPerfil />
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <Registros />
                <Entrenamiento />
       </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              ><div className="perfil-usuario-bio justify-content-center mt-4">
                <h3 className="text-center mt-4">
                  Actualmente estás suscrito a la promoción de: 

                </h3>
                <h3 className="text-center mt-4" style={{ color: "#ffeba7", marginLeft: "10px"}}>
                  {store.pago == undefined || store.pago == null
                    ? " Pendiente de Pago"
                    : " " + store.pago.monto + "€"}</h3>
                </div>
                <Suscription />
              </div>
              <div
                className="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabIndex="0"
              ></div>
            </div>
          </div>


              

              

            </div>
          </section>
        </div>
      ) : (
        <div className="card " id="cardF">
          <h4 className="title">Usuario no registrado</h4>
          <p style={{ color: "white" }}>
            Será redirigido a la página de login en 5 segundos
          </p>
          <Link to={"/login"}>
            <button className="btn ms-3">Volver</button>
          </Link>
          {redirigir()}
        </div>
      )}
    </>
  );
};

{
  /* // ESTE ES EL ACTUAL ESTOY PROBANDO OTROS DASH */
}
{
  /* <div className="">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  style={{ color: "#ffeba7" }}
                >
                  Editar Perfil
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  style={{ color: "#ffeba7" }}
                >
                  Entrenos / Registros
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                  style={{ color: "#ffeba7" }}
                >
                  Suscripciones
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <EditarPerfil />
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <Registros />
                <Entrenamiento />
                {/* <Cronometro /> */
}
{
  /* </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <h3 className="text-center mt-4" style={{ color: "#ffeba7" }}>
                  Actualmente estás suscrito a la promoción de:
                  {store.pago == undefined || store.pago == null
                    ? " Pendiente de contratar "
                    : " " + store.pago.monto + " €"}
                </h3>
                <Suscription />
              </div>
              <div
                className="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabIndex="0"
              ></div>
            </div>
          </div> */
}

//   <ul className="nav justify-content-center" id="myTab" role="tablist">
//   <li className="nav-item" role="presentation">
//   <button
//     className="nav-link active"
//     id="home-tab"
//     data-bs-toggle="tab"
//     data-bs-target="#home-tab-pane"
//     type="button"
//     role="tab"
//     aria-controls="home-tab-pane"
//     aria-selected="true"
//     style={{ color: "#ffeba7" }}
//   >
//     Editar Perfil
//   </button>
//   </li>
//   <li className="nav-item">
//   <button
//     className="nav-link"
//     id="profile-tab"
//     data-bs-toggle="tab"
//     data-bs-target="#profile-tab-pane"
//     type="button"
//     role="tab"
//     aria-controls="profile-tab-pane"
//     aria-selected="false"
//     style={{ color: "#ffeba7" }}
//   >
//     Entrenos / Registros
//   </button>
//   </li>
//   <li className="nav-item">
//   <button
//     className="nav-link"
//     id="contact-tab"
//     data-bs-toggle="tab"
//     data-bs-target="#contact-tab-pane"
//     type="button"
//     role="tab"
//     aria-controls="contact-tab-pane"
//     aria-selected="false"
//     style={{ color: "#ffeba7" }}
//   >
//     Suscripciones
//   </button>
//   </li>
// </ul>

{
  /* // ESTE ES EL HEADER SOLAMENTE */
}

{
  /* <div className="container">
            <div className="w-2/3 mx-auto rounded-xl text-center bg-L-Gray-light border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 dark:bg-D-Gray-dark">
              <p className="text-2xl text-L-Gray-med dark:text-D-Gray-med pt-3 px-3">
                Hola,{" "}
                <span className="text-L-Gray-dark dark:text-D-Gray-light">
                {store.user.userName}
                </span>
              </p>
              <p className="text-m text-L-Gray-dark dark:text-D-Gray-light px-5 pb-3">
                Aqui podras actualizar tus datos personales, tus objetivos de entreno y actulizar tus suscripciones
              </p>
            </div>
          </div> */
}

{
  /* ////////editar perfil//////// */
}

{
  /* <div className="container p-3 border-0" id="editarPerfil">
<h3 className="text-center" style={{ color: "#ffeba7" }}>Mis datos</h3>
<div className="d-grid gap-2">
  <label className="form-label">Nombre</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        type="text"
        className="input-field"
        placeholder="Indique su Nombre"
        value={useraux.userName}
        onChange={(e) => {
          setUserAux({ ...useraux, userName: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>
<div className="d-grid gap-2">
  <label className="form-label">Apellidos</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        type="text"
        className="input-field"
        placeholder="Indique sus Apellidos"
        value={useraux.lastName}
        onChange={(e) => {
          setUserAux({ ...useraux, lastName: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>

<div className="d-grid gap-2">
  <label className="form-label">Dni</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        type="text"
        className="input-field"
        placeholder="Indique su Dni"
        value={useraux.dni}
        onChange={(e) => {
          setUserAux({ ...useraux, dni: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>

<div
  className="d-grid gap-2">
  <label className="form-label">Direccion</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        className="input-field"
        type="text"
        placeholder="Indique su direccion"
        value={useraux.direccion}
        onChange={(e) => {
          setUserAux({ ...useraux, direccion: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>

<div className="d-grid gap-2">
  <label className="form-label">Número telefónico</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        type="tel"
        className="input-field"
        placeholder="Escriba su número telefónico"
        value={useraux.telefono}
        onChange={(e) => {
          setUserAux({ ...useraux, telefono: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>

<div className="d-grid gap-2">
  <label className="form-label">Correo Electrónico</label>
  <div className="d-grid gap-2">
    <div className="field">
      <input
        type="email"
        className="input-field"
        placeholder="Escriba su correo electrónico"
        value={useraux.email}
        onChange={(e) => {
          setUserAux({ ...useraux, email: e.target.value });
        }} style={{ color: "#ffeba7" }}
      />
    </div>
  </div>
</div>
<div className="d-grid gap-2">
  <button className="btn" onClick={handleClick}>Actualizar y Guardar</button>
</div>
</div> */
}

{
  /* 
<div class="chakra-stack css-aajx3r">
<div align="center" justify="center" role="tablist" aria-orientation="horizontal" class="chakra-tabs__tablist css-fgp5ep">
<button type="button" id="tabs-2--tab-0" role="tab" tabindex="0" aria-selected="true" aria-controls="tabs-2--tabpanel-0" class="chakra-tabs__tab css-1u9sazy" data-index="0">
Login</button>
<button type="button" id="tabs-2--tab-1" role="tab" tabindex="-1" aria-selected="false" aria-controls="tabs-2--tabpanel-1" class="chakra-tabs__tab css-1u9sazy" data-index="1">
Register</button>
</div>
<div class="chakra-tabs__tab-panels css-8atqhb">
<div tabindex="0" aria-labelledby="tabs-2--tab-0" role="tabpanel" id="tabs-2--tabpanel-0" class="chakra-tabs__tab-panel css-a5mhaz">
<form action="#"><div class="chakra-stack css-1o6krzp">
<a class="chakra-button css-1pauuq" href="https://breathecode.herokuapp.com/v1/auth/github?url=https://4geeks.com/login" weight="700">
<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
<path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><p class="chakra-text css-fscdx0">Log in with Github</p></a><div class="css-ldo4d5"><div class="css-2aij5o"></div><div class="css-nimho7">or</div><div class="css-8y8prk"></div></div><div role="group" class="chakra-form-control css-1kxonj9">
<label for="email" id="field-3-label" class="chakra-form__label css-12fvy9k">Email</label>
<input type="email" name="email" value="franconpiedrabuena@gmail.com" placeholder="email@example.co" id="field-3" class="chakra-input css-crzd73"></div>
<div role="group" class="chakra-form-control css-1kxonj9">
<label for="password" id="field-4-label" class="chakra-form__label css-12fvy9k">Password</label>
<input type="password" name="password" value="Rivermivida96" autocomplete="current-password" placeholder="***********" id="current-password" class="chakra-input css-crzd73"><div class="chakra-input__right-element css-1cq9qkx">
<button type="button" class="chakra-button css-bfkmid">
<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
<path fill="#A4A4A4" d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z">
</path></svg></button></div></div><div class="css-71k2zn"><div class="css-17xejub"></div><a target="_blank" rel="noopener noreferrer" class="chakra-link css-3g473y" align="right" href="https://breathecode.herokuapp.com/v1/auth/password/reset?url=https://4geeks.com/login">Forgot password?</a></div><button type="submit" class="chakra-button css-1d6q36s">Login</button></div></form></div><div tabindex="0" aria-labelledby="tabs-2--tab-1" role="tabpanel" id="tabs-2--tabpanel-1" class="chakra-tabs__tab-panel css-a5mhaz" hidden=""><form action="#"><div class="chakra-stack css-b5leqj"><div class="css-1kzw6s8"><div role="group" class="chakra-form-control css-1kxonj9"><label for="first_name" id="field-5-label" class="chakra-form__label css-12fvy9k">First name</label><input type="text" name="first_name" value="" placeholder="First name" id="field-5" class="chakra-input css-crzd73"></div><div role="group" class="chakra-form-control css-1kxonj9"><label for="lest_name" id="field-6-label" class="chakra-form__label css-12fvy9k">Last name</label><input type="text" name="last_name" value="" placeholder="Last name" id="field-6" class="chakra-input css-crzd73"></div></div><div role="group" class="chakra-form-control css-1kxonj9"><label for="phone" id="field-7-label" class="chakra-form__label css-12fvy9k">Phone</label><input type="tel" name="phone" value="" placeholder="+123 4567 8900" id="field-7" class="chakra-input css-crzd73"></div><div role="group" class="chakra-form-control css-1kxonj9"><label for="email" id="field-8-label" class="chakra-form__label css-12fvy9k">Email</label><input type="email" name="email" value="" placeholder="jhon.doe@gmail.com" id="field-8" class="chakra-input css-crzd73"></div><button type="submit" class="chakra-button css-1d6q36s">Register</button></div></form></div></div></div> */
}
