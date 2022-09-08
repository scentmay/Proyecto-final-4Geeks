import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Header } from "./component/navbar";
import { Footer } from "./component/footer";
import { Suscription } from "./component/subscription";
import { Ubicacion } from "./component/ubicacion";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Contacto } from "./component/contacto";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Survey } from "./pages/survey";
import { Admin } from "./pages/admin";
import { ContactForm } from "./pages/contact_form";
import { EmailSent } from "./pages/email_sent";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop> 
                    <Header />               
                        <Routes>
                            <Route element={<Home />} path="/" exact />   
                            <Route element={<Suscription />} path="/suscripcion" />
                            <Route element={<Contacto />} path="/contacto" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<h1>Not found!</h1>} />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Signup />} path="/signup" />                   
                            <Route element={<Survey />} path="/survey" />                   
                            <Route element={<Admin />} path="/admin" />                   
                            <Route element={<ContactForm />} path="/contactform/:email/:name" />                   
                            <Route element={<ContactForm />} path="/contactform" />                   
                            <Route element={<EmailSent />} path="/emailsent" />                   
                        </Routes>  
                    <Footer />               
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);