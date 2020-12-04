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

const useStyles = makeStyles((theme) => ({
   headingArea: {
      textAlign: "center",
      paddingBottom: "40px",
      position: "relative",
      "& h3": {
         fontSize: "34px",
         maxWidth: "500px",
         lineHeight: "40px",
         margin: "0px auto 15px",
         fontWeight: "500",
         textAlign: "center",
      },
      "& p": {
         color: "#5d6471",
      },
   },
   signleService: {
      zIndex: "1",
      background: "#fff",
      textAlign: "left",
      padding: "40px 40px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "2px",
      margin: "20px",
      boxShadow: "none",
      border: "1px solid rgba(48,120,251,0.4)",
      height: "305px",
      "@media (max-width:991px)": {
          padding: "20px",
          height: "280px",
      },
      "@media (max-width:767px)": {
          padding: "20px",
          height: "auto",
      },
   },
   serviceIcon: {
      fontSize: "60px",
      lineHeight: "60px",
      marginBottom: "20px",
      display: "inline-block",
      color: "#3078fb",
   },
   ServiceContent: {
      "& h4": {
         display: "inline-block",
         fontSize: "22px",
         marginBottom: "0",
         padding: "0 0 15px",
         textTransform: "capitalize",
         fontWeight: "500",
      },
      "& p": {
         fontSize: "16px",
      },
      control: {
         padding: theme.spacing(2),
      },
   },
}));

const About = () => {
   const Style = useStyles();
   return (
      <>
         <Container >
            <div className={Style.headingArea}>
               <h3>Professional services</h3>
               <p>
                  We help agencies to define their new business objectives and
                  then create the road map
               </p>
            </div>
            <div className={Style.allService} >
               <Grid container>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-right">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaDesktop />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> Web app development</h4>
                              <p>
                                 We are creating elite, responsive and matchless
                                 websites in cost-effective and flexible
                                 approach with our excellent technology stacks,
                                 ensuring your dreams comes true.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-right">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaAndroid />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> Android app development</h4>
                              <p>
                                 We offers professional and reliable Android App
                                 Development services that serve to diverse
                                 client needs. Our model selection is based on
                                 the size of the project, urgency, client
                                 requirements and so on.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-right">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaAppStoreIos />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> iOS app development</h4>
                              <p>
                                 We build a diverse range of iPhone
                                 applications. Our iPhone App Development team
                                 innovates with applications that are creative,
                                 flexible and have high usability portion in
                                 market.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-left">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaGlobe />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> Web design</h4>
                              <p>
                                 We give you the hedge over your competitor for
                                 success by creating simple but not easy
                                 website. Aayog Infotech design your website by
                                 mingle software tool with human mind.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-left">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaDatabase />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> Database management</h4>
                              <p>
                                 We first identify the core requirements of
                                 managing dataset efficiently to reduce
                                 complexity in the management of information. we
                                 implement each and every technique and tools to
                                 create user-connected and protected database.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid md={4} sm={6} xs={12} data-aos="fade-left">
                     <div className={Style.signleService}>
                        <div className={Style.serviceIcon}>
                           <FaBookReader />
                        </div>
                        <div className={Style.ServiceInner}>
                           <div className={Style.ServiceContent}>
                              <h4> Training</h4>
                              <p>
                                 We are into website designing and web
                                 development services. we specialize in custom
                                 application development, web apps and eCommerce
                                 solutions.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </>
   );
};

export default About;
