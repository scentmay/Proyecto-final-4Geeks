import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const EditarPerfil = () => {

    const { store, actions } = useContext(Context);
    const [useraux, setUserAux] = useState("");

    useEffect(() => {
        setUserAux({...store.user})
    }, [store.user]);

    const handleClick = () => {
        actions.signUp(email, password, Username, lastName, dni, address, phone);
    }

    return (
        <>
            <div className="p-3 border-0">
                <h3 className="text-center">Mis datos</h3>
                <div className="d-grid gap-2">
                    <label className="form-label">Nombre</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Indique su Nombre"
                            value={useraux.Username}
                            onChange={(e) => {
                                setUserAux({ ...useraux, Username: e.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <label className="form-label">Apellidos</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Indique sus Apellidos"
                            value={useraux.lastname}
                            onChange={(e) => {
                                setUserAux({ ...useraux, lastname: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Dni</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Indique su Dni"
                            value={useraux.dni}
                            onChange={(e) => {
                                setUserAux({ ...useraux, dni: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div
                    className="d-grid gap-2">
                    <label className="form-label">Direccion</label>
                    <div className="d-grid gap-2">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Indique su direccion"
                            value={useraux.address}
                            onChange={(e) => {
                                setUserAux({ ...useraux, address: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Número telefónico</label>
                    <div className="d-grid gap-2">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Escriba su número telefónico"
                            value={useraux.phone}
                            onChange={(e) => {
                                setUserAux({ ...useraux, phone: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">Correo Electrónico</label>
                    <div className="d-grid gap-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Escriba su correo electrónico"
                            value={useraux.email}
                            onChange={(e) => {
                                setUserAux({ ...useraux, email: e.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>
                        Actualizar y guardar
                    </button>
                </div>
            </div>
        </>
    );
};