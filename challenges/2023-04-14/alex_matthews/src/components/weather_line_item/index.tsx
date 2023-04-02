import * as React from "react";
import { getDay, getTime, toTitleCase } from "@/utils/presentation";
import { List } from "@/utils/open_weather";
import WeatherIcon from "../weather_icon";

const WeatherLineItem = ({
  forecast,
  index,
}: {
  forecast: List;
  index: number;
}) => {
  const isNewDay = new Date(forecast.dt * 1000).getHours() < 3;
  return (
    <div
      className={
        "relative w-full h-16" + (isNewDay ? " border-t border-t-black" : "")
      }
    >
      <div className="absolute left-0 top-0 bottom-0 inline-block h-full w-1/4">
        <p className="flex flex-row justify-center items-center h-full">
          {isNewDay ? getDay(forecast.dt) : getTime(forecast.dt)}
        </p>
      </div>
      <div className="absolute left-1/4 top-0 bottom-0 inline-block h-full w-3/4">
        <div
          className={
            "h-16 flex flex-row justify-between items-center w-full px-2 border-l border-black" +
            (isNewDay || index === 0 ? "" : " border-t")
          }
        >
          <div className="flex flex-row justify-center items-center gap-2">
            <WeatherIcon
              size="text-3xl"
              weatherCode={forecast.weather[0].icon}
            />
            <p className="text-xl">{forecast.main.temp.toFixed(0)}°F</p>
          </div>
          <p>{toTitleCase(forecast.weather[0].description)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherLineItem;
