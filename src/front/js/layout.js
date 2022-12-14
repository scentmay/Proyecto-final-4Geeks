import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Header } from "./component/navbar";
import { Footer } from "./component/footer";
import { Suscription } from "./component/subscription";
import { Ubicacion } from "./component/ubicacion";
import { Usuario } from "./pages/userdashboard";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Contacto } from "./component/contacto";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Survey } from "./pages/survey";
import { AdminHome } from "./pages/admin-home";
import { AdminCuotas } from "./pages/admin-cuotas";
import { AdminNewAdmin } from "./pages/admin-newadmin";
import { ContactForm } from "./pages/contact_form";
import { EmailSent } from "./pages/email_sent";
import { Recover_password } from "./pages/recover_password";
import { New_password } from "./pages/hide_login";


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
                        <Route element={<Usuario />} path="/usuario" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />                   
                        <Route element={<Survey />} path="/survey" /> 
                        <Route element={<AdminHome />} path="/admin-home" />                                    
                        <Route element={<AdminCuotas />} path="/admin-cuotas" />                                    
                        <Route element={<AdminNewAdmin />} path="/admin-newadmin" />                                    
                        <Route element={<ContactForm />} path="/contactform/:email/:name" />                   
                        <Route element={<ContactForm />} path="/contactform" />                   
                        <Route element={<EmailSent />} path="/emailsent" />                   
                        <Route element={<Recover_password />} path="/recover-password" />                   
                        <Route element={<New_password />} path="/hide-login" />                   
                    </Routes>   
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);