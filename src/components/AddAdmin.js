import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

class AddAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      password2: ''
    }
  }
  handleChange = trg => {
    this.setState({ [trg.name]: trg.value })
  }
  addNewAdmin = () => {
    const { username, password, password2 } = this.state
    if (password === password2) {
      axios.post('/api/admin', { username, password })
      .then()
      .catch()
    }
    else {
      alert('Passwords need to match.')
    }
  }

  render() {
    return (
      <LoginContainer>
        <h2>Login</h2>
        <input
          placeholder='Username'
          name='username'
          onChange={e => this.handleChange(e.target)}
        />
        <input
          placeholder='Password'
          name='password'
          onChange={e => this.handleChange(e.target)}
        />
        <input
          placeholder='Password'
          name='password2'
          onChange={e => this.handleChange(e.target)}
        />
        <div className='button-cont'>
          <button>Submit</button>
          {/* <button onClick={() => this.props.showLogin()}>Cancel</button> */}
        </div>
      </LoginContainer>
    )
  }
}

export default AddAdmin

const LoginContainer = styled.div`
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
