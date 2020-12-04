import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment';
import { Calendar } from './calendar';

const getDaysInMonth = (month) => {  
  return moment(month, 'MM').daysInMonth();  
}

// '01' = January...  
console.log(getDaysInMonth('01'))

const getFirstWeekdayOfMonth = (month, year) => {  
  return moment(  
    `${month}-${year}`,   
    'MM-YYYY'  
  ).startOf('month').weekday()  
}

// Note, since we use MomentJs's formatting, we do not index the month. This is getting the first weekday of the month for January 2020. Result is 0-indexed  
console.log(getFirstWeekdayOfMonth(1, 2020))

const SimpleCalendar = () => {
  return (
    <div>
        我们的日历组件
        <Calendar
          onDateSelect={date => {
            console.log(`The callback is accessing the date:${date}`)
            return date;
          }}
          activeDates={null}
        />
    </div>
  )
}

storiesOf('Calendar component', module)
  .add('Calendar', SimpleCalendar)