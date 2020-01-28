import React, { useState } from 'react';
import LargeCalendar from './LargeCalendar'
import AddEvent from './AddEvent'
import AddGame from './AddGame'
import AddOther from './AddOther'

const Schedule = () => {

  const [addEvent, updateAddEvent] = useState(false)
  const [showGame, updateShowGame] = useState(false)
  const [showOther, updateShowOther] = useState(false)

  return (
    <>
      {showGame && <AddGame />}
      {showOther && <AddOther />}
      {addEvent && <AddEvent updateAddEvent={updateAddEvent} />}
      <LargeCalendar updateAddEvent={updateAddEvent} />
    </>
  )
}
 
export default Schedule;
