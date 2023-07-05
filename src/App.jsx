import React, {useState} from 'react'
import { ImPlus,ImMinus } from 'react-icons/im'
import { ImCross } from 'react-icons/im'
import { FaDivide } from 'react-icons/fa'
import './App.css'

function App() {
 const [number1, setNumber1] = useState(0);
 const [number2, setNumber2] = useState(0);
 const [result, setResult] = useState(0);


 const handleChangeOne = (e) => {
  setNumber1(e.target.value)
 }

 const handleChangeTwo = (e) => {
  setNumber2(e.target.value)
 }

const addition = () => {
  const sum = parseFloat(number1) + parseFloat(number2) 
  setResult(sum)
}

const subtraction = () => {
  const sum = parseFloat(number1) - parseFloat(number2) 
  setResult(sum)
}

const multiplication = () => {
  const sum = parseFloat(number1) * parseFloat(number2) 
  setResult(sum)
}

const division = () => {
  const sum = parseFloat(number1) / parseFloat(number2) 
  setResult(sum)
}

const clearing = () => {
  setResult(0)
  number1(0)
  number2(0)
}

  return (
      <div className="container">
      <h1 className='title'>Pals Calculator</h1>
      <div className="calc">
       <h1 className='result'>{result}</h1>
       <div className='inputs'>
       <input type="number" onChange={handleChangeOne} />
       <input type="number" onChange={handleChangeTwo}/>
       </div>
       <div className="buttons">
      <button className='plus' onClick={addition}><ImPlus /></button>
      <button className='minus' onClick={subtraction}><ImMinus /></button>
      <button className='cross' onClick={multiplication}><ImCross /></button>
      <button className='divide' onClick={division}><FaDivide /></button>
       </div>
       <button className='clear' onClick={clearing}>Clear</button>
      </div>
      </div>
  )
}

export default App
