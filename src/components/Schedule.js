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
  const [eventId, setEventId] = useState()

  const dateClicked = (date, id) => {
    if (props.username) {
      setEventId(id)
      updateAddEvent(true)
      setEventDate(date)
    }
  }

  const submitEvent = (eventObj) => {
    axios
      .post('/api/event', { ...eventObj, eventDate })
      .then(res => {
        setEvents(res.data)
        alert('Event saved')
        updateShowGame(false)
        updateShowOther(false)
        setEventDate('')
      })
      .catch(err => console.log(err))
  }
 
  const deleteEvent = () => {
    if (eventDate) {
    axios.delete(`/api/event/${eventId}`)
    .then(res => {
      setEvents(res.data)
      setEventDate('')
      updateShowGame(false)
      updateShowOther(false)
    })
    .catch(err => console.log(err)
    )
    }
  }
  
  return (
    <>
      {showGame && (
        <AddGame
          deleteEvent={deleteEvent}
          submitEvent={submitEvent}
          updateShowGame={updateShowGame}
        />
      )}
      {showOther && (
        <AddOther
          deleteEvent={deleteEvent}
          submitEvent={submitEvent}
          updateShowOther={updateShowOther}
        />
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
    events: reduxState.eventList,
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, {setEvents})(Schedule)
