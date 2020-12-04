import React from "react";
import {
   makeStyles,
   Button,
   Container,
   Grid,
   TextField,
   Paper,
} from "@material-ui/core";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaStar } from "react-icons/fa";

const options = {
   loop: true,
   nav: false,
   margin: 15,
   center: true,
   dots: true,
   autoplay: false,
   responsive: {
      0: {
         items: 1,
      },
      768: {
         items: 2,
      },
      1000: {
         items: 3,
      },
   },
};
const useStyles = makeStyles((theme) => ({
   singleTesti: {
      margin: "0px 0px 30px",
   },
   clientText: {
      padding: "30px 30px",
      position: "relative",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      "& p": {
         color: "#5d6471",
      },
   },
   clientRating: {
      marginBottom: "15px",
      "& svg": {
         display: "inline-block",
         color: "#fec731",
         fontSize: "20px",
         padding: "0px 5px 0px 0px",
      },
   },
   testiImg: {
      position: "relative",
      marginTop: "20px",
      display: "block",
      overflow: "hidden",
      "& h4": {
         fontWeight: "600",
         textTransform: "capitalize",
         fontSize: "20px",
         marginBottom: "0px",
      },
   },
   guestRev: {
      fontWeight: "400",
   },
   SliderContent: {
      "& .owl-dots": {
         "& button": {
            outline: "none",
         },
         "& .active": {
            "& span": {
               background: "#3078fb !important",
               width: "30px",
               borderRadius: "3px",
            },
         },
      },
   },
}));
const Slider = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <div className={Style.SliderContent}>
               <OwlCarousel className="owl-theme" {...options}>
                  <div class="item">
                     <div className={Style.singleTesti}>
                        <div className={Style.testiText}>
                           <div className={Style.clientText}>
                              <div className={Style.clientRating}>
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                              <p>
                                 When replacing a multi-lined selection of text,
                                 the generated dummy text maintains the amount
                                 of lines. When replacing a selection. help
                                 agencies.
                              </p>
                              <div className={Style.testiImg}>
                                 <div className={Style.guestDetails}>
                                    <h4>Edward</h4>
                                    <span className={Style.guestRev}>
                                       guest-rev
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="item">
                     <div className={Style.singleTesti}>
                        <div className={Style.testiText}>
                           <div className={Style.clientText}>
                              <div className={Style.clientRating}>
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                              <p>
                                 When replacing a multi-lined selection of text,
                                 the generated dummy text maintains the amount
                                 of lines. When replacing a selection. help
                                 agencies.
                              </p>
                              <div className={Style.testiImg}>
                                 <div className={Style.guestDetails}>
                                    <h4>Edward</h4>
                                    <span className={Style.guestRev}>
                                       guest-rev
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="item">
                     <div className={Style.singleTesti}>
                        <div className={Style.testiText}>
                           <div className={Style.clientText}>
                              <div className={Style.clientRating}>
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                              <p>
                                 When replacing a multi-lined selection of text,
                                 the generated dummy text maintains the amount
                                 of lines. When replacing a selection. help
                                 agencies.
                              </p>
                              <div className={Style.testiImg}>
                                 <div className={Style.guestDetails}>
                                    <h4>Edward</h4>
                                    <span className={Style.guestRev}>
                                       guest-rev
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="item">
                     <div className={Style.singleTesti}>
                        <div className={Style.testiText}>
                           <div className={Style.clientText}>
                              <div className={Style.clientRating}>
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                              <p>
                                 When replacing a multi-lined selection of text,
                                 the generated dummy text maintains the amount
                                 of lines. When replacing a selection. help
                                 agencies.
                              </p>
                              <div className={Style.testiImg}>
                                 <div className={Style.guestDetails}>
                                    <h4>Edward</h4>
                                    <span className={Style.guestRev}>
                                       guest-rev
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="item">
                     <div className={Style.singleTesti}>
                        <div className={Style.testiText}>
                           <div className={Style.clientText}>
                              <div className={Style.clientRating}>
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                                 <FaStar />
                              </div>
                              <p>
                                 When replacing a multi-lined selection of text,
                                 the generated dummy text maintains the amount
                                 of lines. When replacing a selection. help
                                 agencies.
                              </p>
                              <div className={Style.testiImg}>
                                 <div className={Style.guestDetails}>
                                    <h4>Edward</h4>
                                    <span className={Style.guestRev}>
                                       guest-rev
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </OwlCarousel>
            </div>
         </Container>
      </>
   );
};

export default Slider;
