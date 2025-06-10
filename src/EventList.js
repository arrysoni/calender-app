import React from 'react';

function EventList({ events }) {
  if (events.length === 0) {
    return <p>No events for this date.</p>;
  }

  return (
    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
      {events.map((event, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>
          📌 {event}
        </li>
      ))}
    </ul>
  );
}

export default EventList;
