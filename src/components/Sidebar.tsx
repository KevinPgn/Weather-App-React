import { useEffect, useState } from "react";
import { useWeather } from "../store/useWeather"

export const Sidebar = () => {
  const weather = useWeather((state) => state.weather);
  const fetchWeather = useWeather((state) => state.fetchWeather);
  const [value, setValue] = useState("")
  
  useEffect(() => {
    fetchWeather("london");
  }, [])

  console.log(weather);
  

  return (
    <>
      <section className="sidebar">
        {weather.length !== 0 && (
          <>
            <div className="weather-search">
              <input type="text" className="search" value={value} onChange={e => setValue(e.target.value)} placeholder="Search for a city" />
              <button onClick={() => fetchWeather(value)} className="search-btn">Search</button>
            </div>

            <div className="weather-img">
              <img src={weather.current.condition.icon} alt="" />
            </div>

            <div className="weatherTemp">
              <h2 className="temp"><span>{weather.current.temp_c}</span>°C</h2>
              <p className="condition">{weather.current.condition.text}</p>
            </div>
            <div className="weatherCity">
              <p className="country">{weather.location.country}</p>
            </div>

            <div className="weatherDays">
              <div className="weatherDay">{weather.current.last_updated}h</div>
              <div className="weatherDate"></div>
            </div>

            <div className="weatherLocation">
              <h2 className="city">{weather.location.name}</h2>
            </div>
          </>
        )}
      </section>
    </>
  );
        }
