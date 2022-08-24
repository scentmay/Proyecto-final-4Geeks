import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/subs.css";
import "../../styles/footer.css";
import { Suscription } from "./subscription";
import { Ubicacion } from "./ubicacion";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
	<div className="app">

		<div className="container-fluid">
			<Navbar />
		</div>
		<div className="container-fluid">
			<Suscription />
		</div>
		<div className="Ubi">
			<Ubicacion />
		</div>
		<div className="Footer">
			<Footer />
		</div>
	</div>
		
	);
};
