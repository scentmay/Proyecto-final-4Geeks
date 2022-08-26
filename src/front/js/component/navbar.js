import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid mx-0" id="navbarMenu">
			
			<div className="menu">
				<img src="https://image.shutterstock.com/image-vector/fitness-gym-logo-design-vector-260nw-1707162607.jpg" id="logo"/>
				<nav>
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">Contacto</a></li>
						<li><a href="">Ubicacion</a></li>
						<li><a href="">Informacion</a></li>
					</ul>
				</nav>
			</div>
			<div className="titular">
				<h1>Bienvenido a SyF FIT</h1>
				<a href="https://3000-scentmay-protyectofinal-y7bukb0qw1r.ws-eu63.gitpod.io/login">Ingrese a su perfil</a>
			</div>
		</div>
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