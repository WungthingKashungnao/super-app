import axios from "axios";

// function to fetch weather data from api
export const weatherApi = async () => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=Bangalore&aqi=yes`
  );
  return data;
};

// function to fetch news data from api
export const newsApi = async () => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=18c8f725272d4cb5ad25755140f11cd9`
  );
  return data;
};
