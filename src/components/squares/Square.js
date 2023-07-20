// to use state first import 
import { useState } from 'react'
import './styles.css'
import '../../App.css'

export default function Square({value, onSquareClick}){

    return (
        <>
          {/* <button className='square' onClick={handleClick}> {value} </button> */}
          <button className='square' onClick={onSquareClick}> {value} </button>
        </>
         
    )
}