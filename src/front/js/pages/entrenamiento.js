import Card from "react-bootstrap/Card";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Entrenamiento = () => {
  const { store, actions } = useContext(Context);
  const [objective, setObjective] = useState ("");

  const handleClick = () => {};
    
  return (
    <>
      <div className="d-flex">
        <p>
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
            <option value="Tren inferior" />{" "}
            {/* 5 ejercicios de tren inferior */}
            <option value="Zona media" /> {/* 5 ejercicios zona abdominal */}
            <option value="Quemagrasas" /> {/* 5 ejercicios de cardio */}
            <option value="Acondicionamiento general" />{" "}
            {/* 1 ejercicio de cada tipo, 5 ejercicios */}
          </datalist>
        </div>

        <button className="btn" onClick={handleClick}>
          GENERAR ENTRENO
        </button>

        {/* <div className="card">
                <div className='ratio ratio-16x9'>
                <iframe width="1264" height="520" src="https://www.youtube.com/embed/0l5EiITOB9E" title="3 Ejercicios básicos para bíceps - Con mancuernas y barra Z" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div className="card-body">
                        <h4 className="card-title">Entrenar biceps</h4>
                        <p className="card-text">Aqui tienes un video interactivo que te muestra como ejercitar de manera correcta tus musculos</p>
                    </div>
            </div>
            <div className="card">
                <div className='ratio ratio-16x9'>
                <iframe width="1264" height="520" src="https://www.youtube.com/embed/0l5EiITOB9E" title="3 Ejercicios básicos para bíceps - Con mancuernas y barra Z" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div className="card-body">
                        <h4 className="card-title">Entrenar biceps</h4>
                        <p className="card-text">Aqui tienes un video interactivo que te muestra como ejercitar de manera correcta tus musculos</p>
                    </div>
            </div>
            <div className="card">
                <div className='ratio ratio-16x9'>
                <iframe width="1264" height="520" src="https://www.youtube.com/embed/0l5EiITOB9E" title="3 Ejercicios básicos para bíceps - Con mancuernas y barra Z" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div className="card-body">
                        <h4 className="card-title">Entrenar biceps</h4>
                        <p className="card-text">Aqui tienes un video interactivo que te muestra como ejercitar de manera correcta tus musculos</p>
                    </div>
            </div> */}
      </div>
    </>
  );
};
