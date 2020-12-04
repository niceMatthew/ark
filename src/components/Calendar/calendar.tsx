import React, { useState,useEffect, useRef, FC } from 'react'
import moment from 'moment';

import CalendarHeader from './calendar-header';
import WeekdayIndicator from './weekday-indicator';
import DateIndicator from './date-indicator';
import MonthIndicator from './month-indicator';

import { presetDateTracker } from './utils/date-utils';

interface calendarProps {
    activeDates: string | null,
    onDateSelect: Function
}
export  const Calendar: FC<calendarProps> = (props) => { 
    const {activeDates , onDateSelect } = props;
    const presetActiveDates = useRef(presetDateTracker(activeDates || []))
    const [selectDate, setSelectDate ] = useState(moment().toDate());

    useEffect(() => {
        if(onDateSelect) {
            onDateSelect(selectDate);
        }
    }, [onDateSelect, selectDate])

    return (
        <div className={`calendar-container salmon-theme`}>  
            <CalendarHeader selectDate={selectDate}/>  
            <WeekdayIndicator /> 
            <DateIndicator  
                selectDate={selectDate}  
                setSelectDate={setSelectDate}
                activeDates={presetActiveDates.current}
            /> 
            <MonthIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
        </div>  
    )
}