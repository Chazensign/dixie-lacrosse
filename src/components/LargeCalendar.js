import React, { useState, useLayoutEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'

export default (props, { children }) => {
  const [date, setDate] = useState()
  const { weekDays } = getCalendar(date, 'Week')
  const [monthToDisplay, setMonth] = useState()
  

  useLayoutEffect(() => {
    setMonth(getCalendar(date, 'Month').currentMonth);
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
                <div onClick={() => props.updateAddEvent(true)} className='calendar-dates' key={i}>
                  <span
                    className={
                      moment().format('LL') === moment(day).format('LL')
                        ? 'current'
                        : ''
                    }
                  >
                    <small>{moment(day).format('DD')}</small>
                  </span>
                  {children}
                </div>
              )
                  }else {
                    return (
                      <div className='calendar-dates' key={i}>
                        <span
                          className='blank'>
                          <small></small>
                        </span>
                        {children}
                      </div>
                    )
                  }
            })}
        </div>
      </div>
    </ScheduleBox>
  );
};

const getCalendar = (date, view) => {
  let startDate = moment(date).startOf(view);
  let endDate = moment(date).endOf(view);
  let days = [...Array(+startDate.format('d'))]
  let day = startDate;

  while (day <= endDate) {
    days.push(day.toDate());
    day = day.clone().add(1, 'd');
  }
  switch (view) {
    case 'Month':
      return { currentMonth: days };
    case 'Week':
      return { weekDays: days };
    default:
      return [];
  }
};

const ScheduleBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 80vw;
  padding: 0 30px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
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
  .calendar-dates {
    height: 90px;
    position: relative;
  }
  .calendar-dates span {
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    right: 2px;
    top: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: darkgray;
    cursor: pointer;
  }
  .calendar-dates span:not(.current):hover {
    color: #04309d;
    font-weight: bolder;
    /* color: white; */
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