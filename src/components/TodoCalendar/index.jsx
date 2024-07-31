import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import './TodoCalendar.css';

function TodoCalendar(props) {


    return (
        <div className='container'>
            <div className="calendarContainer">
                <Calendar
                    onChange={props.handleDateChange}
                    value={props.selectedDate}
                    minDate={new Date()}
                />
            </div>
            <div className="datePickerContainer">
                <div className="dateTimePicker">
                    <label>Fecha de inicio:</label>
                    <DatePicker
                        selected={props.startDate}
                        onChange={(date) => props.setStartDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        className="datePickerInput"
                    />
                </div>
                <div className="dateTimePicker">
                    <label>Fecha de fin:</label>
                    <DatePicker
                        selected={props.endDate}
                        onChange={(date) => props.setEndDate(date)}
                        minDate={props.startDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className="datePickerInput"
                    />
                </div>
            </div>
        </div>
    );
}

export { TodoCalendar };
