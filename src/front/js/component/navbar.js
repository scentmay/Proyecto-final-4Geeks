import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../store/appContext";
import "../../img/logo.png"



export const Header = () => {

  const { store, actions } = useContext(Context);


  const logOut = () => {
    actions.cleanStore();
  }

  return (
    <>
            <Navbar className="prueba fixed-top background-color: transparent ! important;" style={{ position: "fixed", width: "100%" }} >
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

                (store.user.role == "admin") ? (<Link to="/">
                  <Link to={'/login'}><button className="btn ms-3">Ir a login</button></Link>
                  <Link to={'/contactform'}><button className="btn ms-3">Mail</button></Link>
                  <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}>Log out</Link>
                </Link>
                ) : (
                  <>
                    <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3">Mi Perfil</Link>
                    <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}>Log out</Link>
                  </>
                )
              )
          }
        </div>
      </Navbar>
    </>
  );
}
