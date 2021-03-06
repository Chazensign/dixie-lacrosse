import React from 'react'
import styled from 'styled-components'

const DisplayEvent = props => {
  const { event } = props
  return (
            <EventInfo>
              <p className='title'>{event.teams}</p>
              <p className='enlarge'>{event.location}</p>
              <p className='enlarge'>{event.time}</p>
              <p className={event.about ? 'about' : 'hidden'}>{event.about}</p>
            </EventInfo>
  )
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
    height: 20px;
    overflow: hidden;
  }
  .title {
    margin-top: 25px;
    font-weight: bold;
    transition: all 500ms;
  }
  .about {
    display: none;
    font-size: 10px;
    height: 18px;
  }
`
