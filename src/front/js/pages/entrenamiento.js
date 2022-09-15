import React, { useContext, useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";




export const Entrenamiento = () => {


    const { store, actions } = useContext(Context);




    useEffect(() => {
        actions.ejercicios();
    }, []);


    return (
        <>

            <div className='d-flex'>
                {store.ejercicio.map((item, index) => {
                    return (

                        <div key={index}>

                            <div className="card" style={{width: '18rem;'}}>
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