import React from "react";
import BreadCrumbs from "./Element/breadCrumb";
import AllService from "../Home/Elements/allWelServices";
import AboutEle from "../Home/Elements/About";
import Counter from "../Home/Elements/Counter";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
   FixPadding: {
      padding: "110px 0px",
      "@media(max-width:991px)": {
         padding: "50px",
      },
      "@media(max-width:767px)": {
         padding: "20px",
      },
   },
   About: {
      "& .MuiGrid-root": {
         width: "100%",
      },
   },
});

const About = () => {
   const Style = useStyles();
   return (
      <>
         <BreadCrumbs />
         <section className={Style.WelcomeArea} className={Style.FixPadding}>
            <AllService />
         </section>
         <section className={Style.About}>
            <AboutEle />
         </section>
         <section className={`${Style.CounterArea} ${Style.FixPadding}`}>
            <Counter />
         </section>
      </>
   );
};

export default About;
