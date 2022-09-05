import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import '../../styles/admin.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Admin = () => {

  const { store, actions } = useContext(Context);

  const handleClick = () =>{
    actions.query();
  }

    return(
        <div>
          esta es la pag de admin 

          <button className="btn" onClick={handleClick}>LOGIN</button>
        </div>
    );
}