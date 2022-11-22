import React, { useState } from "react";

const Card = (props) => {



    return (
        <li className="Card" key={props.id} onClick={props.onClick} id={props.htmlID}>
            <div>{props.card.img}</div>
            <div>{props.card.name}</div>
            {console.log(props)}
        </li>
    )
}

export default Card