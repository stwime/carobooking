import React, { useState } from 'react';
import moment from 'moment'

import dynamic from "next/dynamic";


const Calendar = dynamic(() => import("../components/datepickingcalendar.jsx"), {
  ssr: false,
});

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
    return (
        <div className="p-10 h-screen bg-gray-100">
          <div className="calendly-inline-widget" data-url="https://calendly.com/stwime" style={{"minWidth": "320px", "height": "100%"}}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
    )

}