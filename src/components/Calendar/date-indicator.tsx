import React from 'react';
import {
    getDayOfMonth,
    getMonthDayYear,
    getMonth,
    getYear
} from './utils/moment-utils';
import { getDatesInMonthDisplay } from './utils/date-utils';

const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
    const changeDate = (e) => {
        setSelectDate(e.target.getAttribute('data-date'))
    }

    const datesInMonth = getDatesInMonthDisplay(
        getMonth(selectDate) + 1,
        getYear(selectDate)
    );

    const monthDates = datesInMonth.map((i, key) => {
        const selected = 
            getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? 'selected' : '';
        const active = 
            activeDates && activeDates[getMonthDayYear(i.date)] ? 'active' : '';


        return (
            <div
                className={`date-icon ${selected} ${active}`}
                data-active-month={i.currentMonth}
                data-date={i.date.toString()}
                key={key}
                onClick={changeDate}
            >
                {getDayOfMonth(i.date)}
            </div>
        )
    })

return <div className="bae-date-indicator">{monthDates}</div>
}

export default DateIndicator;