import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header";
// import Home from "./component/Home/home";
import Home from "./component/Home/home-2";
import About from "./component/About/about";
import Services from "./component/Services/services";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";



const App= () => {
  return (
      
        <BrowserRouter>
                <Header/>
                        <Routes>
                                <Route path ="/"  element= {<Home/>}/>
                                <Route path ="/about"  element= {<About/>}/>
                                <Route path ="/services"  element= {<Services/>}/>
                                <Route path ="/contact"  element= {<Contact/>}/>
                        </Routes>
                <Footer/>
        </BrowserRouter>
  )
};

export default App;