import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Error from './components/Error.jsx';
import Loader from './components/Loader.jsx';
import './App.css';
import axios from "./components/axios.js"

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("auto:ip");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("")
  const [suggestion,setSuggestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(null);
      const reqData = await axios.get(`/current.json?key=b270ea01f6ee434dbfe160055221912&q=${search}`)
        .then(setError(""))
        .catch(err => setError(err.response.data.error.message));
      setData([reqData.data]);
    }
    fetchData();
  }, [search])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(query)
      const fetchSuggestionData = async () => {
        if(!query){
          setSuggestion([]);
          return;
        };
        const reqData = await axios.get(`/search.json?key=b270ea01f6ee434dbfe160055221912&q=${query}`)
        setSuggestion(reqData.data);
        console.log(suggestion);
      }
      fetchSuggestionData()
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [query])

  const handleSearch = (e) => {
    setSearch(query);
    setQuery("")
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleListClick = (name)=> {
    console.log("list,",name);
    setSearch(name)
    setQuery("")
    setSuggestion([])
  }

  if (!data) return (
    <div>
      <Header
        handleSearch={handleSearch}
        handleChange={handleChange}
        handleListClick={handleListClick}
        query={query}
        cityList={suggestion}
      />
      {
        error ? <Error errorMessage={error} /> : <Loader />
      }
    </div>
  )
  return (
    <div>
      <Header
        handleSearch={handleSearch}
        handleChange={handleChange}
        handleListClick={handleListClick}
        query={query}
        cityList={suggestion}
      />
      {
        <div className='main-container'>
          {
            <WeatherCard
              cityName={data[0].location.name}
              temp={data[0].current.temp_c}
              condition={data[0].current.condition.text}
              icon={data[0].current.condition.icon}
              region={data[0].location.region}
              country={data[0].location.country}
              timeZone={data[0].location.tz_id}
              windSpeed={data[0].current.wind_kph}
              humidity={data[0].current.humidity}
              isDay={data[0].current.is_day}
            />
          }
        </div>
      }
      <p>hello</p>
    </div>
  );
}

export default App;
