import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import '../../styles/signup.css'
import fondo from '../../img/signup_img.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Survey = () => {
	const { store, actions } = useContext(Context);
	const [objective, setObjective] = useState ("");
	const [medical, setMedical] = useState ("");
	const [message, setMessage] = useState ("");
	const [show, setShow] = useState(false);

	const survey_data = store.survey
	let navigate = useNavigate();
	
	const handleShow = () => setShow(true);
	const handleClose = () => {
		setShow(false);
	}
	const handleClick = (e) => {
		e.preventDefault();
		if (Object.entries(survey_data).length === 0) {
			console.log("sin datos, se colocan por primera vez")
			actions.survey(objective, medical, message);
			setObjective("");
			setMedical("");
			setMessage("");
			handleShow();
			return;
		}
		//console.log("hay datos, hay que actualizar info")
		actions.surveyUpdate(objective, medical, message);
		setObjective("");
		setMedical("");
		setMessage("");
		handleShow();
	}
	
	const redirigir = () => {
		// console.log("Entrando aquí...")
		setTimeout(()=>{
		  navigate("/login")
		}, 5000)
	}

	useEffect (() => {
		actions.surveyData();
	},[objective]);


	return (
		<div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
			<div className="form d-flex justify-content-center"> 

			{/* Modal */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Cambios registrados correctamente</Modal.Title>
				</Modal.Header>

				<Modal.Body>pulse aceptar para continuar</Modal.Body>

				<Modal.Footer>
					<button className="btn" onClick={handleClose}>Aceptar</button>
				</Modal.Footer>
			</Modal>
			{/* Fin modal */}
			
			{

			 
				(store.user.token && store.user.token != "" && store.user.token != undefined)?

				(	<div className="card">
						<h4 className="title">Cuéntanos un poco más de tí</h4>
						<h5 style={{color: "white"}}>Actualiza esta sección cuando sea necesario</h5>
						<form id="form">
						<div className="field ">
							<input className="input-field" 
							placeholder="¿Cuál es tu objetivo?" 
							list="objective" 
							name="browser" 
							value={objective}
							onChange={(e) => {
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
							<input className="input-field" 
							placeholder="¿Alguna lesión o prescripción médica?" list="medical" 
							value={medical} 
							onChange={(e) => {
								setMedical(e.target.value)
							}} />

							<datalist id="medical">
								<option value="Espalda" />
								<option value="Piernas" />
								<option value="Brazos" />
								<option value="Zona abdominal" />
								<option value="Ninguna" />
							</datalist>
						</div>

						<textarea className="input-field mt-3 border border-warning p-3" placeholder="Aquí puedes detallar cualquier aspecto relevante sobre las preguntas" 
						name="message" 
						id="message" 
						rows="2" 
						cols="30"
						value={message}
						onChange={(e) => {
								setMessage(e.target.value)
							}}></textarea>

						<div className="actualData mt-1" style={{color: "white"}}>
							<h6><strong><u>Información actual</u></strong></h6>
							<p><u>Objetivo:</u> <i>{survey_data.objective}</i></p>
							<p><u>Atención en:</u> <i>{survey_data.medical}</i></p>
							<p><u>Información adicional:</u> <i>{survey_data.message}</i></p>
						</div>

						<div className="buttons">
								<Link to={'/login'}><button className="btn ms-3">Volver</button></Link>
								
								<input className="btn" type="reset" value="Reset" onClick={() => {
									setObjective("");
									setMedical("");
									setMessage("");	
								}}
								/>
								<button className="btn" onClick={handleClick}>ENVIAR</button>
						</div>
						</form>
					</div>
				)
				:
				(<div className="card">
					<h4 className="title">Usuario no registrado</h4>
					<p style={{color: "white"}}>Será redirigido a la página de login en 5 segundos</p>
					<Link to={'/login'}><button className="btn ms-3">Volver</button></Link>
					{redirigir()} 
				  </div>
				)
			}
			</div>			
		</div>
	);
};