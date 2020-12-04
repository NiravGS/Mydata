import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import { FaLayerGroup, FaGlobe, FaAward, FaUser } from "react-icons/fa";

import Circle from "../assest/Images/Project/circle.png";
import Top from "../assest/Images/Project/self.png";

const useStyles = makeStyles((theme) => ({
   CounterImg: {
      marginRight: "50px",
      position: "relative",
      "@media(max-width:767px)": {
         marginRight: "0px",
         marginBottom: "30px",
      },
   },
   rotmateImage: {
      position: "inherit",
      zIndex: "2",
      opacity: "0.3",
      animationName: `$rotateme `,
      animationDuration: "30s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
   },
   "@keyframes rotateme": {
      "0%": {
         WebkitTransform: "rotate(0deg)",
         transform: "rotate(0deg)",
      },
      "100%": {
         WebkitTransform: "rotate(360deg)",
         transform: "rotate(360deg)",
      },
   },
   Topimg: {
      position: "absolute",
      top: "90px",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "2",
   },
   funText: {
      padding: "40px 10px",
      textAlign: "center",
      borderRadius: "3px",
      marginBottom: "30px",
      background: "#f5f8fb",
      display: "flex",
      justifyContent: "space-around",
   },
   counterIcon: {
      color: "#3078fb",
      display: "block",
      fontSize: "44px",
      paddingBottom: "10px",
      lineHeight: "50px",
      fontWeight: "100",
      "& h4": {
         color: "#444",
         fontSize: "18px",
         textTransform: "capitalize",
         marginBottom: "0px",
      },
   },
   counter: {
      color: "#444",
      display: "block",
      fontSize: "40px",
      paddingBottom: "10px",
      lineHeight: "44px",
      fontWeight: "600",
   },
}));

const About = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <Grid container>
               <Grid md={6} sm={6} xs={12}>
                  <div className={Style.CounterImg}>
                     <div className={Style.rotmateImage}>
                        <img src={Circle} alt="" />
                     </div>
                     <div className={Style.Topimg}>
                        <img src={Top} alt="" />
                     </div>
                  </div>
               </Grid>
               <Grid md={6} sm={6} xs={12}>
                  <div className={Style.funText}>
                     <div className={Style.CounterBox}>
                        <div className={Style.fun_text}>
                           <span className={Style.counterIcon}>
                              <FaLayerGroup />
                           </span>
                           <span className={Style.counter}>510</span>
                           <h4>Total projects</h4>
                        </div>
                     </div>
                     <div className={Style.CounterBox}>
                        <div className={Style.fun_text}>
                           <span className={Style.counterIcon}>
                              <FaGlobe />
                           </span>
                           <span className={Style.counter}>120</span>
                           <h4>Worldwide</h4>
                        </div>
                     </div>
                  </div>
                  <div className={Style.funText}>
                     <div className={Style.CounterBox}>
                        <div className={Style.fun_text}>
                           <span className={Style.counterIcon}>
                              <FaAward />
                           </span>
                           <span className={Style.counter}>40</span>
                           <h4>Awards Win</h4>
                        </div>
                     </div>
                     <div className={Style.CounterBox}>
                        <div className={Style.fun_text}>
                           <span className={Style.counterIcon}>
                              <FaUser />
                           </span>
                           <span className={Style.counter}>210</span>
                           <h4>Team Member</h4>
                        </div>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default About;
