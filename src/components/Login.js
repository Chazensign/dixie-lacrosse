import React, { useState } from 'react';
import styled from 'styled-components'
import { setUser } from '../ducks/reducer'
import axios from 'axios'
import { connect } from 'react-redux'

function Login(props) {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')

  const adminLogin = () => {
    axios.post('/api/login', {username, password})
    .then(res => {
      props.setUser(res.data)
      props.showLogin()
    })
    .catch()
  }
    return (
      <LoginScreen>
        <div className='login-box'>
          <h2>Login</h2>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={e => updateUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={e => updatePassword(e.target.value)}
          />
          <div className='button-cont'>
            <button onClick={() => adminLogin()}>Submit</button>
            <button onClick={() => props.showLogin()}>Cancel</button>
          </div>
        </div>
      </LoginScreen>
    )
}
 function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, { setUser })(Login)

const LoginScreen = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: black;
z-index: 4;
.login-box {
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
  border-radius: 8px;
  border: 2px solid lightgray;
  z-index: 5;
  input {
    width: 150px;
    height: 18px;
    font-size: 14px;
  }
}
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