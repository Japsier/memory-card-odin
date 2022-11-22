import './App.css';
import Header from "./Component/Header"
import { useEffect, useState } from 'react';
import Card from "./Component/Card"
import uniqid from "uniqid"

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
    cardObj("img", "heineken"),
    cardObj("img", "carlsberg"),
    cardObj("img", "budweiser"),
    cardObj("img", "Birra Morreti"),
    cardObj("img", "Estrella"),
    cardObj("img", "Guinness"),
    cardObj("img", "Bavaria"),
    cardObj("img", "Desperados"),
    cardObj("img", "name"),
    cardObj("img", "Corona"),
    cardObj("img", "name"),
    cardObj("img", "name"),
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
      
    </div>
  );
}

export default App;
