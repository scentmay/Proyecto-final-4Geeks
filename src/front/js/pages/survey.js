import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import '../../styles/signup.css'
import fondo from '../../img/signup_img.jpg'

export const Survey = () => {
	const { store, actions } = useContext(Context);
	const [objective, setObjective] = useState ("");
	const [medical, setMedical] = useState ("");
	const [message, setMessage] = useState ("");
	
	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault()
		actions.survey(objective, medical, message);
		//el siguiente paso es ir al dashboard del usuario registrado
	}
	
	return (
		<div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
			<div className="form d-flex justify-content-center"> 
					<div className="card">
					<h4 className="title">Cuéntanos un poco más de tí</h4>
					<form id="form">

						<div className="field ">
							<input className="input-field" placeholder="¿Cuál es tu objetivo?" list="objective" name="browser" onChange={(e) => {
								setObjective(e.target.value)
							}} />
							<datalist id="objective">
								<option value="Perder peso" />
								<option value="Ganar volumen" />
								<option value="Entrenar resistencia" />
								<option value="Acondicionamiento general" />
							</datalist>
						</div>

						<div className="field ">
							<input className="input-field" placeholder="¿Alguna lesión o prescripción médica?" list="medical" name="browser" value={medical} onChange={(e) => {
								setMedical(e.target.value)
							}} />
							<datalist id="medical">
								<option value="Espalda" />
								<option value="Piernas" />
								<option value="Brazos" />
								<option value="Zona abdominal" />
							</datalist>
						</div>

						<textarea className="input-field mt-3 border border-warning p-3" placeholder="Aquí puedes detallar cualquier aspecto relevante sobre las preguntas" name="message" id="message" rows="8" cols="30" onChange={(e) => {
								setMessage(e.target.value)
							}}></textarea>

						<div className="buttons">
								<Link to={'/'}><button className="btn ms-3">Volver</button></Link>
								
								<input className="btn" type="reset" value="Reset" onClick={() => window.location.reload()} />
								
								<button className="btn" onClick={handleClick}>ENVIAR</button>
								{/* <a href="#" className="btn-link">Forgot your password?</a> */}
						</div>
					</form>
				</div>
			</div>			
		</div>
	);
};