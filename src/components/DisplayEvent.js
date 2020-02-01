import React from 'react'
import styled from 'styled-components'

const DisplayEvent = props => {

  if (props.events.length === 0) return null

  return props.events.map((event, i) => {
    if (event.event_date === props.date) {
      return (
        <EventInfo key={i} >
          <p className='title enlarge'>{event.teams}</p>
          <p className='enlarge'>{event.location}</p>
          <p className='enlarge'>{event.time}</p>
          <p className={event.about ? 'about' : 'hidden'}>{event.about}</p>
        </EventInfo>
      )
    } else {
      return null
    }
  })
}

export default DisplayEvent

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  overflow: hidden;
  contain: content;
  .hidden {
    display: none;
  }
  p {
    margin: 2px 0;
    height: 10px;
    overflow: hidden;
  }
  .title {
    margin-top: 25px;
    font-weight: bold;
    transition: all 500ms;
  }
  .about {
    font-size: 10px;
    height: 18px;
    
  }
`
