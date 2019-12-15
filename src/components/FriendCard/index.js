import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-responsive" onClick={() => props.handleClick(props.id)} alt={props.name} src={process.env.PUBLIC_URL + "/assets/images/" + props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
