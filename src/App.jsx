import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// roll dice project import
import Die from './component/Die'
import RollDieButton from './component/RollDieButton'
import { nanoid } from 'nanoid';

// importing confetti
import Confetti from "react-confetti";

function App() {

  const [dice, setDice] = useState (()=> generateAllNewDic());

  const gameWon = dice.every(die => die.isHeld) && 
  dice.every(die => die.value === dice[0].value);

  function generateAllNewDic(){
    return new Array(10)
      .fill(0)
      .map(()=>(
        {
          value: Math.floor(Math.random() * 6) ,
          isHeld: false,
          id: nanoid()
        }
      ))
  }

  function rollDiceButton (){

    if(!gameWon){
      setDice(oldDice =>{
        return oldDice.map(die => {
          return die.isHeld ?
            die :
            {...die, value: Math.floor(Math.random() * 6)}
        })
      })

    }else{
      setDice(generateAllNewDic())
    }
  }

  function hold (id){
    // console.log("Button id: ", id);
    setDice(oldDice =>{
      return oldDice.map(die =>{
        return die.id === id ? 
        {...die, isHeld: !die.isHeld } : die
      })
    })
  }

  const dieElement = dice.map(dieObj => {
    return <Die  
      key={dieObj.id} 
      id={dieObj.id}
      value={dieObj.value} 
      isHeld = {dieObj.isHeld}
      hold = {hold}
    />
  })


  return (
    <>
      <main className='main-style'>
        {gameWon && <Confetti />}

        <div aria-live='polite' className='sr-only'>
          {gameWon &&
          <p>Congratulation! You won! Press "New Game: to restart Game</p>
          }
        </div>
        <h1 className='title'>Tenzies</h1>

        <p className='instructions'>
          Roll until all dice are the same. Click each dice to 
          freeze it current value between rolls.
        </p>

        <div className='die_container'>
          {dieElement}
        </div>

        <RollDieButton  gameWon={gameWon} rollDiceButton={rollDiceButton}/>
      </main>
    </>
  )
}



export default App
