import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import {
   FaDesktop,
   FaAndroid,
   FaAppStoreIos,
   FaGlobe,
   FaDatabase,
   FaBookReader,
} from "react-icons/fa";

import BreadCrubmsIMG from "../../../../assets/Images/breadcrubs/about.jpg";

const useStyles = makeStyles((theme) => ({
   BreadCrubms: {
      backgroundImage: `url(${BreadCrubmsIMG});`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      position: "relative",
      zIndex: "1",
      "&:after": {
         position: "absolute",
         content: '""',
         left: "0",
         top: "0",
         width: "100%",
         height: "100%",
         background: "rgba(0,0,0,.7)",
         zIndex: "-1",
      },
   },
   BreadCrubms2: {
      backgroundColor: "transparent",
      marginBottom: "0",
      padding: "250px  0px 250px ",
   },
   headLine: {
      textAlign: "center",
      "& h3": {
         fontSize: "45px",
         maxWidth: "500px",
         lineHeight: "40px",
         margin: "0 auto 15px",
         fontWeight: "500",
         color:"#fff"
      },
   },
}));

const BreadCrubms = () => {
   const Style = useStyles();
   return (
      <>
         <div className={Style.BreadCrubms}>
            <Container>
               <Grid container>
                  <Grid sm={12}>
                     <div className={Style.BreadCrubms2}>
                        <div className={Style.headLine}>
                           <h3>Services</h3>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </Container>
         </div>
      </>
   );
};

export default BreadCrubms;
