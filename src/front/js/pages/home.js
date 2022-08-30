import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/subs.css";
import "../../styles/footer.css";
import { Suscription } from "../component/subscription";
import { Ubicacion } from "../component/ubicacion";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Contacto } from "../component/contacto";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
	<div className="app">

		<div className="container-fluid p-0">
			<Navbar />
		</div>
		<div className="container-fluid">
			<Suscription />
		</div>
		<div className="Ubi">
			<Ubicacion />
		</div>
		<div className="contacto">
			<Contacto />
		</div>
		<div className="Footer">
			<Footer />
		</div>
	</div>
		
	);
};
