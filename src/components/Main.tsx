import { useWeather } from "../store/useWeather";


export const Main = () => {
  const weather = useWeather((state) => state.weather);
  
  return (
    <>
    <section className="main">
      <div className="next-days">
        {weather.length !== 0 && (
          weather.forecast.forecastday.map((day: any, index: number) => (
            <div key={index} className="day">
              <h3>{day.date}</h3>
              <img src={day.day.condition.icon} alt="" />
              <div className="differentWay">
                <p className="temp">{day.day.avgtemp_c}°C</p>
                <p className="temp">{day.day.avgtemp_f}°F</p>
              </div>
            </div>
          ))
        )}
      </div>

      <section className="highlight">
        <h2>Today's Highlights</h2>
        
        {weather.length !== 0 && (
          <div className="highlight-cards">
            <div className="highlight-card">
              <h3>Wind Status</h3>
              <p><span>{weather.current.wind_kph}</span> km/h</p>
            </div>
            <div className="highlight-card">
              <h3>Humidity</h3>
              <p><span>{weather.current.humidity}</span>%</p>
            </div>
            <div className="highlight-card">
              <h3>Visibility</h3>
              <p><span>{weather.current.vis_km}</span> km</p>
            </div>
            <div className="highlight-card">
              <h3>Air Pressure</h3>
              <p><span>{weather.current.pressure_mb}</span> mb</p>
            </div>
          </div>
        )}
      </section>
    </section>
    </>
  );
}