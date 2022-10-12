import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Modal from 'react-bootstrap/Modal';


export const EditarPerfil = () => {

    const { store, actions } = useContext(Context);
    const [useraux, setUserAux] = useState("");
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    };

    useEffect(() => {
        setUserAux({ ...store.user });
    }, [store.user]);

    const handleClick = () => {
        actions.userUpdate(
            useraux.email,
            useraux.userName,
            useraux.lastName,
            useraux.dni,
            useraux.direccion,
            useraux.telefono
        );
        handleShow();
    };

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cambios registrados correctamente</Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-center fs-3">Pulse aceptar para continuar</Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Aceptar</button>
                </Modal.Footer>
            </Modal>
            <div className="container p-3 border-0" id="editarPerfil">
                <h3 className="text-center" style={{ color: "#ffeba7" }}>Mis datos</h3>
                <div className="d-grid gap-2">
                    <label className="form-label">Nombre</label>
                        <div className="d-grid gap-2">
                            <div className="field">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Indique su Nombre"
                                    value={useraux.userName}
                                    onChange={(e) => {
                                        setUserAux({ ...useraux, userName: e.target.value });
                                    }} style={{ color: "#ffeba7" }}
                                />
                            </div>
                        </div>
                </div>
                <div className="d-grid gap-2">
                    <label className="form-label">Apellidos</label>
                    <div className="d-grid gap-2">
                        <div className="field">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Indique sus Apellidos"
                                value={useraux.lastName}
                                onChange={(e) => {
                                    setUserAux({ ...useraux, lastName: e.target.value });
                                }} style={{ color: "#ffeba7" }}
                            />
                             </div>
                        </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Dni</label>
                    <div className="d-grid gap-2">
                    <div className="field">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Indique su Dni"
                            value={useraux.dni}
                            onChange={(e) => {
                                setUserAux({ ...useraux, dni: e.target.value });
                            }} style={{ color: "#ffeba7" }}
                        />
                     </div>   
                    </div>
                </div>

                <div
                    className="d-grid gap-2">
                    <label className="form-label">Direccion</label>
                    <div className="d-grid gap-2">
                    <div className="field">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Indique su direccion"
                            value={useraux.direccion}
                            onChange={(e) => {
                                setUserAux({ ...useraux, direccion: e.target.value });
                            }} style={{ color: "#ffeba7" }}
                        />
                       </div> 
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Número telefónico</label>
                    <div className="d-grid gap-2">
                    <div className="field">
                        <input
                            type="tel"
                            className="input-field"
                            placeholder="Escriba su número telefónico"
                            value={useraux.telefono}
                            onChange={(e) => {
                                setUserAux({ ...useraux, telefono: e.target.value });
                            }} style={{ color: "#ffeba7" }}
                        />
                      </div>  
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Correo Electrónico</label>
                    <div className="d-grid gap-2">
                    <div className="field">
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Escriba su correo electrónico"
                            value={useraux.email}
                            onChange={(e) => {
                                setUserAux({ ...useraux, email: e.target.value });
                            }} style={{ color: "#ffeba7" }}
                        />
                      </div>  
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn" onClick={handleClick}>Actualizar y Guardar</button>
                </div>
            </div>
        </>
    );
};