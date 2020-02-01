import React, { useState } from 'react';
import LargeCalendar from './LargeCalendar'
import AddEvent from './AddEvent'
import AddGame from './AddGame'
import AddOther from './AddOther'
import axios from 'axios'
import { connect } from 'react-redux'
import { setEvents } from '../ducks/reducer'

const Schedule = props => {

  const {events, setEvents} = props
  const [addEvent, updateAddEvent] = useState(false)
  const [showGame, updateShowGame] = useState(false)
  const [showOther, updateShowOther] = useState(false)
  const [eventDate, setEventDate] = useState('')

  const dateClicked = (date) => {
    updateAddEvent(true)
    setEventDate(date)
  }

  const submitEvent = (eventObj) => {
    axios
      .post('/api/event', { ...eventObj, eventDate })
      .then(res => {
        setEvents(res.data)
        alert('Event saved')
        updateShowGame(false)
        updateShowOther(false)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
      {showGame && (
        <AddGame 
        submitEvent={submitEvent} 
        updateShowGame={updateShowGame} />
      )}
      {showOther && (
        <AddOther 
        submitEvent={submitEvent} 
        updateShowOther={updateShowOther} />
      )}
      {addEvent && (
        <AddEvent
          updateShowOther={updateShowOther}
          updateShowGame={updateShowGame}
          updateAddEvent={updateAddEvent}
        />
      )}
      <LargeCalendar events={events} dateClicked={dateClicked} />
    </>
  )
}
 function mapStateToProps(reduxState) {
  return {
    events: reduxState.eventList
  }
}
export default connect(mapStateToProps, {setEvents})(Schedule)
