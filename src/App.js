import React, { useState, useEffect } from "react";
import CurrentConditions from "./CurrentConditions";
import FiveDay from "./FiveDay";
import Hourly from "./Hourly";
import StreetMap from "./StreetMap";
import { Row, Container, Col, Modal, Button, Alert } from "react-bootstrap";
import "./styles.css";
import { testJson } from "./testJson";
import { testCurr } from "./testCurr";
import axios from "axios";

export default function App() {
  const [key, setKey] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(testJson);
  const [curdata, setCurdata] = useState(testCurr);

  const handleClose = () => setShow(false);

  const resetError = () => {
    setErr(false);
    setErrorMessage("");
  };

  const handleError = (e) => {
    if (e.response) {
      setErrorMessage(`${e.response.data.cod}: ${e.response.data.message}`);
    } else if (e.request) {
      setErrorMessage(e.request);
    } else {
      setErrorMessage(e.message);
    }
    setErr(true);
    return Promise.reject(e);
  };

  const handleAPIKey = () => {
    setShow(false);
    if (lat && lon && key) {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial&exclude=alerts,minutely`;
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

      const first = axios.get(url).catch((e) => handleError(e));
      const second = axios.get(url2).catch((e) => handleError(e));

      Promise.all([first, second]).then((v) => {
        setData(v[0].data);
        setCurdata(v[1].data);
      });
    }
  };

  const grabAPIKey = (e) => setKey(e.target.value);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });
  }, [lat, lon]);

  useEffect(() => setShow(true), []);

  return (
    <div className="App">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>I dont know where to store the key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Securing an API key is too complex ATM. Just give me your OpenWeather
          API key or use test JSON. <br />
          <input type="text" value={key} onChange={grabAPIKey} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Use Test JSON
          </Button>
          <Button variant="primary" onClick={handleAPIKey}>
            Load Data w/ Key
          </Button>
        </Modal.Footer>
      </Modal>
      {err && (
        <Alert variant="danger" onClose={() => resetError()} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
      <Container fluid>
        <Row>
          <Col sm={4} md={4} xs={4}>
            <CurrentConditions
              current={data.current}
              city={curdata && curdata.name}
              country={curdata && curdata.sys.country}
            />
          </Col>
          <Col>
            <StreetMap lat={lat} lon={lon} api={key} date={data.current.dt} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hourly hourly={data.hourly} />
          </Col>
        </Row>
        <Row>
          <FiveDay daily={data.daily} />
        </Row>
      </Container>
    </div>
  );
}
