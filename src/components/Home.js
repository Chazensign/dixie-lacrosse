import React from 'react';
import styled from 'styled-components'

const Home = () => {
  return ( 
    <AboutSection>
      <h2>OUTPLAY, OUTWORK, OUTLAST!</h2>
      <img alt='' />
      <p className='about'>
        Dixie Lacrosse strives to provide our players a safe, positive, fun experience.  We will provide players the opportunity to lead, work hard for themselves and their teammates, and overcome adversity.  The ultimate goals: for our club to be an example of excellence in competition, in sportsmanship, and in leadership. we want our players to be better people for being part of Dixie Lacrosse.
      </p>
    </AboutSection>
   );
}
 
export default Home;

const AboutSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  h2 {
    font-family: 'Sport Font';
    font-size: 30px;
    margin: 0 0 20px 0;
  }
  img {
    width: 500px;
    height: 300px;
    border: 1px solid lightgrey;
    margin: 10px;
  }
  p {
    width: 400px;
    background: #3c68b9;
    color: white;
    padding: 10px;
    margin: 20px;
  }
`
