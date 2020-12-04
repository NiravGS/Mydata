import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
   global_h2: {
      fontWeight: "700",
      color: "#202020",
      fontSize: "30px",
      fontFamily: "poppins",
      margin: "0 0 35px 0",
   },
   tab_technologies: {
      padding: "80px 0",
      position: "relative",
      textAlign: "center",
   },
   root: {
      minWidth: 275,
       padding: "20px",
      border:"1px solid #000"
   },
   bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
   },
   title: {
      fontSize: 20,
      "& h2": {
         fontSize: "16px",
         fontFamily: "poppins !important",
      },
   },
   pos: {
      marginBottom: 12,
   },
   carrerBtn: {
      "& button": {
         background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
         borderRadius: 3,
         border: 0,
         color: "white",
         height: 48,
         padding: "0 30px",
         boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
   },
   CarrerJSX: {
      padding: "80px 0",
   },
});

const CarrerJSX = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <div className={Style.tab_technologies}>
               <h2 className={Style.global_h2}>
                  Do you want to have software developer career of your choice
                  promising a lot more than you expected?
               </h2>
               <p>
                  Yes! Then seek an Opportunity at G-code – the fastest growing
                  IT company in South Gujarat and Pune, Maharashtra. We’re
                  dedicated to build a team of motivated and bright full-time
                  software developer in the prominent areas of Information
                  Technology. In addition to the relevant and proven expertise
                  in the domain, you must possess effective communication skills
                  along with willingness to learn and grow parallel to the
                  company.
               </p>
               <p>
                  We believe in offering state-of-art services to our clients
                  and hence, emphasize on finding the right candidates, who
                  approach their work with complete knowledge, innovation and
                  passion.
               </p>
               <p>
                  Does it resembles with your genes? If positive, please apply
                  in-case any of the below openings is your-kind. Kindly, E-Mail
                  your CV at
                  <a
                     href="mailto:career@gcode.email"
                     target="_top"
                     class="call"
                  >
                     <b>career@gcode.com</b>
                  </a>
                  or Call on
                  <a href="tel:+91.89800 00788" class="call">
                     <b>+91.89800 00788</b>
                  </a>
               </p>
            </div>
            <div className={Style.CarrerJSX}>
               <Grid container spacing={4}>
                  <Grid lg={4} item>
                     <Card className={Style.root}>
                        <CardContent>
                           <h4
                              className={Style.title}
                              color="textSecondary"
                              gutterBottom
                           >
                              HR Executive | 2+ Year(S) Exp.
                           </h4>
                           <h2>Required skills</h2>
                           <p className={Style.pos} color="textSecondary">
                              - Excellent Communication skill is a must (Both
                              written & Verbal) -Data & Result oriented - Should
                              be familiar with HRM software - Should have good
                              negotiation skills - Should be good at preparing
                              presentations - Should be good with MS Word & Ms.
                              Excel
                           </p>
                        </CardContent>
                        <CardActions className={Style.carrerBtn}>
                           <Button size="small">Apply Now</Button>
                        </CardActions>
                     </Card>
                  </Grid>
                  <Grid lg={4} item>
                     <Card className={Style.root}>
                        <CardContent>
                           <h4
                              className={Style.title}
                              color="textSecondary"
                              gutterBottom
                           >
                              HR Executive | 2+ Year(S) Exp.
                           </h4>
                           <h2>Required skills</h2>
                           <p className={Style.pos} color="textSecondary">
                              - Excellent Communication skill is a must (Both
                              written & Verbal) -Data & Result oriented - Should
                              be familiar with HRM software - Should have good
                              negotiation skills - Should be good at preparing
                              presentations - Should be good with MS Word & Ms.
                              Excel
                           </p>
                        </CardContent>
                        <CardActions className={Style.carrerBtn}>
                           <Button size="small">Apply Now</Button>
                        </CardActions>
                     </Card>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </>
   );
};

export default CarrerJSX;
