import React from 'react';
import './App.css';
import routes from './Routes'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import UpcomingEvents from './components/UpcomingEvents'
import styled from 'styled-components'
import grass from './assets/29300208-green-grass-for-sport-background.jpg'
import Calendar from './components/Calendar'

function App() {
  return (
    <HashRouter>
      <Header />
      <PageLayout>
        <div className='left-section'></div>
        <div className='App'>
          {routes}
        </div>
        <div className='right-section'>
          <Calendar />
        <UpcomingEvents />
        </div>
      </PageLayout>
    </HashRouter>
  )
}

export default App;

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-image: url(${grass});
  height: 100vh;
  padding-top: 195px;

  .left-section {
    width: 100%;
    height: 100%;
  }
  .right-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
