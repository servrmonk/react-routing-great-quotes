import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";



export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            {/* instead of link component we r using NavLink which also provides specific class if it's active name is aciveClassName it it is active */}
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
              
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
