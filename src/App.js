import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Error from './components/Error.jsx';
import './App.css';
import axios from "./components/axios.js"

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("auto:ip");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      // const reqData = await axios.get(`/current.json?key=b270ea01f6ee434dbfe160055221912&q=${search}`)
      // .then(setError(""))
      //   .catch(err => setError(err.response.data.error.message));
      // setData([reqData.data]);

      fetch(`http://api.weatherapi.com/v1/current.json?key=b270ea01f6ee434dbfe160055221912&q=${search}`)
      .then(response => response.json())
      .then(data => {
        setData([data])
      })
      .then(setError(""))
      .catch(err => {
          console.log(err);
      })
    }
    fetchData();
  }, [search])

  const handleSearch = (e) => {
    setSearch(query);
    setQuery("")
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  if (!data) return "<h1>Loading...</h1>"
  return (
    <div>
      <Header
        handleSearch={handleSearch}
        handleChange={handleChange}
        query={query}
      />
      {
        error ? <Error errorMessage={error}/> : <div className='main-container'>
          {
            <WeatherCard
              cityName={data[0].location.name}
              temp={data[0].current.temp_c}
              condition={data[0].current.condition.text}
              icon={data[0].current.condition.icon}
              region = {data[0].location.region}
              country = {data[0].location.country}
              timeZone = {data[0].location.tz_id}
              windSpeed = {data[0].current.wind_kph}
              humidity = {data[0].current.humidity}
              isDay = {data[0].current.is_day}
            />
          }
        </div>
      }

    </div>
  );
}

export default App;
