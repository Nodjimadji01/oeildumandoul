 import React from "react";
 import Navbar from 'react-bootstrap/Navbar';
 import "../pages/app.css";
 import { ReactDOM } from "react";
 import { LinkHTMLAttributes } from "react";
 import { Route, Link, BrowserRouter, NavLink, Router } from 'react-router-dom';
 import "../pages/home";
 import Finance from "../pages/finance";
 import Politique from "../pages/politique";
 import "../app.js";

 const Navigation = () => {
    return (
        <BrowserRouter>
             <di >
                 <nav className="nav">
                    <ul className="ul">
                        <li className="li">
                            <Link className="link" to="../pages" >A la une</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Finance</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Politique</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages/education.js" >Sport</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Science</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Technologie</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Culture</Link>
                        </li>
                         <li className="li">
                            <Link className="link" to="../pages" >Vidéos</Link>
                        </li>
                        <li className="li">
                            <Link className="link" to="../pages" >Divers</Link>
                        </li>
                    </ul>
                 </nav>



          </di>
    </BrowserRouter>

   );
 }

 export default Navigation;
