import React, { useState } from 'react';
import moment from 'moment'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

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
    newEvent.id = newEvent.start.getUTCMilliseconds();
    newEvent.end = event.end.add(-1, 'days').toDate();
    eventsFixture.push(newEvent)
  }
}
export default function BookingCalendar() {
    const [selectedEvents, setEvents] = useState([]);

    return (
        <div className="p-20 h-100 bg-gray-100">
        <div className="p-12 m-1 w-1/2 bg-white rounded-xl shadow-md h-100 overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='timeGridWeek'
          slotMinTime="06:00:00"
          slotMaxTime="19:00:00"
          height={600}
          eventClick={(info) => setEvents([...selectedEvents, info.event])}
          editable={false}
          selectOverlap={false}
          expandRows={false}
          firstDay={1}
          businessHours= {{
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [ 1, 2, 3, 4, 5 ], 

          }}
          allDaySlot={false}
          headerToolbar={
            {
              start: 'title', // will normally be on the left. if RTL, will be on the right
              center: '',
              end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
            }
          }
        nowIndicator={true}
        initialEvents={eventsFixture}
      /></div>
        <div className="w-1/2 p-12 m-1 bg-white rounded-xl shadow-md">
          <ul>{selectedEvents.map(e => (<li>{e.id} {e.title}</li>))}</ul>
        </div>
        </div>
    )

}