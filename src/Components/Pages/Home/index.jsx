import { Style } from "@material-ui/icons";
import React from "react";
import Intro from "./Elements/IntroArea";
import Service from "./Elements/allWelServices";
import About from "./Elements/About";
import ServiceArea from "./Elements/Service";
import Counter from "./Elements/Counter";
import Quote from "./Elements/quoteArea";
import Slider from "./Elements/Slider"
import { makeStyles, Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
   FixPadding: {
      padding: "110px 0px",
      overflow: "hidden",
      "@media(max-width:991px)": {
         padding: "50px",
      },
      "@media(max-width:767px)": {
         padding: "20px",
      },
   },
   WelcomeArea: {},
   About: {
      "& .MuiGrid-root": {
         width: "100%",
      },
   },
   CounterArea: {
      "& .MuiGrid-container": {
         alignItems: "center",
      },
   },
   Quote: {
      height: "auto",
      background: "#062241",
   },
});

const Footer = () => {
   const Style = useStyles();
   return (
      <>
         <section className={Style.Intro}>
            <Intro />
         </section>
         <section className={Style.WelcomeArea} className={Style.FixPadding}>
            <Service />
         </section>
         <section className={Style.About}>
            <About />
         </section>
         <section className={`${Style.ServiceArea} ${Style.FixPadding}`}>
            <ServiceArea />
         </section>
         <section className={`${Style.CounterArea} ${Style.FixPadding}`}>
            <Counter />
         </section>
         <section className={`${Style.Quote} ${Style.FixPadding}`}>
            <Quote />
         </section>
         <section className={`${Style.Slider} ${Style.FixPadding}`}>
            <Slider />
         </section>
      </>
   );
};

export default Footer;
