import React from "react";
import "./style.css";

const Container = props => <main><div className={props.shake===true ? "shake" : "container"} 
style = {{
    backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
}}>{props.children}</div></main>

export default Container;