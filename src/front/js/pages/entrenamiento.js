import React, { useContext, useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";




export const Entrenamiento = () => {


    const { store, actions } = useContext(Context);
    const [objective, setObjective] = useState ("");

    const tipoDeEjercicio =["back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"]

    const ejerciciosEnCurso = ["back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"]

    const posicion = Math.floor(Math.random() * 10)
    const ejercicioAsignado = tipoDeEjercicio[posicion]

    useEffect(() => {
        actions.ejercicios(ejercicioAsignado, store.survey.objective);
    }, []);


    return (
        <>

            <div className='d-flex'>
                
                {store.entrenoAsignado.map((item, index) => {
                    return (
                        
                        <div key={index}>
                            <div className="card" style={{width: "14rem"}}>
                                <img className="card-img-top" src={item.gifUrl} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.bodyPart}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    )
                })}





            </div>
        </>
    );
};



{/* <div key={index}>
<ul>
    <li>{item.gifUrl}</li>
    <li>{item.name}</li>
    <li>{item.bodyPart}</li>
</ul>

</div> */}


{/* <p>
El entreno se generará con tu preferencia actual. Actualmente es:{" "}
{store.survey.objective}{" "}
</p>
<p>Si quieres cambiar tu objetivo, puedes hacerlo en la encuesta </p>
<p>Puedes cabiarlo también aquí:</p>
<div className="field ">
<input
  className="input-field"
  placeholder="nuevo objetivo"
  list="objective"
  value={objective}
  onChange={(e) => {
    setObjective(e.target.value);
  }}
/>
<datalist id="objective">
  <option value="Tren superior" />{" "}
  {/* 5 ejercicios de tren superior */}
//   <option value="Tren inferior" />{" "}
//   {/* 5 ejercicios de tren inferior */}
//   <option value="Zona media" /> {/* 5 ejercicios zona abdominal */}
//   <option value="Quemagrasas" /> {/* 5 ejercicios de cardio */}
//   <option value="Acondicionamiento general" />{" "}
//   {/* 1 ejercicio de cada tipo, 5 ejercicios */}
// </datalist>
// </div>

// <button className="btn" onClick={handleClick}>
// GENERAR ENTRENO
// </button> */}