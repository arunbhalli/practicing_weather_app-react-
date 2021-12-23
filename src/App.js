/* import React, { useState, useEffect } from 'react'; */
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

import './App.css';
const App = () => {
  const weatherdata = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let newDate = new Date()
    let date = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = newDate.getFullYear();
    return `${year}  ${month}  ${date}`
    
  };

  return (
    <div>
      <div>
        <DeviceThermostatIcon />
        <div>{weatherdata(new Date())}</div>
      </div>
      StockHolme
    </div>
  );
};

export default App;
