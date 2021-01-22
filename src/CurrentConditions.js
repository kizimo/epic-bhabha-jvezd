import React from "react";
import moment from "moment";
import { Card, Media } from "react-bootstrap";

export default function CurrentConditions({ current, city, country }) {
  const weatherIcon = `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;

  return (
    <React.Fragment>
      <Card bg="light">
        <Card.Body>
          <Card.Title className="h1 text-muted">
            <strong>
              {city}, {country}
            </strong>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {moment.unix(current.dt).format("dddd, h:mm a")}
          </Card.Subtitle>
          <Card.Text className="mb-2 text-muted">
            {current.weather[0].main}
          </Card.Text>
          <Media>
            <img
              width={100}
              height={100}
              className="align-self-start mr-3 rounded float-left"
              src={weatherIcon}
              alt="Generic placeholder"
            />
            <Media.Body>
              <span className="display-2">
                {Math.floor(current.temp)}
                <sup className="h1">°F</sup>
              </span>
            </Media.Body>
          </Media>

          <p>
            Feels like <strong>{Math.floor(current.feels_like)}°F.</strong>
            <br />
            {current.weather[0].description}.
          </p>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
