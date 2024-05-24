import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("/api/weather");
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold mb-4">Weather Forecast</h1>
        {weather ? (
          <div>
            <p className="text-gray-700 mb-2">
              Location: {weather.location}
            </p>
            <p className="text-gray-700 mb-2">Temperature: {weather.temp}°C</p>
            <p className="text-gray-700 mb-2">Description: {weather.desc}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;