import React from 'react';
import './App.css';
import routes from './Routes'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
  <HashRouter>
    <Header />
    <div className='App'>{routes}</div>
  </HashRouter>
  )
}

export default App;
