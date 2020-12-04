import React from "react";
import BreadCrumbs from "./Element/breadCrumb";
import Contant from "./Element/Contact";
import Map from "./Element/ContactUi";
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
   contactArea: {
      margin: "50px",
      "@media (max-width:767px)": {
         margin: "30px",
      },
      "@media (max-width:425px)": {
         margin: "10px",
      },
   },
});

const Carrer = () => {
   const Style = useStyles();
   return (
      <>
         <BreadCrumbs />
         <section className={Style.contactArea}>
            <Contant />
         </section>
         <section className={Style.contactArea}>
            <Map />
         </section>
      </>
   );
};

export default Carrer;
