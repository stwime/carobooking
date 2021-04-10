import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';


export default function datepickingcalendar({events}) {

const [selectedEvents, setEvents] = useState([]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      slotMinTime="06:00:00"
      slotMaxTime="19:00:00"
      height={600}
      eventClick={(info) => setEvents([...selectedEvents, info.event])} 
      editable={false}
      selectOverlap={false}
      expandRows={false}
      firstDay={1}
      businessHours={{
        // days of week. an array of zero-based day of week integers (0=Sunday)
        daysOfWeek: [1, 2, 3, 4, 5],
      }}
      allDaySlot={false}
      headerToolbar={{
        start: 'title', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: 'today prev,next', // will normally be on the right. if RTL, will be on the left
      }}
      nowIndicator={true}
      initialEvents={events}
    />
  );
}
