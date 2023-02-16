import React from "react";

function SearchResults(props) {

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

  return (
    <div>
	    <div className="weather-results-container">
	        <h3>{day}</h3>
	      	<p>{props.weatherResult.current.condition.text}</p>
	        <div className="weather-result">
	            <img src={props.weatherResult.current.condition.icon}/>
	        	<p className="temperature">{props.weatherResult.current.temp_c}ºC</p>
	        </div>
	        <p className="city-name">{props.weatherResult.location.name}, {props.weatherResult.location.country}</p>
	        <div className="weather-details">
	          	<p>Humidity: {props.weatherResult.current.humidity}%</p>
	          	<p>Wind: {props.weatherResult.current.wind_kph} km/h</p>
	        </div>
	    </div>
    </div>
  );
}

export default SearchResults;