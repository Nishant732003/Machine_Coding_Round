import { useState, useEffect } from "react";

const App = () => {
  const [city, setCity] = useState("San Francisco");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debouncedCity, setDebouncedCity] = useState(city); // For debouncing

  const fetchWeatherData = async (city) => {
    const apiKey = "a5c370924195640a868e9ce73a67e6f6";
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce the city input
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedCity(city);
    }, 1000); 

    return () => {
      clearTimeout(timerId); 
    };
  }, [city]);

  
  useEffect(() => {
    if (debouncedCity) {
      fetchWeatherData(debouncedCity);
    }
  }, [debouncedCity]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData && weatherData.main ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Failed to load weather data for "{city}".</p>
      )}
    </div>
  );
};

export default App;
