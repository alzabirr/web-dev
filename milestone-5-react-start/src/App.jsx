import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// import korbo todo ke 
import Todoo from './Todo'
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

   {/* Custom Component ( using Destructuring) */}
   <Developer1 dev ="Al Zabir" tec =" Django" sal= "200" ></Developer1>
   <Developer1 dev ="Rafi" tec =" Mern"></Developer1>

  
   {/* import  from todo  */}
    <Todoo task = "React"></Todoo>
    <Todoo task = "Django"></Todoo>
    </>
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
function Developer (props){
  return (
    <div className='developer'> 
      <h3>Developer :{props.name}</h3>
      <p>Technology :{props.tech}</p>
    </div>
  )
}

// Destructuring as like (props) 
function Developer1({dev,tec,sal = 100}){
  return(
    <div className='design' >
      <h2>Developer Name : {dev}</h2>
      <h4>Technology : {tec}</h4>
      <h4>Salary :{sal}</h4>
    </div>
  )
}





export default App



