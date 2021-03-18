import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'tailwindcss/tailwind.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer


export default class BookingCalendar extends React.Component {
  render() {
    return (
        <div className="bg-gray-100">
        <div className=" m-5 p-5 bg-white rounded-xl shadow-md overflow-hidden ">
        <div>
        <Calendar
            defaultView="week"
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
        />
  </div>
        </div>
        </div>

    )
  }
}