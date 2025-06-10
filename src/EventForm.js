import React, { useState } from 'react';

function EventForm({ date, onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    onAdd(date, title);     // Pass event title to parent
    setTitle('');           // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Add event..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '5px', width: '200px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add</button>
    </form>
  );
}

export default EventForm;
