import React from 'react'
import styled from 'styled-components'

const AddEvent = props => {

  const gameSelected = () => {
    props.updateShowGame(true)
    props.updateAddEvent(false)
  }

  const otherSelected = () => {
    props.updateShowOther(true)
    props.updateAddEvent(false)
  }

  return (
    <TypeBox>
      <div className='type-container'>
        <h2>What type of event?</h2>
        <div className='button-cont'>
          <button onClick={() => gameSelected()}>Game</button>
          <button onClick={() => otherSelected()} >Other</button>
          <button onClick={() => props.updateAddEvent(false)}>Cancel</button>
        </div>
      </div>
    </TypeBox>
  )
}

export default AddEvent

const TypeBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(000, 000, 000, 0.8);
  z-index: 8;
  .type-container {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border: 1px solid grey;
  }
  h2 {
    font-weight: bold;
    font-size: 20px;
  }
  .button-cont {
    display: flex;
  }
  button {
    box-shadow: inset 0px 1px 0px 0px #caefab;
    background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
    background-color: #77d42a;
    border-radius: 6px;
    border: 1px solid #268a16;
    display: inline-block;
    cursor: pointer;
    color: black;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 5px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
    margin: 0 5px;
  }
  button:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`
