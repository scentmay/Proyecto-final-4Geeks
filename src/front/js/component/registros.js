import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Registros = () => {

    const { store, actions } = useContext(Context);
    const [registro, setRegistro] = useState("");

    useEffect(() => {
        setRegistro({...store.user})
    }, [store.user]);


  return (
    <div>
        <h3>Aqui van mis objetivos</h3>
        </div>
  )
}

