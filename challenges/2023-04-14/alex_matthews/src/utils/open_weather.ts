import fetch from "node-fetch";

export type CurrentWeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: OneHourRain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
export type Clouds = {
  all: number;
};
export type Coord = {
  lon: number;
  lat: number;
};
export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
export type OneHourRain = {
  "1h": number;
};
export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};
const isWeatherResponse = (response: any): response is CurrentWeatherResponse =>
  response.cod === 200 && response.weather.length > 0;

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};
export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
export type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: ThreeHourRain;
  dt_txt: string;
};
export type ThreeHourRain = {
  "3h": number;
};

const isForecastResponse = (response: any): response is ForecastResponse =>
  response.cod === "200" && response.list.length > 0;

const openWeatherAPI = (apiKey: string) => {
  const getCurrentWeather = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((response) => {
        if (isWeatherResponse(response)) {
          return response;
        }
        throw new Error("Invalid response from OpenWeather");
      });

  const getForecast = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((response) => {
        if (isForecastResponse(response)) {
          return response;
        }
        throw new Error("Invalid response from OpenWeather");
      });

  return {
    getCurrentWeather,
    getForecast,
  };
};

export default openWeatherAPI;
