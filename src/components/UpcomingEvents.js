import React, { Component } from 'react';
import styled from 'styled-components'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
     }
  }
  handleChange = (trg) => {
    this.setState({ [trg.name]: trg.value });
  }
  render() { 
    return ( 
      <LoginContainer>
        <h2>Login</h2>
        <input placeholder='Username' name='username' onChange={e => this.handleChange(e.target)} />
        <input placeholder='Password' name='password' onChange={e => this.handleChange(e.target)} />
        <div className='button-cont'>
        <button >Submit</button>
        <button onClick={() => this.props.showLogin()} >Cancel</button>
        </div>
      </LoginContainer>
     )
  }
}
 
export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  width: 100px;
  height: 200px;
  position: fixed;
  right: 10%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  border: 2px solid lightgray;
  `