import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import openWeatherAPI, {
  CurrentWeatherResponse,
  ForecastResponse,
} from "@/utils/open_weather";
import WeatherIcon from "@/components/weather_icon";
import WeatherLineItem from "@/components/weather_line_item";

const API_KEY = process.env.OPEN_WEATHER_API_KEY!;

const NIXA_MO_LATITUDE = 37.0434;
const NIXA_MO_LONGITUDE = -93.2944;
const NIXA_COORDINATES = {
  latitude: NIXA_MO_LATITUDE,
  longitude: NIXA_MO_LONGITUDE,
};

type Props = {
  currentWeather: CurrentWeatherResponse;
  forecast: ForecastResponse;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const weatherAPI = openWeatherAPI(API_KEY);

  const [currentWeather, forecast] = await Promise.all([
    weatherAPI.getCurrentWeather(NIXA_COORDINATES),
    weatherAPI.getForecast(NIXA_COORDINATES),
  ]);

  return {
    props: {
      currentWeather,
      forecast,
    },
  };
};

const Home: NextPage<Props> = ({ currentWeather, forecast }) => (
  <>
    <Head>
      <title>Open Weather API</title>
      <meta
        name="description"
        content="A simple page to view Open Weather data"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="w-screen h-screen bg-gradient-to-b from-cyan-500 to-gray-50 overflow-hidden">
      <div className="flex flex-col items-center justify-center mt-8">
        <WeatherIcon
          size="text-8xl"
          weatherCode={currentWeather.weather[0].icon}
        />
        <h1 className="text-3xl text-gray-50">
          {currentWeather.main.temp.toFixed(0)}°F
        </h1>
        <div className="w-full max-w-sm max-h-96 overflow-y-auto overflow-x-hidden border border-black rounded bg-gray-50 bg-opacity-50 mt-4 shadow-xl">
          {forecast.list.map((forecast, index) => (
            <WeatherLineItem
              key={forecast.dt}
              index={index}
              forecast={forecast}
            />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Home;
