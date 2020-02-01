import React, { useState, useLayoutEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function MiniCalendar (props) {

  const { events } = props

  const getCalendar = (date, view) => {
    let startDate = moment(date).startOf(view)
    let endDate = moment(date).endOf(view)
    let days = [...Array(+startDate.format('d'))]
    let day = startDate

    while (day <= endDate) {
      days.push(moment(day).format('L'))
      day = day.clone().add(1, 'd')
    }
    switch (view) {
      case 'Month':
        return { currentMonth: days }
      case 'Week':
        return { weekDaysShort: days }
      default:
        return []
    }
  }
  const [date, setDate] = useState()
  const { weekDaysShort } = getCalendar(date, 'Week')
  const [monthToDisplay, setMonth] = useState()

  useLayoutEffect(() => {
    setMonth(getCalendar(date, 'Month').currentMonth)
  }, [date])

  useLayoutEffect(() => {

  }, [events])

  const coloredDot = passedDate => {
    const colored = props.events.find(event => event.event_date === passedDate)
    if (moment().format('LL') === moment(passedDate).format('LL') && colored) {
      return 'event-today'
    }
      if (moment().format('LL') === moment(passedDate).format('LL')) {
        return 'current'
      }
    if (!props.events) {
      return ''
    }
    if (colored) {
      return 'event-day'
    }else {
      return ''
    }
  }
  
  return (
    <Link to='/schedule'>
      <ScheduleBox>
        <header>
          <i
            onClick={() => setDate(moment(date).subtract(1, 'Month'))}
            className='fas fa-angle-left'
          />
          <h2>{moment(date).format('MMMM')}</h2>
          <i
            onClick={() => setDate(moment(date).add(1, 'Month'))}
            className='fas fa-angle-right'
          />
        </header>
        <div className='table'>
          <div className='table-head'>
            {weekDaysShort.map((day, i) => (
              <div className='week-days' key={i}>
                {moment(day, 'MM/DD/YY').format('dd')}
              </div>
            ))}
          </div>
          <div className='table-body'>
            {monthToDisplay &&
              monthToDisplay.map((day, i) => {
                if (day) {
                  return (
                      <div className='calendar-dates' key={i}>
                        <span className={coloredDot(day)}>
                          <small>{moment(day).format('DD')}</small>
                        </span>
                      </div>
                  )
                } else {
                  return <div className='calendar-dates empty' key={i}></div>
                }
              })}
          </div>
        </div>
      </ScheduleBox>
    </Link>
  )
}

export default (MiniCalendar)

const ScheduleBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 180px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;
    h2 {
      font: 300 20px/20px 'Sport Font Outline';
      margin: 0 10px;
      color: black;
    }
    i {
      color: black;
      height: max-content;
      cursor: pointer;
    }
  }
  .table-head {
    display: flex;
    vertical-align: middle;
  }
  .table-body {
    display: flex;
    flex-wrap: wrap;
  }
  .week-days {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 22px;
    background: #04309d;
    /* line-height: 12px; */
    color: white;
  }
  .week-days,
  .calendar-dates {
    width: 28px;
  }
  .calendar-dates {
    height: 30px;
    position: relative;
  }
  .calendar-dates span {
    position: absolute;
    background: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    background: white;
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: black;
  }
  span.event-today {
    background: radial-gradient(
      circle,
      rgba(4, 48, 157, 1) 5%,
      rgba(0, 180, 40, 1) 100%
    );
    color: white;
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
  span.current:hover {
    background: white;
    color: #04309d;
    border: 1px solid #04309d;
  }
`
