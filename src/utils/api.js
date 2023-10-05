import axios from "axios";
const options = {
  method: "GET",
  url: "https://unogs-unogs-v1.p.rapidapi.com/static/genres",
  headers: {
    "X-RapidAPI-Key": "997d3f2a5bmsh7dadd759ef96e57p193f18jsn07e65f790fdb",
    "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
  },
};

// function to fetch movies data from rapid api
export const moviesApi = async () => {
  const { data } = await axios.get(
    `https://unogs-unogs-v1.p.rapidapi.com/static/genres`,
    options
  );
  return data;
};

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
