import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Sponsors from './components/Sponsors'
import TeamInfo from './components/TeamInfo'
import Schedule from './components/Schedule'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/sponsors' component={Sponsors} />
    <Route path='/teaminfo' component={TeamInfo} />
    <Route path='/schedule' component={Schedule} />
  </Switch>
)
