import React from "react";
import { Link } from "gatsby";
import * as navBarStyles from "../styles/nav-bar.module.css";

export default function NavBar() {
  return (
    <nav className={navBarStyles.nav}>
      <Link to="/">
        <img
          src="/android-chrome-192x192.png"
          alt=" logo"
          className={navBarStyles.logo}
        />
      </Link>
      <h1>Learn</h1>
      <div className={navBarStyles.links}>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
