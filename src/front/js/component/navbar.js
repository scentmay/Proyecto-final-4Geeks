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
      <Navbar className="nav background-color: transparent ! important;" style={{ width: "100%" }} >
        <Navbar.Brand href="/" >
          <img id="logo" src="logo.png" />
        </Navbar.Brand>
        <div className="ms-auto">
          {
            !store.user.token ?
              (
                <Link to="/login">
                  <button className="btn btn-primary"><i class="fa-solid fa-user fa-xl"></i></button>
                </Link>
              )
              :
              (

                (store.user.role == "admin") ? (<Link to="/">
                  <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3"><i class="fa-solid fa-user fa-xl"></i></Link>
                  <Link to={'/contactform'}><button className="btn ms-3"><i class="fa-solid fa-envelope fa-xl"></i></button></Link>
                  <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}><i class="fa-solid fa-right-from-bracket fa-xl"></i></Link>
                </Link>
                ) : (
                  <>
                    <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3"><i class="fa-solid fa-user fa-xl"></i></Link>
                    <Link to={'/login'} className="btn btn-primary btn-lg mt-3 ms-3" onClick={logOut}><i class="fa-solid fa-right-from-bracket fa-xl"></i></Link>
                  </>
                )
              )
          }
        </div>
      </Navbar>
    </>
  );
}
