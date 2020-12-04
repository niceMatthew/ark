import React from 'react';
import { weekdays } from './constants/dates' 

const WeekdayIndicator = () => {
    const weekdayIcons = weekdays.map((day, key) => {
      return (
        <div className="weekday-indicator-icon" key={key}>
          {day}
        </div>
      );
    });
    return <div className="weekday-indicators">{weekdayIcons}</div>;
  };
  
  export default WeekdayIndicator;