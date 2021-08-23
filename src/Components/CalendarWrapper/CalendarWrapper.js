import React, {useState} from 'react';
import { StyledCalendarWrapper } from './CalendarWrapperStyle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return(
        <StyledCalendarWrapper> 
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                defaultView="month"
                selectRange="true"
            />
        </StyledCalendarWrapper>
    );
}

export default CalendarWrapper;