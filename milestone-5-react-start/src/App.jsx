import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Create custom component </h1>

    {/* Custom component  */}
    <Person></Person>
    <Person></Person>
    <FootballPlayer></FootballPlayer>
    <Student></Student>
    <Student></Student>
    <Developer name = "Rafi"  tech ="Mern"></Developer>
    <Developer name = "Kafi"  tech = "Django"></Developer>


    </>
  )
}

// Custom component 
function Person(){

  // CSS 
  const personStyle ={
    color : "yellow",
    fontSize : "25px"
  }
  return (
    <p style={personStyle}>Hi  this is person </p>
  
  )
}

// Custom component 
function FootballPlayer(){
  const playerName = "Ronaldo";
  return (
    <p>Hi iam {playerName}</p>
  )
}

// Custom component 
function Student (a){
  return (
    <div className='student'>
      <p>Student Name{a.name}</p>
      <p>Student ID</p>
    </div>
  )
}

// Custom component 
function Developer (props){
  return (
    <div className='developer'> 
      <h3>Developer :{props.name}</h3>
      <p>Technology :{props.tech}</p>
    </div>
  )
}
export default App
