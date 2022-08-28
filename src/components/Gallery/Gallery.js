export const Gallery = ({ eventsData, onShowDetails }) => {
  return (
    <ul>
      {eventsData.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
          <button onClick={() => onShowDetails(id)} type="button">
            Show details
          </button>
        </li>
      ))}
    </ul>
  );
};

// "name": "Portland Trail Blazers vs. Phoenix Suns",
// "type": "event",
// "id": "vvG1HZ92maYSm6",
// "test": false,
// "url": "https://www.ticketmaster.com/portland-trail-blazers-vs-phoenix-suns-portland-oregon-10-21-2022/event/0F005CFB89C33B87",
// "locale": "en-us",
// "images":
