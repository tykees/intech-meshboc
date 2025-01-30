import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const events = [
    { title: 'Meeting', date: '2025-02-01' },
    { title: 'Workshop', date: '2025-02-05' },
  ];

  return (
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
  );
};

export default Calendar;
