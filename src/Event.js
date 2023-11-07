import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef } from 'react';

const Event = ({ title, date, time, location, description, open, onClick }) => {
  const descriptionNodeRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`event${isHovered || open ? ' event_hover' : ''}`} onClick={() => onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
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
      <CSSTransition in={open} timeout={300} classNames="description" unmountOnExit nodeRef={descriptionNodeRef}>
        <p ref={descriptionNodeRef}>
          <strong>Description:</strong> {description}
        </p>
      </CSSTransition>
      <i class={`fa-solid fa-chevron-down${open ? ' flip' : ''}`}></i>
    </div>
  );
};

export default Event;
