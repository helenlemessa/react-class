import { useState } from 'react'
 import './App.css'

function App() {
  const arr=  [ "group1" ,"group2", "group3","group4" ,"group5","group6","group7"]
  return (
    <>
      
      <ul className='group' >
          {arr.map( (lists,index) =>(<li className='maps' key= {index }>{lists}</li>))}
        </ul>
     
        
        
      
      </> 
  )
}

export default App
