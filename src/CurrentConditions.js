import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Card, Media } from "react-bootstrap";

const apiKey = "cbc5a73d892638935523a1076d7ce47e";
const tempData = {
  coord: {
    lon: -78.56,
    lat: 35.9452
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d"
    }
  ],
  base: "stations",
  main: {
    temp: 50.45,
    feels_like: 46.24,
    temp_min: 48.99,
    temp_max: 52,
    pressure: 1009,
    humidity: 48
  },
  visibility: 10000,
  wind: {
    speed: 1.01,
    deg: 302,
    gust: 7
  },
  clouds: {
    all: 99
  },
  dt: 1611251307,
  sys: {
    type: 3,
    id: 2035243,
    country: "US",
    sunrise: 1611231690,
    sunset: 1611268165
  },
  timezone: -18000,
  id: 4497290,
  name: "Wake Forest",
  cod: 200
};
export default function CurrentConditions({ lat, lon }) {
  const [data, setData] = useState(tempData);

  useEffect(() => {
    if (lat && lon) {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
      console.log(url);
      /*axios.get(url).then((res) => {
        setData(res.data);
      });*/
    }
  }, [lat, lon]);

  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title className="text-muted">{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {moment().format("dddd, h:mm:ss a")}
          </Card.Subtitle>
          <Card.Text className="mb-2 text-muted">
            {data.weather[0].main}
          </Card.Text>
          <Media>
            <img
              width={200}
              height={200}
              className="mr-3"
              src={weatherIcon}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{Math.floor(data.main.temp)}°F</h5>
              {Math.floor(data.main.temp_min)}°F
              {Math.floor(data.main.temp_max)}°F
            </Media.Body>
          </Media>
          <Card.Footer>
            <span>
              Feels like {data.main.feels_like}°C. {data.weather[0].description}
              . Gentle Breeze{" "}
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
