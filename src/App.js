import React from 'react'
import './App.css'
import routes from './Routes'
import { HashRouter, Link } from 'react-router-dom'
import Header from './components/Header'
import UpcomingEvents from './components/UpcomingEvents'
import styled from 'styled-components'
import grass from './assets/29300208-green-grass-for-sport-background.jpg'
import Calendar from './components/Calendar'


function App(props) {

  return (
    <HashRouter>
      <Header />
      <PageLayout>
        <div className='left-section'></div>
        <div className='App'>{routes}</div>
        <aside className='right-section'>
          <a target='_blank' href='https://www.uslacrosse.org/'>
            <div className='us-lacrosse-back'>
              <img
                src='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/us-lacrosse-primary-trans.png'
                alt='US Lacrosse Link'
              />
            </div>
          </a>
          <Calendar />
          <UpcomingEvents />
        </aside>
      </PageLayout>
    </HashRouter>
  )
}

export default (App)

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
  .us-lacrosse-back {
    background: white;
    border-radius: 100%;
    margin-top: 10px;
    img {
      width: 125px;
    }
  }
`
