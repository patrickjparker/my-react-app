import React from 'react';
import Event from './Event';
import './EventList.css';

const EventList = ({ events }) => {
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
        />
      ))}
    </div>
  );
};

export default EventList;
