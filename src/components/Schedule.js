import React, { useState, useLayoutEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';

export default ({ children }) => {
  const [date, setDate] = useState();
  const { weekDays } = getCalendar(date, 'Week');
  const [monthToDisplay, setMonth] = useState();

  useLayoutEffect(() => {
    setMonth(getCalendar(date, 'Month').currentMonth);
  }, [date]);

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
      <table>
        <thead>
          {weekDays.map((day, i) => (
            <div className='week-days' key={i}>
              {moment(day, 'MM/DD/YY').format('dddd')}
            </div>
          ))}
        </thead>
        <tbody>
          {monthToDisplay &&
            monthToDisplay.map((day, i) => {
              return (
                <td className='calendar-dates' key={i}>
                  <span
                    className={
                      moment().format('DD') === moment(day).format('DD')
                        ? 'current'
                        : ''
                    }
                  >
                    <small>{moment(day).format('DD')}</small>
                  </span>
                  {children}
                </td>
              );
            })}
        </tbody>
      </table>
    </ScheduleBox>
  );
};

const getCalendar = (date, view) => {
  let startDate = moment(date).startOf(view);
  let endDate = moment(date).endOf(view);
  let days = [];
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
  max-width: 60vw;
  padding: 30px;
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
  table {
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
  }
  thead {
    display: flex;
    vertical-align: middle;
  }
  tbody {
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
    width: 101px;
  }
  .calendar-dates {
    height: 100px;
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
`;
