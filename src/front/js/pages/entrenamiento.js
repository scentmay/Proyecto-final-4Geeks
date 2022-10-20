import React, { useContext, useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import "../../styles/user.css";




export const Entrenamiento = () => {


    const { store, actions } = useContext(Context);
    const [objective, setObjective] = useState("");

    const tipoDeEjercicio = ["back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist"]


    const deleteTraining = () => {
        actions.cleanTraining()
    }

    const TrenSuperior = [
        "shoulders",
        "back",
        "upper arms",
        "lower arms",
        "chest"
    ]
    const TrenInferior = [
        "upper legs",
        "lower legs",
    ]
    const ZonaMedia = [
        "waist"
    ]
    const QuemaGrasas = [
        "cardio"
    ]

    const handleClick = () => {
        let objCliente = store.survey.objective
        switch (objCliente) {
            case 'Tren superior':
                const posicionTrenSup = Math.floor(Math.random() * TrenSuperior.length)
                const ejercicioAsignadoTrenSup = TrenSuperior[posicionTrenSup]
                actions.ejercicios(ejercicioAsignadoTrenSup)
                break;
            case 'Tren inferior':
                const posicionTrenInf = Math.floor(Math.random() * TrenInferior.length)
                const ejercicioAsignadoTrenInf = TrenInferior[posicionTrenInf]
                actions.ejercicios(ejercicioAsignadoTrenInf)
                break;
            case 'Zona media':
                const posicionZonaM = Math.floor(Math.random() * ZonaMedia.length)
                const ejercicioAsignadoZonaM = ZonaMedia[posicionZonaM]
                actions.ejercicios(ejercicioAsignadoZonaM)
                break;
            case 'Quemagrasas':
                const posicionQuemaG = Math.floor(Math.random() * QuemaGrasas.length)
                const ejercicioAsignadoQuemaG = QuemaGrasas[posicionQuemaG]
                actions.ejercicios(ejercicioAsignadoQuemaG)
                break;
            case 'Acondicionamiento general':
                for (let i = 0; i < 6; i++) {
                    const posicionAconG = Math.floor(Math.random() * tipoDeEjercicio.length)
                    const ejercicioAsignadoAconG = tipoDeEjercicio[posicionAconG]
                    actions.ejercicios(ejercicioAsignadoAconG)
                }
                break;
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center">

                <button className="btn" onClick={deleteTraining}>
                    Limpiar entreno
                </button>
                <button className="btn " onClick={handleClick}>
                    GENERAR ENTRENO
                </button>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {store.entrenoAsignado.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="col mb-5">
                            <div className="card2" id="card2">
                                <img className="card-img-top" src={item.gifUrl} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "#ffeba7" }}>{item.bodyPart}</p>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                             </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );
};

{/* <div className="row row-cols-3 row-cols-md-3 text-center mt-5 d-flex">
    {store.entrenoAsignado.map((item, index) => {
        return (
            <div key={index}>
                <div className="card">
                    <img className="card-img-top" src={item.gifUrl} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">{item.bodyPart}</p>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                </div>
            </div>
        )
    })}
</div> */}