import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const events = [
    // { title: 'Javascript', date: '2025-02-01', color: '#7c58fd' },
    // { title: 'Node Js', date: '2025-02-05', color: '#7c58fd' },
  ];

  return (
    <div className='text-black'>       
       <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default Calendar;
