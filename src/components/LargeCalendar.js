import React, { useState, useLayoutEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import DisplayEvent from './DisplayEvent'

export default (props) => {
  
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
        return { weekDays: days }
      default:
        return []
    }
  }
  const [date, setDate] = useState()
  const { weekDays } = getCalendar(date, 'Week')
  const [monthToDisplay, setMonth] = useState()

  useLayoutEffect(() => {
    setMonth(getCalendar(date, 'Month').currentMonth)
  }, [date])

  return (
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
          {weekDays.map((day, i) => (
            <div className='week-days' key={i}>
              {moment(day, 'MM/DD/YY').format('dddd')}
            </div>
          ))}
        </div>
        <div className='table-body'>
          {monthToDisplay &&
            monthToDisplay.map((day, i) => {
              if (day) {
                return (
                  <div key={i} className='relative-parent'>
                    <div
                      onClick={() => props.dateClicked(day)}
                      className='calendar-dates'>
                      <span
                        className={
                          moment().format('LL') === moment(day).format('LL')
                            ? 'current'
                            : ''
                        }>
                        <small>{moment(day).format('DD')}</small>
                      </span>
                      <DisplayEvent
                        date={moment(day).format('L')}
                        events={props.events}
                      />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className='calendar-dates empty' key={i}>
                  </div>
                )
              }
            })}
        </div>
      </div>
    </ScheduleBox>
  )
}

const ScheduleBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 80vw;
  padding: 0 30px;
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
    width: 60%;
    margin: 10px 0 20px;
  }
  i {
    height: max-content;
    cursor: pointer;
  }
  h2 {
    font: 300 42px/42px 'Sport Font Outline';
  }
  .table {
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
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
    height: 40px;
    line-height: 40px;
    color: #454545;
  }
  .week-days,
  .calendar-dates {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 100px;
  }
  .relative-parent {
    width: 100px;
    height: 90px;
    position: relative;
  }
  .calendar-dates {
    height: 90px;
    padding-top: 5px;
    position: relative;
    transition: all 300ms;
  }
  .calendar-dates span {
    position: absolute;
    background: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    right: 2px;
    top: 3px;
    background: white;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: darkgray;
    cursor: pointer;
    transition: all 500ms;
  }
  .calendar-dates span:not(.current):hover {
    color: #04309d;
    font-weight: bolder;
  }
  .calendar-dates:not(.empty):hover {
    border: 1px solid lightgrey;
    background: white;
    position: absolute;
    height: unset;
    min-height: 130px;
    width: 140px;
    transform: translate(-20px, -20px);
    z-index: 5;
    cursor: zoom-in;
    span {
      font-size: 24px;
      width: 35px;
      height: 35px;
      right: -20px;
      top: -21px;
      z-index: 6;
      border: 1px solid lightgrey;
      transition: all 500ms;
    }
    animation: grow 500ms;
    p {
      max-height: unset;
    }
    .title {
      font-size: 14px;
      margin: 4px 0 2px 0;
      transition: all 500ms;
    }
    .enlarge {
      font-size: 12px;
      margin: 2px 0;
      transition: all 500ms;
    }
    .about {
      display: initial;
      height: 50px;
      transition: all 500ms;
    }
    span:not(.current) {
      color: #04309d;
      font-weight: bolder;
    }
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
  @keyframes grow {
    from {
      height: 90px;
      width: 100px;
      transform: translate(0px, 0px);
    }
    to {
      height: 130px;
      width: 140px;
      transform: translate(-20px, -20px);
    }
  }
  @keyframes shrink {
    from {
      height: 130px;
      width: 140px;
      transform: translate(-20px, -20px);
    }
    to {
      height: 90px;
      width: 100px;
      transform: translate(0px, 0px);
    }
  }
  @keyframes font-grow {
    from {
      margin: 2px 0;
      font-size: 10px;
      span {
        transform: translate(0, 0);
      }
    }
    to {
      margin: 4px 0;
      font-size: 14px;
      span {
        z-index: 11;
        transform: translate(-31px, -30px);
      }
    }
  }
`
