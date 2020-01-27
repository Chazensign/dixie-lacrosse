import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

function AddAdmin(props) {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  const [password2, updatePassword2] = useState('')
  
  const addNewAdmin = () => {
    if (password === password2) {
      axios.post('/api/admin', { username, password })
      .then(res => {
        this.setState({ username: '', password: '', password2: '' })
        alert('Admin Created')
      })
      .catch(err => alert(err.request.response))
    }
    else {
      alert("Passwords don't match.")
    }
  }
    return (
      <AddAdminContainer>
        <h2>Add New Admin</h2>
        <input
          placeholder='Username'
          name='username'
          onChange={e => updateUsername(e.target.value)}
        />
        <input
          placeholder='Password'
          name='password'
          onChange={e => updatePassword(e.target.value)}
        />
        <input
          placeholder='Password'
          name='password2'
          onChange={e => updatePassword2(e.target.value)}
        />
        <div className='button-cont'>
          <button onClick={() => addNewAdmin()}>Submit</button>
          <button onClick={() => props.showAddAdmin()}>Cancel</button>
        </div>
      </AddAdminContainer>
    )
}

export default AddAdmin

const AddAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  width: 200px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid lightgray;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .button-cont {
    width: 100%;
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
    font-size: 12px;
    font-weight: bold;
    padding: 4px 0;
    width: 60px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
    margin: 0 10px;
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
