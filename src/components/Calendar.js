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
        <MiniCalendar events={events} />
        <div className='legend'>
          <span className='event-day'></span>
          <p>= Event</p>
          <span className='current'></span>
          <p>= Today</p>
        </div>
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
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  width: 215px;
  height: 250px;
  border: 2px solid lightgray;
  margin: 10px;
  padding: 5px;
  .legend {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
      span {
        margin: 2px 5px;
        border-radius: 50%;
        width: 24px;
        height: 24px;
      }
  }
  span.event-day {
    background: green;
    color: white;
  }
  span.current {
    background: #04309d;
    color: white;
    font-weight: bold;
  }
`
