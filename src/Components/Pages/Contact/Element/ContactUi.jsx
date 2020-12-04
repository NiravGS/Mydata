import React from "react";
import {
   makeStyles,
   Button,
   Container,
   Grid,
   TextField,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { FaMobile, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";

const useStyles = makeStyles({
   ContactForm: {
      "& .MuiFormControl-root": {
         width: "100%",
      },
      "& button[type='submit']": {
         border: "1px solid #3078fb",
         color: "#fff",
         display: "block",
         fontSize: "18px",
         padding: "8px 24px",
         borderRadius: "2px",
         transition: "all 0.3s ease 0s",
         background: "#3078fb",
        },
   },
   mapArea: {
      width: "100%",
      "& iframe": {
         width: "525px",
         height: "420px",
         "@media(max-width:1024px)": {
            width: "400px",
            height: "auto",
         },
         "@media(max-width:959px)": {
            width: "100%",
         },
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
                  <Grid md={6} xs={12} sm={12} item>
                     <div className={Style.mapArea}>
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4599741102083!2d72.8831692154042!3d21.21360118681728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa9ac8722c1%3A0x3cd55998431f54f0!2sGlobalia%20Soft%20LLP!5e0!3m2!1sen!2sin!4v1607077359823!5m2!1sen!2sin"
                           frameBorder={0}
                           style={{ border: 0 }}
                           allowFullScreen
                           aria-hidden="false"
                           tabIndex={0}
                        />
                     </div>
                  </Grid>
                  <Grid md={6} sm={12} item>
                     <form action="" className={Style.ContactForm}>
                        <Grid container spacing={4}>
                           <Grid md={6} sm={12} xs={12 } item>
                              <TextField
                                 id="outlined-search"
                                 label="Name"
                                 type="text"
                                 variant="outlined"
                              />
                           </Grid>
                           <Grid md={6} sm={12} xs={12 } item>
                              <TextField
                                 id="outlined-search"
                                 label="Email"
                                 type="Email"
                                 variant="outlined"
                              />
                           </Grid>
                           <Grid md={12} sm={12} xs={12 } item>
                              <TextField
                                 id="outlined-search"
                                 label="Subject"
                                 type="text"
                                 variant="outlined"
                              />
                           </Grid>
                           <Grid md={12} sm={12} xs={12} item>
                              <TextField
                                 id="outlined-search"
                                 label="message"
                                 variant="outlined"
                                 multiline
                                 rows={25}
                                 rowsMax={7}
                                 className={Style.TextArea}
                              />
                           </Grid>
                           <Grid md={12} item>
                              <Button type="submit">Submit</Button>
                           </Grid>
                        </Grid>
                     </form>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </>
   );
};

export default CarrerJSX;
