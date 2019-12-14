import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar sticky-top">
        <span className="navbar-brand">Twice Clicky Game</span>
        <span className="navbar-text message">{props.message}</span>
        <span className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
)

export default Navbar;