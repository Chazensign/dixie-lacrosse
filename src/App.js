import React from 'react';
import './App.css';
import routes from './Routes'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import UpcomingEvents from './components/UpcomingEvents'

function App() {
  return (
  <HashRouter>
    <Header />
    <div className='App'>{routes}</div>
    <UpcomingEvents />
  </HashRouter>
  )
}

export default App;
