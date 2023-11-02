import React from 'react';

const Event = ({ title, date, time, location, description }) => {
  return (
    <div className="event">
      <h2>{title}</h2>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

export default Event;
