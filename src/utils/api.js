import axios from "axios";

// function to fetch movies data from tmdb api
export const moviesApi = async (genre) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${genre}`
  );
  return data;
};

// function to fetch weather data from api
export const weatherApi = async () => {
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=Bangalore&aqi=yes`
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
