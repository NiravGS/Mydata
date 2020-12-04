import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Components/Elements/Header";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Pages/Error";
import Carrer from "./Components/Pages/Carrer";
import Services from "./Components/Pages/Services";
import TopTagline from "./Components/Elements/TopTagline";
import Footer from "./Components/Elements/Footer"
import "./App.scss";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   const [isLoaded, setIsLoaded] = useState(true);
   const [isout, setisout] = useState(false);

   useEffect(() => {
      AOS.init({
         duration: 2000,
      });
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setIsLoaded(false);
      }, 2000);
      setTimeout(() => {
         setisout(true);
      }, 1900);
   }, []);
   return (
      <>
         {isLoaded ? (
            <div className="loader">
               <div
                  className={
                     isout
                        ? "loader-left slideInLeft animated slideInLeftReverse"
                        : "loader-left slideInLeft animated"
                  }
               />
               <div className="loader-center animated round">
                  <h3>G-Code</h3>
               </div>
               <div
                  className={
                     isout
                        ? "loader-right animated slideInRightReverse"
                        : "loader-right slideInRight animated"
                  }
               />
            </div>
         ) : (
            <BrowserRouter>
               <div className="Header">
                  <TopTagline />
                  <Header />
               </div>
               <Route
                  render={({ location }) => (
                     <TransitionGroup>
                        <CSSTransition
                           key={location.key}
                           timeout={500}
                           classNames="fade"
                        >
                           <Switch location={location}>
                              <Route path="/" component={Home} exact />
                              <Route path="/About" component={About} />
                              <Route path="/Contact" component={Contact} />
                              <Route path="/Carrer" component={Carrer} />
                              <Route path="/Services" component={Services} />
                              <Route component={Error} />
                           </Switch>
                        </CSSTransition>
                     </TransitionGroup>
                  )}
                  />
                  <Footer />
            </BrowserRouter>
         )}
      </>
   );
}

export default App;
