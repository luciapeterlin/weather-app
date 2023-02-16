import React, {useState} from "react";
import SearchResults from "./SearchResults.js";
import ErrorAlert from "./ErrorAlert.js";
import {getWeatherData} from "../services/weatherData"

function SearchBox() {

const [query, setQuery] = useState("");
const [weatherResults, setweatherResults] = useState({});
const [error, setError] = useState(false);

const handleChange = (event) =>{
  setQuery(event.target.value);
}

const handleSubmit = async (event) =>{
  event.preventDefault();
  getWeatherData(query)
  .then((data) => {
    console.log(data.data)
    setweatherResults(data.data);
    setQuery("");
    setError(false);
  })
  .catch((error) => {
    console.error("Error:", error);
    setweatherResults({});
    setQuery("");
    setError(true);
  })
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="seach-box-input" autoComplete="off" placeholder="Search city.." onChange={handleChange} value={query} />
      </form>

      {(typeof weatherResults.location != "undefined") ? (
        <SearchResults weatherResult={weatherResults}/>
      ): ("")}

      {error && <ErrorAlert/>}

    </div>
  );
}

export default SearchBox;