import * as React from "react";

const convertWeatherCodeToIcon = (
  weatherCode: string
): { icon: string; color: string } => {
  switch (weatherCode) {
    case "01d":
    case "01n":
      return { icon: "sunny", color: "text-yellow-300" };
    case "02d":
    case "02n":
    case "03d":
    case "03n":
      return { icon: "partly_cloudy_day", color: "text-gray-50" };
    case "04d":
    case "04n":
      return { icon: "cloudy", color: "text-gray-500" };
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return { icon: "rainy", color: "text-gray-500" };
    case "11d":
    case "11n":
      return { icon: "thunderstorm", color: "text-gray-800" };
    case "13d":
    case "13n":
      return { icon: "cloudy_snowing", color: "text-gray-50" };
    case "50d":
    case "50n":
      // TODO: Find a better icon for mist
      return { icon: "partly_cloudy_day", color: "text-gray-50" };
    default:
      return { icon: "sunny", color: "text-yellow-300" };
  }
};

const WeatherIcon = ({
  weatherCode,
  size,
}: {
  weatherCode: string;
  size: string;
}) => {
  const { icon, color } = convertWeatherCodeToIcon(weatherCode);
  return (
    <span className={`material-symbols-outlined ${size} ${color}`}>{icon}</span>
  );
};

export default WeatherIcon;
