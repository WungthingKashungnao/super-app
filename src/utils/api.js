import axios from "axios";

// function to fetch weather data from api
export const weatherApi = async () => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=75690d8b4b7f4f3591383259230410&q=India&aqi=yes`
  );
  return data;
};
