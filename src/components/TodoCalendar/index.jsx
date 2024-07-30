import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './TodoCalendar.css'
function TodoCalendar (){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setStartDate(date);
        setEndDate(date);
      };
      return (
        <div className='container'>
          <div className="calendarContainer">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div className="datePickerContainer">
            <div className="dateTimePicker">
              <label>Fecha de inicio:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Hora"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="dateTimePicker">
              <label>Fecha de fin:</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Hora"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
          </div>
        </div>
      );
}

export {TodoCalendar}