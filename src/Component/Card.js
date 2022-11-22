import React, { useState } from "react";


const Card = (props) => {



    return (
        <li className="Card" key={props.id} onClick={props.onClick} id={props.htmlID}>
            <img src={props.card.img} alt={props.card.name + " Image"} />
            <div>{props.card.name}</div>
        </li>
    )
}

export default Card