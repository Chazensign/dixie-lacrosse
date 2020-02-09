import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import moment from 'moment'

const UpcomingEvents = props => {
  const { events } = props
  const now = moment().format('L')

  if (events.length === 0) return null
  
  return (
    <UpcomingContainer>
      {events.map((event, i) => {
        if (
          moment(now).isSameOrBefore(event.event_date)) {
          return (
            <div className='one-event' key={i}>
              <p className='title'>{event.teams}</p>
              <p className='date'>{event.event_date}</p>
              <p className='enlarge'>{event.location}</p>
              <p className='enlarge'>{event.time}</p>
            </div>
          )
        }else {
          return null
        }
      })}
    </UpcomingContainer>
  )
}
function mapStateToProps(reduxState) {
  return {
    events: reduxState.eventList
  }
}
export default connect(mapStateToProps)(UpcomingEvents)

const UpcomingContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 215px;
  height: 250px;
  border: 2px solid lightgray;
  margin: 10px;
  overflow: scroll;
  .one-event {
    margin: 5px;
    width: 180px;
    min-height: 80px;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #a0a0a0;
  }
  .title {
    display: flex;
    color: #04309d;
    font-size: 18px;
    font-weight: bold;
    align-self: center;
    justify-self: flex-start;
  }
  p {
    padding-top: 3px;
    font-size: 14px;
  }
  @media (max-width: 800px) {
  }
`
