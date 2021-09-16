/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>welcome</h2>
    </div>
  );
}

export default App;
*/

import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput]= useState("");
  useEffect(() => {
axios
.get(
  "http://api.weatherapi.com/v1/current.json?key=1dee703f93684b6797c52539210809&q=London&aqi=no")
.then((data) => {
  setWeather(data.data);
  console.log(data.data);
})
.catch ((err) => console.log(err));
  }, []);
  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios
    .get(
      ''
    )
    .then ((data) => {
      setWeather(data.data);
    });
    };
    return(
      <div>
        {weather && (
          <div>
            <div className="search">
              <input onChange={weatherInput} type="text"/>
              <button onClick={searchWeather}>Search</button>
            </div>
            <div className="weather-info">
              <h1>{weather.location.name}</h1>
              <h2>{weather.location.region}</h2>
              <div className ="condition">
                <h3>{weather.current.condition.text}</h3>
                <img src={weather.current.condition.icon} alt=" "/>
                <h3>{weather.current.temp_c}Celsius</h3>
                </div>
            </div>
            </div>
        )}
      </div>
    );
  }
  
export default App;