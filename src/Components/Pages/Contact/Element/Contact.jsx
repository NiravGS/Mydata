import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { FaMobile, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";

const useStyles = makeStyles({
   root: {
      marginBottom: "50px",
      boxShadow: "0 5px 25px rgba(0, 0, 0, 0.1)",
      padding: "40px 40px 40px",
      position: "relative",
      zIndex: "1",
      "@media(max-width:767px)": {
         marginBottom: "0",
         padding: "30px 15px 30px",
      },
      "&:after": {
         position: "absolute",
         content: '""',
         left: "0",
         bottom: "0",
         width: "80%",
         height: "2px",
         background: "#3078fb",
         right: "0",
         margin: "auto",
      },
   },
   SingleIcon: {
      textAlign: "center",
      "& svg": {
         fontSize: "64px",
         lineHeight: "77px",
         marginBottom: "20px",
         color: "#3078fb",
         display: "block",
         margin: "auto",
      },
      "& p": {
         fontSize: "16px",
         lineHeight: "30px",
         marginBottom: "0px",
         height: "80px",
      },
   },
});

const CarrerJSX = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <div className={Style.CarrerJSX}>
               <Grid container spacing={4}>
                  <Grid md={4} sm={6} xs={12} item>
                     <Card className={Style.root}>
                        <CardContent>
                           <div className={Style.ContactIcon}>
                              <div className={Style.SingleIcon}>
                                 <FaMobile />
                                 <p>
                                    Call : +0011-564-543
                                    <br />
                                    <span>Monday-Friday (10am-18pm)</span>
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} item>
                     <Card className={Style.root}>
                        <CardContent>
                           <div className={Style.ContactIcon}>
                              <div className={Style.SingleIcon}>
                                 <FaEnvelopeOpenText />
                                 <p>
                                    Email : Ragner3@gmail.com
                                    <br />
                                    <span>Web: www.rockstheme.com</span>
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </Grid>
                  <Grid md={4} sm={12} xs={12} item>
                     <Card className={Style.root}>
                        <CardContent>
                           <div className={Style.ContactIcon}>
                              <div className={Style.SingleIcon}>
                                 <FaMapMarkerAlt />
                                 <p>
                                    Location : Newyork city
                                    <br />
                                    <span>23 house/3 Road</span>
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </>
   );
};

export default CarrerJSX;
