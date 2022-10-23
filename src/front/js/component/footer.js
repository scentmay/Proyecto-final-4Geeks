import React from "react";
import instaIcon from "../../img/instagram_icon.jpg";
import faceIcon from "../../img/face_icon.png";
import twitterIcon from "../../img/twitter_icon.png";
import tiktokIcon from "../../img/tiktok_icon.png";

export const Footer = () => {
  return (
    
      
      <footer className="container-fluid footer mt-auto text-center px-0" style={{overflowX: "hidden"}}>
        <div className="footer-dark">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 col-md-6 item mt-4">
                  <h3 style={{color: "#ffeba7"}}>Services</h3>
                  <ul className="justify-content-center">
                    <li>
                      <a href="/">Home S&F FIT</a>
                    </li>
                    <li>
                      <a href="#localizacion">Localización</a>
                    </li>
                    <li>
                      <a href="#referencia">Quienes somos</a>
                    </li>
                  </ul>
                </div>
                
                <div className="col-sm-6 col-md-6 item text mt-4">
                  <h3 style={{color: "#ffeba7"}}>S&F FIT</h3>
                  <p>
                  <i>"Todo logro empieza con la decisión de intentarlo"</i>
                  </p>
                  <p>
                  <i>"El dolor que sientes hoy es la fuerza que tendrás mañana"</i>
                  </p>
                </div>
                <div className="col item social">
                  <a href="https://es-es.facebook.com/" style={{backgroundImage: `url(${faceIcon})`, backgroundSize: "110%", backgroundRepeat: "no-repeat",backgroundPositionX:"50%", backgroundPositionY:"50%"}}>
                  </a>
                  <a href="https://www.instagram.com/" style={{backgroundImage: `url(${instaIcon})`, backgroundSize: "130%", backgroundRepeat: "no-repeat",backgroundPositionX:"50%", backgroundPositionY:"50%"}}>
                  </a>
                  <a href="https://twitter.com/" style={{backgroundImage: `url(${twitterIcon})`, backgroundSize: "320%", backgroundRepeat: "no-repeat",backgroundPositionX:"50%", backgroundPositionY:"45%"}}>
                  </a>
                  <a href="https://www.tiktok.com/es/" style={{backgroundImage: `url(${tiktokIcon})`, backgroundSize: "120%", backgroundRepeat: "no-repeat",backgroundPositionX:"50%", backgroundPositionY:"50%"}}>
                  </a>
                </div>
              </div>
              <h3 className="pt-2"style={{color: "#ffeba7"}}>S&F FIT © 2022</h3>
            </div>
        </div>
      </footer>

  );
};
