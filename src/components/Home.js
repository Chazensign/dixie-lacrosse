import React from 'react';
import styled from 'styled-components'
import sportFont from '../assets/collegiateblackflf.ttf'

const Home = () => {
  return ( 
    <AboutSection>
      <h2>OUTPLAY, OUTWORK, OUTLAST!</h2>
      <img alt='' />
      <p className='about'>

      </p>
    </AboutSection>
   );
}
 
export default Home;

const AboutSection = styled.section`
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  @font-face {
    font-family: sportFont;
    src: ${sportFont};
  }
  h2 {
    font-family: sportFont;
    font-size: 30px;
    /* font-weight: bold; */
    /* margin: 20px; */
  }
`
