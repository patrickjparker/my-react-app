import React from 'react';
import Event from './Event';
import './EventList.css';

const EventList = ({ events }) => {
  const [openIndex, setOpenIndex] = React.useState(-1);
  const handleClick = (index) => () => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <Event
          key={index} // Make sure to provide a unique key for each event
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
          open={index === openIndex}
          onClick={handleClick(index)}
        />
      ))}
    </div>
  );
};

export default EventList;
