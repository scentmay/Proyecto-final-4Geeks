import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Registros = () => {

    const { store, actions } = useContext(Context);
    const [registro, setRegistro] = useState("");

    useEffect(() => {
        setRegistro({...store.user})
    }, [store.survey]);


  const handleClick = () => {
      actions.survey(objective, medical, message);
  }


  return (
    <div>
        <div className="p-3 border-0">
                <h3 className="text-center">Mis objetivos</h3>
                <div className="d-grid gap-2">
                    <label className="form-label">objective</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={registro.objective}
                            onChange={(e) => {
                              setRegistro({ ...registro, objective: e.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <label className="form-label">medical</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={registro.medical}
                            onChange={(e) => {
                              setRegistro({ ...registro, medical: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <label className="form-label">message</label>
                    <div className="d-grid gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={registro.message}
                            onChange={(e) => {
                              setRegistro({ ...registro, message: e.target.value });
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
        </div>
  )
}

