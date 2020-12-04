import React from 'react'
import { getMonth } from './utils/moment-utils'
import { getMonthSet } from './utils/date-utils';

import { monthsFull } from './constants/dates';

interface monthIndicatorProps {
    selectDate: Date;
    setSelectDate: any;
}
const MonthIndicator: React.FC<monthIndicatorProps> = (props) => {
    const { selectDate, setSelectDate } = props;
    const changeDate = (e) => {
        setSelectDate(e.target.getAttribute('data-date'));
    }

    const monthSet = getMonthSet(selectDate);

    return (
        <div className="month-indicator">
            <h4 data-date={monthSet.prev} onClick={changeDate}>
                {monthsFull[getMonth(monthSet.prev)]}
            </h4>
            <h3>
                {monthsFull[getMonth(monthSet.current)]}
            </h3>
            <h4 data-date={monthSet.next} onClick={changeDate}>
                {monthsFull[getMonth(monthSet.next)]}
            </h4>
        </div>
    )
}

export default MonthIndicator;