import React from 'react'
import {  
    getReadableMonthDate,  
    getReadableWeekday,  
    getYear,  
  } from './utils/moment-utils';

interface CalenderHeaderProps {
    selectDate: Date
}

const CalendarHeader:React.FC<CalenderHeaderProps> = (props) => {
    const { selectDate } = props;
    return (  
        <div className="calendar-header">  
          <div className="left-container">  
            <h1>{getReadableWeekday(selectDate)}</h1>  
            <h1>{getReadableMonthDate(selectDate)}</h1>  
          </div>  
          <div className="right-container">  
            <h3>{getYear(selectDate)}</h3>  
          </div>  
        </div>  
      );  
}

export default CalendarHeader;