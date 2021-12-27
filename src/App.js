import React, { useState, useEffect } from 'react';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

import './App.css';
import axios from 'axios';
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
    let date = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${year}  ${month}  ${date}`;
  };
  const [temperature,setTemperature] =useState(null)
 const  getData =async()=> {
   try {const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=019427518edfd5cee2c02743f6571077");
   setTemperature(response.data.main.temp)
    console.log(response.data)
  }catch (e) {
    console.error(e)
  }  
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <DeviceThermostatIcon />
        <div>{weatherdata(new Date())}</div>
      </div>
      <h1>{temperature}</h1>
    </div>
  );
};

export default App;
