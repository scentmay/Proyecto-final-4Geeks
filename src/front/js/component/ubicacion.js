import React from "react";
import "../../styles/subs.css"


export const Ubicacion = () => {
	

	return (
		<>
		<div className="text-center" id="titulito" style={{marginBottom: "20px", marginTop: "70px"}}>
		<h2 className=""style={{ color: "#ffeba7", textDecoration: "underline"}}> Nuestra ubicación</h2>
		</div>
		<div className="map-responsive">
			
            <iframe className="justify-content-center" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24288.035411399054!2d-3.688334!3d40.453039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8fff6d26e2b1988!2sEstadio%20Santiago%20Bernab%C3%A9u!5e0!3m2!1ses!2ses!4v1661258210591!5m2!1ses!2ses"></iframe>
    	</div>
		<hr/>
		</>
	);
};





