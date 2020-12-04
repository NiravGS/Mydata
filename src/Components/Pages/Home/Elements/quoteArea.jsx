import React from "react";
import {
   makeStyles,
   Button,
   Container,
   Grid,
   TextField,
   Paper,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors/purple";
import { FaPlay } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
   SubHead: {
      "& h3": {
         color: "#fff",
         fontSize: "34px",
         lineHeight: "40px",
         fontWeight: "500",
         marginBottom: "20px",
      },
      "& p": {
         color: "#ddd",
         marginBottom: "15px",
      },
   },
   FormArea: {
      "& label ": {
         color: "#fff",
      },
      "& input": {
         border: "1px solid rgba(49,120,251,0.4)",
         borderRadius: "3px",
         color: "#fff",
      },
      "& .MuiFormControl-root": {
         width: "100%",
      },
      "& .MuiOutlinedInput-root": {
         marginBottom: "20px",
      },
      "& .MuiInputBase-multiline": {
         height: "158px"
      },
      "& .MuiInputLabel-shrink": {
         backgroundColor: "#062241"

      }
   },
   palette: {
      secondary: {
         main: "#e30342",
      },
   },
   InputText: {
      marginBottom: "10px",
   },
   SubmitBtn: {
      width: "100%",
   },
   paper: {
      padding: theme.spacing(2),
   },
   color: {
      color: "#3078fb"
   }
}));

const About = () => {
   const Style = useStyles();
   return (
      <>
         <Container>
            <Grid container>
               <Grid md={5} sm={4} xs={12}>
                  <div className={Style.SubHead}>
                     <h3>
                        Request a <span class={Style.color}>Call back</span>
                     </h3>
                     <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda
                        repud eum veniam optio modi sit explicabo nisi magnam
                        quibusdam.
                     </p>
                  </div>
               </Grid>
               <Grid md={7} sm={8} xs={12}>
                  <form className={Style.FormArea} noValidate>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="outlined-basic"
                              label="Name"
                              variant="outlined"
                           />
                           <TextField
                              id="outlined-basic"
                              label="Email"
                              variant="outlined"
                           />
                           <TextField
                              id="outlined-basic"
                              label="Subject"
                              variant="outlined"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="outlined-search"
                              label="message"
                              variant="outlined"
                              multiline
                              rows={25}
                              rowsMax={4}
                              className={Style.TextArea}
                           />
                           <Button
                              variant="contained"
                              color="secondary"
                              className={Style.SubmitBtn}
                           >
                              Submit
                           </Button>
                        </Grid>
                     </Grid>
                  </form>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};
export default About;
