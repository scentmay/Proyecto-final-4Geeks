import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import '../../styles/admin.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fondo from '../../img/signup_img.jpg'


export const Admin = () => {

  const { store, actions } = useContext(Context);


    return(
        <div>
         		<div className="mainContainer" style={{backgroundImage: `url(${fondo})`}}>
		      	  <div className="form d-flex justify-content-center"> 

                {/* {
                  
                  (store.user.token && store.user.token != "" && store.user.token != undefined)?
                  (
                    // está logado
                  )
                  :
                  (//NO está logado)

                } */}

              </div>
            </div>
        </div>
    );
}