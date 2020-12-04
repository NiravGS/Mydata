import React from "react";
import {
   makeStyles,
   Button,
   Container,
   Grid,
   TextField,
} from "@material-ui/core";
import {
   FaFacebookF,
   FaTwitter,
   FaGoogle,
   FaPinterest,
   FaInstagram,
} from "react-icons/fa";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
   footerHead: {
      "& h4": {
         color: "#151b2c",
         fontSize: "20px",
         textTransform: "capitalize",
         fontWeight: "500",
         padding: "0px 0px 0px 20px",
         "@media (max-width:1024px)": {
            padding: "7px 0px 10px 0px",
         }
      },
   },
   subFiled: {
      paddingTop: "15px",
      borderRadius: "3px",
   },
   SubscribeInput: {
      boxShadow: "0 5px 25px rgba(0, 0, 0, 0.1)",
      "& input": {
         background: "#fff",
         border: "1px solid #f5f5f5",
         color: "#777",
         fontSize: "15px",
         lineHeight: "24px",
         padding: "6px 15px",
         height: "33px",
         borderRadius: "0",
         width: "64%",
         float: "left",
         width: "100%",
      },
      "& button": {
         background: "#3078fb !important",
         border: "1px solid #3078fb !important",
         color: "#fff !important",
         fontSize: "17px !important",
         padding: "10px 5px !important",
         width: "36% !important",
         fontWeight: "400 !important",
         transition: "0.4s !important",
         borderRadius: "0 5px 5px 0 !important",
      },
      "& .MuiFormControl-root": {
         width: "100%",
      },
   },
   footerLogo: {
      marginBottom: "10px",
      "& .MuiButton-text": {
         padding: "0",
      },
   },
   footerArea: {
      background: "#fdfcfc",
      padding: "90px 0",
      "& form": {
         display: "flex",
         height: "46px",
      },
      "& .MuiOutlinedInput-root": {
         borderRadius: "0",
      },
   },
   footerList: {
      float: "left",
      padding: "0",
      width: "50%",
      "& li": {
         listStyle: "none",
         "& a": {
            color: "#151b2c",
            padding: "7px 0px 10px 20px",
            display: "block",
            position: "relative",
            "@media (max-width:767px)": {
               padding: "7px 0px 10px 0px",
            }
         },
      },
      "@media (max-width:767px)": {
         width: "100%",
         margin:"0"
      }
   },
   LastColumn: {
      "& h4": {
         padding: "0",
         marginBottom: "20px",
      },
   },
   footerContacts: {
      "& p": {
         margin: "0 0 15px",
         "& span": {
            color: "#3078fb",
            fontWeight: "500",
         },
      },
   },
   footerIcons: {
      marginTop: "30px",
      "& ul": {
         listStyle: "outside none none",
         margin: "0",
         padding: "0",
         "& li": {
            display: "inline-block",
            "& a": {
               color: "#fff",
               width: "35px",
               height: "35px",
               padding: "6px 0px",
               fontSize: "13px",
               minWidth: "inherit",
               background: "#3078fb",
               textAlign: "center",
               lineHeight: "32px",
               marginLeft: "5px",
               borderRadius: "3px",
               "&:hover": {
                  background: "#3078fb"
               }
            },
         },
      },
   },
}));

const Footer = () => {
   const Style = useStyles();
   return (
      <>
         <footer>
            <div className={Style.footerArea}>
               <Container fixed>
                  <Grid container spacing={3}>
                     <Grid item md={12} lg={5}>
                        <div className={Style.logoFooter}>
                           <div className={Style.footerHead}>
                              <div className={Style.footerLogo}>
                                 <h1>G-code</h1>
                              </div>
                              <p>
                                 G-code Infotech is an IT services firm that
                                 provides you a quality services as .Net, Php,
                                 Mobile applications, UI/UX as well as custom
                                 app development. We always believe in
                                 satisfying our customers and receive their
                                 advise. Our motto is to deliver quality work
                                 with the help of creative services that helps
                                 in growing your business.
                              </p>
                              <div className={Style.subFiled}>
                                 <div className={Style.SubscribeInput}>
                                    <form action="">
                                       <TextField
                                          id="outlined-search"
                                          label="Type Email"
                                          variant="outlined"
                                          className={Style.SubInput}
                                       />
                                       <Button
                                          variant="contained"
                                          color="primary"
                                          className={Style.Iconbutton}
                                       >
                                          Send
                                       </Button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Grid>
                     <Grid item md={12} lg={3}>
                        <div className={Style.logoFooter}>
                           <div className={Style.footerHead}>
                              <h4>Services Link</h4>
                              <ul className={Style.footerList}>
                                 <li>
                                    <a href="#">UI/UX Design</a>
                                 </li>
                                 <li>
                                    <a href="#">Web</a>
                                 </li>
                                 <li>
                                    <a href="#">Mobile</a>
                                 </li>
                                 <li>
                                    <a href="#">Angular Js</a>
                                 </li>
                                 <li>
                                    <a href="#">Node Js</a>
                                 </li>
                                 <li>
                                    <a href="#">React Js</a>
                                 </li>
                              </ul>
                              <ul className={Style.footerList}>
                                 <li>
                                    <a href="#">Online support</a>
                                 </li>
                                 <li>
                                    <a href="#">Development</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Grid>
                     <Grid item md={12} lg={4}>
                        <div className={Style.logoFooter}>
                           <div
                              className={`${Style.footerHead} ${Style.LastColumn}`}
                           >
                              <h4>Information</h4>
                              <div className={Style.footerContacts}>
                                 <p>
                                    <span>Location :</span>
                                    House- 65/4, Zonson street-3/5, London, UK
                                 </p>
                                 <p>
                                    <span>Tel :</span>
                                    <a href="tel:08905645644">+0890-564-5644</a>
                                 </p>
                                 <p>
                                    <span>Email :</span>
                                    <a href="mailto:info@randerc3.com">
                                       info@randerc3.com
                                    </a>
                                 </p>
                              </div>
                              <div className={Style.footerIcons}>
                                 <ul>
                                    <li>
                                       <Button href="#" color="primary">
                                          <FaFacebookF />
                                       </Button>
                                    </li>
                                    <li>
                                       <Button href="#" color="primary">
                                          <FaTwitter />
                                       </Button>
                                    </li>
                                    <li>
                                       <Button href="#" color="primary">
                                          <FaGoogle />
                                       </Button>
                                    </li>
                                    <li>
                                       <Button href="#" color="primary">
                                          <FaPinterest />
                                       </Button>
                                    </li>
                                    <li>
                                       <Button href="#" color="primary">
                                          <FaInstagram />
                                       </Button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               </Container>
            </div>
         </footer>
      </>
   );
};

export default Footer;
