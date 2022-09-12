import React from "react";



export const Contacto = () => {


    return (


        <div className="contacto">

            <h2>Contactate con nosotros</h2>
            <form className="form-inline" action="/action_page.php">
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your name" name="name" />
                </div>
                <div className="form-group">
                    <label>Your E-mail:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
                </div>
                <div className="form-group">
                    <label>Your Message:</label>
                    <textarea className="form-control" rows="5" id="comment" placeholder="PLease enter your message here..."></textarea>
                </div>
                <button type="submit" className="btn" id="botonForm">Submit</button>
            </form>
        </div>



    );
};









