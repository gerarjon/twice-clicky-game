import React from "react";
import "./style.css";

const Container = props => <main><div className={props.shake===true ? "shake" : "container"}>{props.children}</div></main>

export default Container;