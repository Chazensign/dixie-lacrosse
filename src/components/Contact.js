import React, { Component } from 'react'
import styled from 'styled-components'
import Login from './Login'
import AddAdmin from './AddAdmin'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginHidden: false,
      showAdd: true
    }
  }

  showLogin = () => {
    this.setState({ loginHidden: !this.state.loginHidden })
  }
  showAddAdmin = () => {
    this.setState({ showAdd: !this.state.showAdd });
  }
  render() {
    return (
      <>
        <ContactBox>
          Contact
          <button onClick={() => this.showLogin()}>Admin Login</button>
        </ContactBox>
        {this.state.loginHidden && <Login showLogin={this.showLogin} />}
        {this.state.showAdd && <AddAdmin showAddAdmin={this.showAddAdmin} />}
      </>
    )
  }
}

export default Contact

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
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
    padding: 6px 0;
    width: 120px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
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
