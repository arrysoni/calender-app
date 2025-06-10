import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('calendarEvents');
    return saved ? JSON.parse(saved) : {};
  });
  

  const addEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), event],
    }));
  };

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);
  

  // ✅ Make sure return is inside this function
  return (
    <div style={{ padding: '20px' }}>
      <h1>📅 Simple Event Calendar</h1>
      <Calendar
        onDateClick={setSelectedDate}
        eventDates={Object.keys(events)} // 🆕 this line
      />

      {selectedDate && (
        <>
          <h2>Events on {selectedDate}</h2>
          <EventForm date={selectedDate} onAdd={addEvent} />
          <EventList events={events[selectedDate] || []} />
        </>
      )}
    </div>
  );
}

export default App;

