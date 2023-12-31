import React from "react";
import { Link } from "react-router-dom";
import classes from "./navBar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
