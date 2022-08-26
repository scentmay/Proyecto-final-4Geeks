import React from "react";



export const Contacto = () => {


    return (


        <div className="contacto">

            <h2>Contactate con nosotros</h2>
            <form class="form-inline" action="/action_page.php">
                <div class="form-group">
                    <label for="email">Your Name</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter your name" name="name" />
                </div>
                <div class="form-group">
                    <label for="email">Your E-mail:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" />
                </div>
                <div class="form-group">
                    <label for="comment">Your Message:</label>
                    <textarea class="form-control" rows="5" id="comment" placeholder="PLease enter your message here..."></textarea>
                </div>
                <button type="submit" class="btn" id="botonForm">Submit</button>
            </form>
        </div>



    );
};









