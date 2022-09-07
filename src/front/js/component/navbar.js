import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Header = () => {

  const { store, actions } = useContext(Context);

  const logOut = () => {
		actions.cleanStore();
	  }


  return (
    <>
      <Navbar bg="dark" variant="dark" style={{justifyContent: "space-between"}}>
          <Navbar.Brand href="/">
            S&F FIT
          </Navbar.Brand>
          
            {
              !store.user.token ?
                (
                  <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                )
                :
                (
                  <Link to="/login">
                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                  </Link>
                )
            }
          
      </Navbar>
    </>
  );
};
