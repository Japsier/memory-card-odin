import React, {useState} from "react";

const Header = (props) => {


    return (
        <header>
            <h2>Memory Game</h2>
            <div className="score">
                <p>Score: {props.score}</p>
                <p>Highscore: {props.highScore}</p>
            </div>
        </header>
    )
}

export default Header