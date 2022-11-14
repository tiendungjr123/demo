import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-light">
         <div className="container-fluid">
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarTogglerDemo03"
               aria-controls="navbarTogglerDemo03"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
               IPHONE
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/home">
                        Admin
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
