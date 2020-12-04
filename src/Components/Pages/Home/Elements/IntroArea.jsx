import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";

// image
import WrapperImg from "../assest/Images/IntroArea/bg.jpg";

const useStyles = makeStyles({
   introArea: {
      position: "relative",
      overflow: "hidden",
      height: "100vh",
      "& .MuiGrid-container": {
         "@media(max-width:991px)": {
            display: "block",
            textAlign: "center",
         },
      },
      "@media(max-width:991px)": {
        height: "inherit",
      },
      "@media(max-width:767px)": {
        height: "inherit",
      },
      "& .MuiContainer-root":{
         textAlign: "center",
      }
   },
   bgWrapper: {
      "& img": {
         "@media(max-width: 991px) and (min-width: 768px)": {
            width: "100%",
            height: "100%",
            minHeight: "480px",
            objectFit: "cover",
         },
         "@media(max-width: 767px)": {
            maxWidth: "100%",
            height: "auto",
            minHeight: "480px",
            objectFit: "cover",
         },
      },
   },
   introContent: {
      position: "absolute",
      zIndex: "2",
      top: "50%",
      left: "0",
      width: "100%",
      height: "auto",
      marginTop: "-150px",
      "@media(max-width:346px)": {
         marginTop: "-200px",
      },
      "@media(max-width:1246px) and (min-width:992px)": {
         marginTop: "-245px",
      },
   },
   title1: {
      fontWeight: "500",
      fontSize: "18px",
      color: "#fff",
      marginBottom: "20px",
      display: "inline-block",
      "@media(max-width: 991px) and (min-width: 768px)": {
         marginBottom: "10px",
      },
      "@media(max-width: 767px)": {
         fontSize: "17px",
         marginBottom: "15px",
      },
   },
   introLayer: {
      "& h2": {
         color: "#fff",
         fontSize: "54px",
         fontWeight: "600",
         lineHeight: "64px",
         maxWidth: "700px",
         marginBottom: "20px",
         textTransform: "capitalize",
         marginTop: "0",
         margin:"auto",
         "@media(max-width: 991px) and (min-width: 768px)": {
            color: "#fff",
            fontSize: "27px",
            fontWeight: "600",
            lineHeight: "36px",
            maxWidth: "460px",
            marginBottom: "10px",
            textTransform: "capitalize",
            margin: "auto",
         },
         "@media(max-width: 767px)": {
            fontSize: "26px",
            lineHeight: "38px",
            marginBottom: "15px",
         },
      },
   },
   infoLayer: {
      "& p": {
         fontSize: "19px",
         lineHeight: "30px",
         maxWidth: "460px",
         color: "#fff",
         margin:"auto",
         "@media(max-width: 991px)": {
            margin: "auto",
         },
      },
   },
   infoBtn: {
      "& button": {
         border: "1px solid #3078fb",
         color: "#fff",
         cursor: "pointer",
         display: "inline-block",
         fontSize: "16px",
         fontWeight: "500",
         marginTop: "20px",
         padding: "10px 10px",
         textAlign: "center",
         textTransform: "capitalize",
         transition: "all 0.4s ease 0s",
         zIndex: "222",
         background: "#3078fb",
         width: "150px",
         borderRadius: "2px",
         "&:hover": {
            background: "#fff",
            color: "#000",
         },
         "&:nth-child(2)": {
            marginLeft: "15px",
            background: "#fff",
            border: "1px solid #3078fb",
            color: "#3078fb",
            "&:hover": {
               background: "#3078fb",
               color: "#fff",
            },
            "@media(max-width:346px)": {
               marginLeft: "0",
            },
         },
      },
   },
});
const TopTagline = () => {
   const Style = useStyles();
   return (
      <>
         <div className={Style.introArea} >
            <div className={Style.bgWrapper}>
               <img src={WrapperImg} alt="" />
            </div>
            <div className={Style.introContent}>
               <div className={Style.SlideContent}>
                  <Grid container>
                     <Grid item md={12}>
                        <Container fixed data-aos="fade-up">
                           <div className={Style.introLayer} >
                              <div className={Style.title1}>
                                 It Solutions . Services Company
                              </div>
                              <h2 className={Style.title2}>
                                 Transforming into
                                 <span>digital software </span>company.
                              </h2>
                           </div>
                           <div className={Style.infoLayer}>
                              <p>
                                 We develop effective plans to move your
                                 customers behaviour.
                              </p>
                           </div>
                           <div className={Style.infoBtn}>
                              <Button variant="contained" color="secondary">
                                 Our Services
                              </Button>
                              <Button variant="contained" color="secondary">
                                 Secondary
                              </Button>
                           </div>
                        </Container>
                     </Grid>
                  </Grid>
               </div>
            </div>
         </div>
      </>
   );
};
export default TopTagline;