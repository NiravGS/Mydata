import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { makeStyles, Button, Container ,ButtonGroup } from "@material-ui/core";

// icons
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles({
   header: {
      background: "rgba(255, 255, 255, 0.8)",
      padding: "10px 20px",
      "@media (max-width:767px)": {
         padding: "0",
      },
      "& nav": {
         float: "right",
         alignItems: "center",
         "@media (max-width:991px)": {
            height: "100vh",
            background: "rgb(255, 255, 255)",
            color: "rgb(51, 51, 51)",
            fontSize: "1.12rem",
            overflow: "hidden scroll",
            position: "fixed",
            textAlign: "left",
            transform: "none",
            transition: "all 0.3s ease-in-out 0s",
            width: "100%",
            zIndex: "999",
            top: "0px",
            boxSizing: "border-box",
            right: "-100%",
            padding: "15px 15px 0px",
            display: "flex",
         },
         "& ul": {
            margin: "0px",
            padding: "0px",
            display: "flex",
            "@media (max-width:991px)": {
               display: "block",
               textAlign: "center",
               margin: "auto",
            },
            "& li": {
               listStyle: "none",
               "& a": {
                  height: "50px",
                  lineHeight: "50px",
                  textDecoration: "none !important",
                  color: "#444",
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "35px 18px",
                  textTransform: "capitalize",
                  cursor: "pointer",
               },
            },
         },
      },
   },
   menuContainer: {
      display: "flex",
      WebkitBoxAlign: "baseline",
      alignItems: "baseline",
      WebkitBoxPack: "justify",
      justifyContent: "space-between",
   },
   logo: {
      display: "inline-block",
      height: "auto",
      padding: "22px 0px",
      "& a": {
         "& h1": {
            margin: "0",
            "@media (max-width:768px)": {
               fontSize: "30px",
            },
         },
      },
   },
   active: {
      right: "0  !important",
      transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.82, 0.55) 0s !important",
   },

   menuToggle: {
      display: "none",
      "@media (max-width:991px)": {
         color: "rgb(0, 0, 0)",
         float: "right",
         lineHeight: "50px",
         fontSize: "24px",
         cursor: "pointer",
         display: "block",
      },
   },
   closeIcon: {
      position: "absolute",
      zIndex: "999",
      top: "5%",
      right: "5%",
      fill: "rgb(80, 187, 161)",
      display: "block",
   },
   menuIcon: { height: "24px", width: "24px", display: "block" },
   Noscroll: {
      overflow: "hidden",
   },
});

const Header = () => {
   const [active, setActive] = useState(false);
   const Style = useStyles();

   return (
      <>
         <header className={Style.header}>
            <Container fixed>
               <div className={Style.menuContainer}>
                  <div className={Style.logo}>
                     <Link to="/">
                        <h1>G-code</h1>
                     </Link>
                  </div>
                  <nav className={active ? `${Style.active}` : `${Style.nav}`}>
                     <ul>
                        <li>
                           <NavLink to="/" onClick={() => setActive(!active)}>
                              <ButtonGroup
                                 variant="text"
                                 color="#000"
                                 aria-label="text primary button group"
                              >
                                 <Button>Home</Button>
                              </ButtonGroup>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/About"
                              onClick={() => setActive(!active)}
                           >
                             <ButtonGroup
                                 variant="text"
                                 color="#000"
                                 aria-label="text primary button group"
                              >
                                 <Button>About</Button>
                              </ButtonGroup>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Services"
                              onClick={() => setActive(!active)}
                           >
                               <ButtonGroup
                                 variant="text"
                                 color="#000"
                                 aria-label="text primary button group"
                              >
                                 <Button>Services</Button>
                              </ButtonGroup>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Carrer"
                              onClick={() => setActive(!active)}
                           >
                              <ButtonGroup
                                 variant="text"
                                 color="#000"
                                 aria-label="text primary button group"
                              >
                                 <Button>Carrer</Button>
                              </ButtonGroup>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Contact"
                              onClick={() => setActive(!active)}
                           >
                              <ButtonGroup
                                 variant="text"
                                 color="#000"
                                 aria-label="text primary button group"
                              >
                                 <Button>Contact</Button>
                              </ButtonGroup>
                           </NavLink>
                        </li>
                     </ul>
                  </nav>
                  <div
                     className={Style.menuToggle}
                     onClick={() => {
                        setActive(!active);
                     }}
                  >
                     {active ? (
                        <Button
                           className={Style.closeIcon}
                           onClick={document
                              .getElementsByTagName("html")[0]
                              .setAttribute("class", `${Style.Noscroll}`)}
                        >
                           <CloseIcon />
                        </Button>
                     ) : (
                        <Button
                           className={Style.menuIcon}
                           onClick={document
                              .getElementsByTagName("html")[0]
                              .removeAttribute("class", `${Style.Noscroll}`)}
                        >
                           <MenuIcon />
                        </Button>
                     )}
                  </div>
               </div>
            </Container>
         </header>
      </>
   );
};

export default Header;
