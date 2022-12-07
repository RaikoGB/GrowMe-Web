import React from 'react'
import Navbar from '../../Common/Components/NavBar';
import { Calendar , dateFnsLocalizer } from 'react-big-calendar';
import { addHours , format, parse , startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const locales = {
  'en-US' : enUS,
}

const localizer = dateFnsLocalizer({

  format,
  parse,
  startOfWeek,
  getDay,
  locales,

})

const events = [{
  title : 'Hacer ejercicio',
  notes : 'Hay que comprar el pastel',
  start : new Date(),
  end : addHours( new Date() , 2)

}]


export const MyCalendar : React.FunctionComponent = () => {
  return (
    <div>
        <Navbar />
        <Calendar 
          localizer={ localizer }
          events = { events }
          startAccessor = 'start'
          endAccessor = 'end'
          style={{ height : 'calc(100vh - 70px)' }}

        />
    </div>
  )
}
