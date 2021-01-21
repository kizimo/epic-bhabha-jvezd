import React, { useState, useEffect } from "react";
import CurrentConditions from "./CurrentConditions";
import FiveDay from "./FiveDay";
import { Row, Container, Col } from "react-bootstrap";
import "./styles.css";

export default function App() {
  const [hello, setHello] = useState("Hello ");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });
  }, [lat, lon]);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <CurrentConditions lat={lat} lon={lon} />
          </Col>
        </Row>
        <Row>
          <FiveDay lat={lat} lon={lon} />
        </Row>
      </Container>
    </div>
  );
}
