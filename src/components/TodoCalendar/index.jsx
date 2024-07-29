import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '@mui/material';

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
        <div style={styles.container}>
          <div style={styles.calendarContainer}>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div style={styles.datePickerContainer}>
            <div style={styles.dateTimePicker}>
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
            <div style={styles.dateTimePicker}>
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
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      width: '300px',
      margin: '0 auto',
    },
    calendarContainer: {
      marginBottom: '20px',
    },
    datePickerContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    dateTimePicker: {
      margin: '10px 0',
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color:'black'
    },
  };
export {TodoCalendar}