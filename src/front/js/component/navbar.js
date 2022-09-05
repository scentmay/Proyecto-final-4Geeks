import React, { useContext }from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../store/appContext";

export const Header = () => {

	const { store, actions } = useContext(Context);
	const logOut = () => {
        actions.cleanStore();
      }

  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            S&F FIT
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
                                <Link to="/">
                                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                </Link>
                            )
                    }
                </div>
      </Navbar>
    </>
  );
};



// {/* <div className="menu">
// <img src="https://image.shutterstock.com/image-vector/fitness-gym-logo-design-vector-260nw-1707162607.jpg"></img>
// <nav>
// 	<ul>
// 		<li><a href="">Home</a></li>
// 		<li><a href="">Contacto</a></li>
// 		<li><a href="">Ubicacion</a></li>
// 		<li><a href="">Informacion</a></li>
// 	</ul>
// </nav>
// </div>
// <div className="titular">
// <h1>Bienvenido a SyF FIT</h1>
// <a href="">Ingrese a su perfil</a>
// </div>

//  */}

			// <nav className="navbar navbar-light bg-light">
			// 	<div className="container">
			// 		<Link to="/">
			// 			<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			// 		</Link>
			// 		<div className="ml-auto">
			// 			<Link to="/demo">
			// 				<button className="btn btn-primary">Check the Context in action</button>
			// 			</Link>
			// 		</div>
			// 	</div>
			// </nav>