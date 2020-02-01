import React, { useEffect } from 'react'
import styled from 'styled-components'
import MiniCalendar from './MiniCalendar'
import { connect } from 'react-redux'
import { setEvents } from '../ducks/reducer'
import axios from 'axios'

const Calendar = props => {

  const { setEvents, events } = props

  useEffect(() => {
    const getEvents = () => {
      axios.get('/api/event').then(res => {
        setEvents(res.data)
      })
    }
    getEvents()
  }, [setEvents])
  
    return (
      <CalendarContainer>
        <MiniCalendar events={events}/>
      </CalendarContainer>
    )
}
function mapStateToProps(reduxState) {
  return {
    events: reduxState.eventList
  }
}
export default connect(mapStateToProps, { setEvents })(Calendar)

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  width: 200px;
  height: 250px;
  border: 2px solid lightgray;
  margin: 10px;
  padding: 5px;
`
