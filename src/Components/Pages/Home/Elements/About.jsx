import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import { FaPlay } from "react-icons/fa";

import AboutImg from "../assest/Images/About/about.jpg";

const useStyles = makeStyles({
   AboutImg: {
      backgroundImage: `url(${AboutImg});`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width:767px)": {
         height: "447px",
      },
   },
   Icon: {
      background: "#3078fb",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
      height: "70px",
      lineHeight: "66px",
      width: "70px",
      overflow: "hidden",
      transition: "0.4s",
      border: "1px solid #3078fb",
      textAlign: "center",
      "& svg": {
         color: "#fff",
         marginLeft: "5px",
      },
   },
   aboutContent: {
      background: "#062241",
      padding: "100px 70px 100px 100px",
      "@media(max-width:991px)": {
         padding: "50px",
      },
      "@media(max-width:767px)": {
         padding: "20px",
      },
   },
   sectionHeadline: {
      position: "relative",
      "& span": {
         color: "#3078fb",
      },
      "& h3": {
         maxWidth: "100%",
         margin: "0px 0px 20px",
         textAlign: "left",
         color: "#fff",
         fontSize: "34px",
         lineHeight: "40px",
         fontWeight: "500",
      },
      "& p": {
         maxWidth: "100%",
         textAlign: "left",
         color: "#ddd",
      },
   },
   aboutCompany: {
      marginTop: "15px",
       display: "flex",
       "@media (max-width:991px)": {
          display:"block"
      }
   },
   SingleAbout: {
       width: "50%",
       "@media (max-width:991px)": {
        width: "100%",
    }
   },
   aboutText: {
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
      lineHeight: "26px",
      position: "relative",
      paddingLeft: "30px",
      display: "block",
      marginTop: "10px",
      "&::before": {
         position: "absolute",
         content: '""',
         border: "1px solid #fff",
         left: "0",
         top: "8px",
         width: "10px",
         height: "10px",
         borderRadius: "50px",
      },
   },
});
const About = () => {
   const Style = useStyles();
   return (
      <>
         <Grid container>
            <Grid sm={4}>
               <div className={Style.AboutImg}>
                  <div className={Style.Icon}>
                     <FaPlay />
                  </div>
               </div>
            </Grid>
            <Grid sm={8}>
               <div className={Style.aboutContent}>
                  <div className={Style.sectionHeadline}>
                     <h3>
                        Technology <span class="color">more experts</span> that
                        provides security
                     </h3>
                     <p>
                        The phrasal sequence of the Lorem Ipsum text is now so
                        widespread and commonplace that many DTP programmes can
                        generate dummy text using the starting sequence "Lorem
                        ipsum". Fortunately, the phrase 'Lorem Ipsum' is now
                        recognized by electronic pre-press systems and, when
                        found, an alarm can be raised.
                     </p>
                  </div>
                  <div className={Style.aboutCompany}>
                     <div className={Style.SingleAbout}>
                        <span className={Style.aboutText}>
                           Professional team
                        </span>
                        <span className={Style.aboutText}>
                           Server secure payments
                        </span>
                        <span className={Style.aboutText}>Live hat upport</span>
                     </div>
                     <div className={Style.SingleAbout}>
                        <span className={Style.aboutText}>Goal achivment</span>
                        <span className={Style.aboutText}>
                           Worldwide services company
                        </span>
                        <span className={Style.aboutText}>
                           Marketing expert policy
                        </span>
                     </div>
                  </div>
               </div>
            </Grid>
         </Grid>
      </>
   );
};

export default About;
