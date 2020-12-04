import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import { FaLightbulb, FaRegChartBar, FaUsers } from "react-icons/fa";

const useStyles = makeStyles({
   WellSerice: {
      padding: "40px 30px",
   },
   ServiceIcon: {
      position: "relative",
      textAlign: "center",
      padding: "0px",
      "& svg": {
         fontSize: "80px",
         display: "inline-block",
         margin: "0px 10px 30px",
         lineHeight: "80px",
         position: "relative",
         color: "#3078fb",
      },
   },
   TextContent: {
      textAlign: "center",
      "& h4": {
         display: "inline-block",
         fontSize: "28px",
         marginBottom: "0",
         padding: "0 0 20px",
      },
      "& p": {
         fontSize: "20px",
         color: "#5d6471",
      },
   },
});
const Service = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <Grid container>
               <Grid md={4}>
                  <div className={Style.WellSerice}>
                     <div className={Style.ServiceIcon}>
                        <FaLightbulb />
                     </div>
                     <div className={Style.ServiceContent}>
                        <div className={Style.TextContent}>
                           <h4>Innovation idea</h4>
                           <p>
                              Aspernatur sit adipisci quaerat unde at neque
                              Redug Lagre dolor sit amet consectetu.
                           </p>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid md={4}>
                  <div className={Style.WellSerice}>
                     <div className={Style.ServiceIcon}>
                        <FaRegChartBar />
                     </div>
                     <div className={Style.ServiceContent}>
                        <div className={Style.TextContent}>
                           <h4>Market research</h4>
                           <p>
                              Aspernatur sit adipisci quaerat unde at neque
                              Redug Lagre dolor sit amet consectetu.
                           </p>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid md={4}>
                  <div className={Style.WellSerice}>
                     <div className={Style.ServiceIcon}>
                        <FaUsers />
                     </div>
                     <div className={Style.ServiceContent}>
                        <div className={Style.TextContent}>
                           <h4>Creative team</h4>
                           <p>
                              Aspernatur sit adipisci quaerat unde at neque
                              Redug Lagre dolor sit amet consectetu.
                           </p>
                        </div>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default Service;
