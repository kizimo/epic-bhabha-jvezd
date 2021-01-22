import React from "react";
import moment from "moment";
import { Card, Media, Col, Row } from "react-bootstrap";

export default function FiveDay({ daily }) {
  //const [data, setData] = useState(tempData);

  const dayTemplate = (daily, bg, border) => {
    const weatherIcon = `https://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`;
    return (
      <React.Fragment>
        <Card bg={bg} border={border}>
          <Card.Body>
            <p className="h4 text-muted">
              {moment.unix(daily.dt).format("dddd")}
            </p>
            <Media>
              <img
                width={100}
                height={100}
                className="mr-3"
                src={weatherIcon}
                alt="Generic placeholder"
              />
            </Media>
            <Row>
              <Col>
                <strong className="text-muted">
                  {Math.floor(daily.temp.min)}°F
                </strong>
              </Col>
              <Col>
                <p className="text-muted">{Math.floor(daily.temp.max)}°F</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {daily.map((d, i) => {
        if (i > 4) return false;
        return i === 0 ? (
          <Col xs={2} sm={2} md={{ span: 2, offset: 1 }} key={i}>
            {dayTemplate(d, "light", "dark")}
          </Col>
        ) : (
          <Col xs={2} sm={2} md={2} key={i}>
            {dayTemplate(d, false, false)}
          </Col>
        );
      })}
    </React.Fragment>
  );
}
