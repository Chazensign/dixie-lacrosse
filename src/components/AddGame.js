import React, {useState} from 'react'
import styled from 'styled-components'

const AddGame = (props) => {

  const [teams, updateTeams] = useState('')
  const [location, updateLocation] = useState('')
  const [time, updateTime] = useState('')

  return (
    <AddGameBack>
      <div className='add-game'>
        <h2>Add Game/Practice</h2>
        <input
          onChange={e => updateTeams(e.target.value)}
          placeholder='Team vs Team/Practice'
          type='text'
        />
        <input
          onChange={e => updateLocation(e.target.value)}
          placeholder='Location'
          type='text'
        />
        <input
          onChange={e => updateTime(e.target.value)}
          placeholder='Time'
          type='text'
        />
        <div className='button-cont'>
          <button onClick={() => props.submitEvent({ teams, location, time })}>
            Submit
          </button>
          <button onClick={() => props.updateShowGame(false)}>Cancel</button>
          <button onClick={() => props.deleteEvent()}>Delete</button>
        </div>
      </div>
    </AddGameBack>
  )
}
 
export default AddGame

const AddGameBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(000, 000, 000, 0.8);
  z-index: 8;
  .add-game {
    padding: 15px;
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
  }
  .add-game h2 {
    font-size: 32px;
    font-weight: bold;
  }
  .add-game input {
    margin: 10px;
    height: 20px;
    font-size: 16px;
    border-radius: 3px;
  }
  .button-cont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
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