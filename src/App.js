import './App.css';
import Header from "./Component/Header"
import { createElement, useEffect, useState } from 'react';
import Card from "./Component/Card"
import uniqid from "uniqid"
import heineken from "./heineken.jpg"
import budweiser from "./budweiser.jpg"
import birraMoretti from "./birraMoretti.jpg"
import estrella from "./estrella.jpg"
import guinness from "./guinness.jpg"
import bavaria from "./bavaria.jpg"
import desperados from "./desperados.jpg"
import modelo from "./modelo.jpg"
import corona from "./corona.jpg"
import stellaArtois from "./stellaArtois.jpg"
import budlight from "./budlight.jpg"
import carlsberg from "./carlsberg.jpg"

function App() {
  const cardObj = (cardImg, cardName) => {
    let img = cardImg
    let name = cardName
    let clicked = false 
    let id = uniqid()

    return {img, name, clicked, id}
  }

  const [score, setScore] = useState(0)
  let [highScore, sethighScore] = useState(0)
  const [cards, setCards] = useState([
    cardObj(heineken, "Heineken"),
    cardObj(carlsberg, "Carlsberg"),
    cardObj(budweiser, "Budweiser"),
    cardObj(birraMoretti, "Birra Moretti"),
    cardObj(estrella, "Estrella"),
    cardObj(guinness, "Guinness"),
    cardObj(bavaria, "Bavaria"),
    cardObj(desperados, "Desperados"),
    cardObj(modelo, "Modelo"),
    cardObj(corona, "Corona"),
    cardObj(stellaArtois, "Stella Artois"),
    cardObj(budlight, "Bud Light"),
  ])
  const gameOver = () => {
    if (score > highScore) {
      sethighScore(score)
    }
    setScore(0)
    cards.forEach(element => {
      element.clicked = false
    })
  }

  const cardClicked = (e) => {
    let id = e.currentTarget.id
    console.log(e.currentTarget)
    console.log("clicked id: " + id)

    cards.forEach(element => {
      if (element.id === id) {
        if (element.clicked) {
          gameOver()
          return
        } 
        element.clicked = true
        setScore(score + 1)
      }
    })

    let usedNumbers = []
    let shuffleArr = []
    while(usedNumbers.length !== 12) {
      let random = Math.floor(Math.random() * 12)
      if (!usedNumbers.includes(random)) {
        shuffleArr.push(cards[random])
        usedNumbers.push(random)
      }
    }
    setCards(shuffleArr)
  }


  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <main>
        <ul className='cardDisplay'>
          {cards.map((element) => {
            return <Card 
            key = {element.id} 
            card={element} 
            htmlID={element.id}
            onClick={cardClicked}
            />
          })
          }
        </ul>
      </main>
      
    </div>
  );
}

export default App;
