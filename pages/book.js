import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'tailwindcss/tailwind.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

moment.locale('de', {
  week: {
      dow: 1,
      doy: 1,
  },
});


const localizer = momentLocalizer(moment) // or globalizeLocalizer


const dayAgenda = [
  {
    title: "Free",
    start: moment('2021-03-20T08:00:00+01:00'),
    end: moment('2021-03-20T09:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T09:00:00+01:00'),
    end: moment('2021-03-20T10:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T10:00:00+01:00'),
    end: moment('2021-03-20T11:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T11:00:00+01:00'),
    end: moment('2021-03-20T12:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T12:00:00+01:00'),
    end: moment('2021-03-20T13:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T14:00:00+01:00'),
    end: moment('2021-03-20T15:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T15:00:00+01:00'),
    end: moment('2021-03-20T16:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T16:00:00+01:00'),
    end: moment('2021-03-20T17:00:00+01:00'),
  },
  {
    title: "Free",
    start: moment('2021-03-20T17:00:00+01:00'),
    end: moment('2021-03-20T18:00:00+01:00'),
  }
]
const eventsFixture = []
for (let i = 0; i < 5; i++){
  for (let event of dayAgenda){
    const newEvent = {"title":"Free"};
    newEvent.start = event.start.add(-1, 'days').toDate();
    newEvent.end = event.end.add(-1, 'days').toDate();
    eventsFixture.push(newEvent)
  }
}
export default class BookingCalendar extends React.Component {
  render() {
    return (
        <div className="p-24 bg-gray-100">
        <div className=" m-5 p-5 bg-white rounded-xl shadow-md overflow-hidden h-2/3">
        <div>
        <Calendar
            step={30}
            min={moment('2021-03-20T08:00:00+01:00').toDate()}
            max={moment('2021-03-20T19:00:00+01:00').toDate()}
            defaultView="week"
            localizer={localizer}
            events={eventsFixture}
            startAccessor="start"
            endAccessor="end"
        />
  </div>
        </div>
        </div>

    )
  }
}