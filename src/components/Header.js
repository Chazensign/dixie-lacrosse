import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import basket from '../assets/basket.jpg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <HeaderStyle>
        <Link to='/'>
          <img className='logo' src='../dixielogo.png' alt='logo' />
        </Link>
        <nav className='header-nav'>
          <Link to='/'>HOME</Link>
          <Link to='/schedule'>SCHEDULE</Link>
          <Link to='/teaminfo'>TEAM INFORMATION</Link>
          <Link>TEAM STORE</Link>
          <Link to='/sponsors'>SPONSORS</Link>
          <Link to='/contact'>CONTACT</Link>
        </nav>
      </HeaderStyle>
    )
  }
}
export default Header;



const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 195px;
  width: 100vw;
  background-image: url(${basket});
  background-size: cover;
  background-position: 50%, 50%;
  .logo {
    height: 150px;
    padding: 8px 20px;
  }
  .logo:hover {
    height: 155px;
    padding: 4px 15px;
  }
  .header-nav {
    width: 100%;
    height: 30px;
    background: #04309d;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    bottom: 0;
  }
  a:hover {
    color: lightgray;
  }
`