function Calendar({ onDateClick, eventDates = [] }) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const getDateString = (day) => {
      const monthStr = String(month + 1).padStart(2, '0');
      const dayStr = String(day).padStart(2, '0');
      return `${year}-${monthStr}-${dayStr}`;
    };
  
    const handleClick = (day) => {
      const dateStr = getDateString(day);
      onDateClick(dateStr);
    };
  
    return (
      <div>
        <h2>{today.toLocaleString('default', { month: 'long' })} {year}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
          {[...Array(daysInMonth)].map((_, index) => {
            const day = index + 1;
            const dateStr = getDateString(day);
            const hasEvent = eventDates.includes(dateStr);
  
            return (
              <button
                key={day}
                onClick={() => handleClick(day)}
                style={{
                  padding: '10px',
                  backgroundColor: hasEvent ? '#b3e5fc' : '#eee',
                  border: '1px solid #ccc',
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  export default Calendar;
