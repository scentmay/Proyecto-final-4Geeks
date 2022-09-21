import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../store/appContext";
import "../../img/logo.png"
import { Carusel } from "../pages/carusel";
import fondo from '../../img/signup_img.jpg'


export const Header = () => {

  const { store, actions } = useContext(Context);
  const logOut = () => {
    actions.cleanStore();
  }

  return (
    <>
      <div className="container-fluid p-0 m-0">
          <Navbar className="prueba fixed-top" bg="dark" variant="dark" style={{ position: "fixed", width: "100%" }} >
            <Navbar.Brand href="/" >
                <img id="logo" src="logo.png" />
            </Navbar.Brand>
                  <div className="ms-auto">
                      {
                          !store.user.token ?
                              (
                                  <Link to="/login">
                                      <button className="btn btn-primary">Login</button>
                                  </Link>
                              )
                              :
                              (
                                  
                                      (store.user.role == "admin")?(<Link to="/">
                                      <Link to={'/login'}><button className="btn ms-3">Ir a login</button></Link>
                                      <Link to={'/contactform'}><button className="btn ms-3">Mail</button></Link>
                                      <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                  </Link>
                                  ):(
                                  <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                  )
                              )
                      }
                  </div>
          </Navbar>
        </div>
    </>
  );
}
