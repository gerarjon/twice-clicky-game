import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar sticky-top">
        <a href="/" className="navbar-brand">Twice Clicky Game</a>
        <span className="navbar-text message">{props.message}</span>
        <span className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
)

export default Navbar;