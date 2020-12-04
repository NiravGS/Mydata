import React from "react";
import BreadCrumbs from "./Element/breadCrumb";
import CarrerJSX from "./Element/Carrer";
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

const Carrer = () => {
   const Style = useStyles();
   return (
      <>
         <BreadCrumbs />
         <CarrerJSX />
      </>
   );
};

export default Carrer;
