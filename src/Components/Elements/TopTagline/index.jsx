import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import {
   FaRegEnvelope,
   FaSkype,
   FaTwitter,
   FaFacebookF,
   FaGoogle,
   FaPhoneSquareAlt,
   FaClock,
} from "react-icons/fa";

const useStyles = makeStyles({
   topBarArea: {
      background: "#243559",
      "& .MuiGrid-container": {
         alignItems: "center",
         justifyContent: "center",
      },
   },
   topbarLeft: {
      "& ul": {
         listStyle: "outside none none",
         margin: "0",
         padding: "0",
         "@media (max-width:991px)": {
            textAlign: "center",
         },
         "& li": {
            display: "inline-block",
            "& a": {
               color: "#ccc",
               marginRight: "20px",
               padding: "10px 0",
               textDecoration: "none",
               fontSize: "14px",
               letterSpacing: "0.60px",
               display: "flex",
               alignItems: "center",
               "@media (max-width:991px)": {
                  marginRight: "0",
               },
               "& svg": {
                  color: "#fff",
                  fontSize: "16px",
                  paddingRight: "7px",
               },
            },
         },
      },
   },
   topSocial: {
      float: "right",
      padding: "10px 0px",
      "& ul": {
         listStyle: "outside none none",
         margin: "0",
         padding: "0",
         "& li": {
            display: "inline-block",
            "& a": {
               color: "#fff",
               marginLeft: "5px",
               textAlign: "center",
               fontSize: "13px",
               width: "24px",
               height: "24px",
               lineHeight: "32px",
               borderRadius: "3px",
               background: "#3078fb",
               padding: "6px 0px",
               minWidth: "inherit",
               "&:hover": {
                  background: "#3078fb",
               },
               "& svg": {
                  color: "#fff",
               },
            },
         },
      },
   },
});
const TopTagline = () => {
   const Style = useStyles();
   return (
      <>
         <div className={Style.topBarArea}>
            <Container fixed>
               <Grid container>
                  <Grid item md={9}>
                     <div className={Style.topbarLeft}>
                        <ul>
                           <li>
                              <a href="#">
                                 <FaRegEnvelope />
                                 info@randerc3.com
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <FaPhoneSquareAlt />
                                 +3234-7665545
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <FaClock />
                                 Mon - Fri: 10:00 - 18:00
                              </a>
                           </li>
                        </ul>
                     </div>
                  </Grid>
                  <Grid item md={3}>
                     <div className={Style.topSocial}>
                        <ul>
                           <li>
                              <Button href="#" color="primary">
                                 <FaSkype />
                              </Button>
                           </li>
                           <li>
                              <Button href="#" color="primary">
                                 <FaTwitter />
                              </Button>
                           </li>
                           <li>
                              <Button href="#" color="primary">
                                 <FaFacebookF />
                              </Button>
                           </li>
                           <li>
                              <Button href="#" color="primary">
                                 <FaGoogle />
                              </Button>
                           </li>
                        </ul>
                     </div>
                  </Grid>
               </Grid>
            </Container>
         </div>
      </>
   );
};

export default TopTagline;
