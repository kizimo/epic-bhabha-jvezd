import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Card, Media, Col, Row } from "react-bootstrap";

const apiKey = "cbc5a73d892638935523a1076d7ce47e";
const tempData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1611252000,
      main: {
        temp: 51.82,
        feels_like: 42.78,
        temp_min: 51.82,
        temp_max: 53.22,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 49,
        temp_kf: -0.78
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 10.04,
        deg: 229
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-21 18:00:00"
    },
    {
      dt: 1611262800,
      main: {
        temp: 52.77,
        feels_like: 45.79,
        temp_min: 52.77,
        temp_max: 53.4,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1001,
        humidity: 57,
        temp_kf: -0.35
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 7.78,
        deg: 252
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-21 21:00:00"
    },
    {
      dt: 1611273600,
      main: {
        temp: 46.8,
        feels_like: 41.92,
        temp_min: 46.54,
        temp_max: 46.8,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 78,
        temp_kf: 0.14
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 4.83,
        deg: 229
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-22 00:00:00"
    },
    {
      dt: 1611284400,
      main: {
        temp: 45.07,
        feels_like: 39.69,
        temp_min: 45.03,
        temp_max: 45.07,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 87,
        temp_kf: 0.02
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.11,
        deg: 281
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-22 03:00:00"
    },
    {
      dt: 1611295200,
      main: {
        temp: 42.15,
        feels_like: 36.86,
        temp_min: 42.15,
        temp_max: 42.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1003,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.38,
        deg: 304
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-22 06:00:00"
    },
    {
      dt: 1611306000,
      main: {
        temp: 41.32,
        feels_like: 36.52,
        temp_min: 41.32,
        temp_max: 41.32,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3,
        deg: 291
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-22 09:00:00"
    },
    {
      dt: 1611316800,
      main: {
        temp: 40.37,
        feels_like: 35.35,
        temp_min: 40.37,
        temp_max: 40.37,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1003,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.86,
        deg: 289
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-22 12:00:00"
    },
    {
      dt: 1611327600,
      main: {
        temp: 47.17,
        feels_like: 41.5,
        temp_min: 47.17,
        temp_max: 47.17,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1004,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.91,
        deg: 261
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-22 15:00:00"
    },
    {
      dt: 1611338400,
      main: {
        temp: 54.46,
        feels_like: 47.35,
        temp_min: 54.46,
        temp_max: 54.46,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1004,
        humidity: 45,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.71,
        deg: 263
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-22 18:00:00"
    },
    {
      dt: 1611349200,
      main: {
        temp: 55.78,
        feels_like: 48.38,
        temp_min: 55.78,
        temp_max: 55.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 43,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 5
      },
      wind: {
        speed: 7.23,
        deg: 294
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-22 21:00:00"
    },
    {
      dt: 1611360000,
      main: {
        temp: 45.95,
        feels_like: 38.68,
        temp_min: 45.95,
        temp_max: 45.95,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 6.69,
        deg: 340
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-23 00:00:00"
    },
    {
      dt: 1611370800,
      main: {
        temp: 41.02,
        feels_like: 31.46,
        temp_min: 41.02,
        temp_max: 41.02,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1008,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n"
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 10.27,
        deg: 336
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-23 03:00:00"
    },
    {
      dt: 1611381600,
      main: {
        temp: 36.09,
        feels_like: 25.68,
        temp_min: 36.09,
        temp_max: 36.09,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1010,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 6
      },
      wind: {
        speed: 11.45,
        deg: 335
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-23 06:00:00"
    },
    {
      dt: 1611392400,
      main: {
        temp: 32.9,
        feels_like: 23.7,
        temp_min: 32.9,
        temp_max: 32.9,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1011,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 9.15,
        deg: 339
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-23 09:00:00"
    },
    {
      dt: 1611403200,
      main: {
        temp: 31.21,
        feels_like: 22.05,
        temp_min: 31.21,
        temp_max: 31.21,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1013,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 8.72,
        deg: 335
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-23 12:00:00"
    },
    {
      dt: 1611414000,
      main: {
        temp: 37.69,
        feels_like: 27.64,
        temp_min: 37.69,
        temp_max: 37.69,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1016,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 10.38,
        deg: 330
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-23 15:00:00"
    },
    {
      dt: 1611424800,
      main: {
        temp: 44.13,
        feels_like: 34.74,
        temp_min: 44.13,
        temp_max: 44.13,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1015,
        humidity: 51,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 9.19,
        deg: 332
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-23 18:00:00"
    },
    {
      dt: 1611435600,
      main: {
        temp: 44.42,
        feels_like: 35.67,
        temp_min: 44.42,
        temp_max: 44.42,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1015,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 8.21,
        deg: 344
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-23 21:00:00"
    },
    {
      dt: 1611446400,
      main: {
        temp: 34.95,
        feels_like: 29.28,
        temp_min: 34.95,
        temp_max: 34.95,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1016,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.73,
        deg: 1
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-24 00:00:00"
    },
    {
      dt: 1611457200,
      main: {
        temp: 32.83,
        feels_like: 27.63,
        temp_min: 32.83,
        temp_max: 32.83,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1018,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 1.79,
        deg: 7
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-24 03:00:00"
    },
    {
      dt: 1611468000,
      main: {
        temp: 30.85,
        feels_like: 24.67,
        temp_min: 30.85,
        temp_max: 30.85,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1018,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 4
      },
      wind: {
        speed: 3.36,
        deg: 59
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-24 06:00:00"
    },
    {
      dt: 1611478800,
      main: {
        temp: 29.5,
        feels_like: 23.04,
        temp_min: 29.5,
        temp_max: 29.5,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1017,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.65,
        deg: 103
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-24 09:00:00"
    },
    {
      dt: 1611489600,
      main: {
        temp: 28.96,
        feels_like: 22.03,
        temp_min: 28.96,
        temp_max: 28.96,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1017,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 2
      },
      wind: {
        speed: 4.25,
        deg: 110
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-24 12:00:00"
    },
    {
      dt: 1611500400,
      main: {
        temp: 37.94,
        feels_like: 30.97,
        temp_min: 37.94,
        temp_max: 37.94,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1018,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 53
      },
      wind: {
        speed: 4.9,
        deg: 166
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-24 15:00:00"
    },
    {
      dt: 1611511200,
      main: {
        temp: 47.25,
        feels_like: 39.25,
        temp_min: 47.25,
        temp_max: 47.25,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1015,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 39
      },
      wind: {
        speed: 7.14,
        deg: 212
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-24 18:00:00"
    },
    {
      dt: 1611522000,
      main: {
        temp: 49.12,
        feels_like: 41.16,
        temp_min: 49.12,
        temp_max: 49.12,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1012,
        humidity: 48,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 7.36,
        deg: 211
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-24 21:00:00"
    },
    {
      dt: 1611532800,
      main: {
        temp: 40.1,
        feels_like: 33.17,
        temp_min: 40.1,
        temp_max: 40.1,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1012,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 29
      },
      wind: {
        speed: 5.55,
        deg: 204
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-25 00:00:00"
    },
    {
      dt: 1611543600,
      main: {
        temp: 39.36,
        feels_like: 31.86,
        temp_min: 39.36,
        temp_max: 39.36,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1012,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 6.58,
        deg: 204
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-25 03:00:00"
    },
    {
      dt: 1611554400,
      main: {
        temp: 39.47,
        feels_like: 32.79,
        temp_min: 39.47,
        temp_max: 39.47,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1010,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 60
      },
      wind: {
        speed: 5.21,
        deg: 222
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-25 06:00:00"
    },
    {
      dt: 1611565200,
      main: {
        temp: 41.61,
        feels_like: 35.91,
        temp_min: 41.61,
        temp_max: 41.61,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1009,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.29,
        deg: 247
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-25 09:00:00"
    },
    {
      dt: 1611576000,
      main: {
        temp: 41.09,
        feels_like: 36.46,
        temp_min: 41.09,
        temp_max: 41.09,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1008,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.36,
        deg: 213
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-25 12:00:00"
    },
    {
      dt: 1611586800,
      main: {
        temp: 43.18,
        feels_like: 40.08,
        temp_min: 43.18,
        temp_max: 43.18,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1008,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.19,
        deg: 182
      },
      visibility: 5945,
      pop: 0.98,
      rain: {
        "3h": 3.36
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-25 15:00:00"
    },
    {
      dt: 1611597600,
      main: {
        temp: 44.26,
        feels_like: 38.66,
        temp_min: 44.26,
        temp_max: 44.26,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1004,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 7.27,
        deg: 102
      },
      visibility: 778,
      pop: 1,
      rain: {
        "3h": 10.62
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-25 18:00:00"
    },
    {
      dt: 1611608400,
      main: {
        temp: 45.37,
        feels_like: 40.3,
        temp_min: 45.37,
        temp_max: 45.37,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1001,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.76,
        deg: 100
      },
      visibility: 240,
      pop: 1,
      rain: {
        "3h": 11.16
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-25 21:00:00"
    },
    {
      dt: 1611619200,
      main: {
        temp: 45.81,
        feels_like: 37.04,
        temp_min: 45.81,
        temp_max: 45.81,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1001,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 13.4,
        deg: 18
      },
      visibility: 2090,
      pop: 1,
      rain: {
        "3h": 12.49
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-26 00:00:00"
    },
    {
      dt: 1611630000,
      main: {
        temp: 45.86,
        feels_like: 42.26,
        temp_min: 45.86,
        temp_max: 45.86,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1000,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.34,
        deg: 50
      },
      visibility: 1455,
      pop: 1,
      rain: {
        "3h": 12.77
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-26 03:00:00"
    },
    {
      dt: 1611640800,
      main: {
        temp: 45.81,
        feels_like: 42.35,
        temp_min: 45.81,
        temp_max: 45.81,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.07,
        deg: 36
      },
      visibility: 2112,
      pop: 1,
      rain: {
        "3h": 5.25
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-26 06:00:00"
    },
    {
      dt: 1611651600,
      main: {
        temp: 46.53,
        feels_like: 42.98,
        temp_min: 46.53,
        temp_max: 46.53,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 997,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.52,
        deg: 62
      },
      visibility: 3636,
      pop: 0.97,
      rain: {
        "3h": 1.27
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-26 09:00:00"
    },
    {
      dt: 1611662400,
      main: {
        temp: 46.56,
        feels_like: 44.04,
        temp_min: 46.56,
        temp_max: 46.56,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 2.71,
        deg: 37
      },
      visibility: 10000,
      pop: 0.93,
      rain: {
        "3h": 0.48
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2021-01-26 12:00:00"
    },
    {
      dt: 1611673200,
      main: {
        temp: 52.88,
        feels_like: 50.09,
        temp_min: 52.88,
        temp_max: 52.88,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1000,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 64
      },
      wind: {
        speed: 4.81,
        deg: 295
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: "d"
      },
      dt_txt: "2021-01-26 15:00:00"
    }
  ],
  city: {
    id: 4497290,
    name: "Wake Forest",
    coord: {
      lat: 35.9452,
      lon: -78.56
    },
    country: "US",
    population: 30117,
    timezone: -18000,
    sunrise: 1611231690,
    sunset: 1611268165
  }
};

/*
  "dt": 1611252000,
  "main": {
  "temp": 51.82,
  "feels_like": 42.78,
  "temp_min": 51.82,
  "temp_max": 53.22,
  "pressure": 1009,
  "sea_level": 1009,
  "grnd_level": 1002,
  "humidity": 49,
  "temp_kf": -0.78
  },
  "weather": [
  {
  "id": 804,
  "main": "Clouds",
  "description": "overcast clouds",
  "icon": "04d"
  }
  ],
  "clouds": {
  "all": 100
  },
  "wind": {
  "speed": 10.04,
  "deg": 229
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
  "pod": "d"
  },
  "dt_txt": "2021-01-21 18:00:00"
  },
*/

export default function FiveDay({ lat, lon }) {
  const [data, setData] = useState(tempData);

  useEffect(() => {
    if (lat && lon) {
      const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
      console.log(url);
      /*axios.get(url).then((res) => {
        setData(res.data);
      });*/
    }
  }, [lat, lon]);

  const filterData = data.list.filter((d) => d.dt_txt.match(/12:00:00/));
  const formatDegs = (d) => Math.floor(d);

  const dayTemplate = (data) => {
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    return (
      <React.Fragment>
        <Card>
          <Card.Header>{moment(data.dt_txt).format("dddd")}</Card.Header>
          <Card.Body>
            <Media>
              <img
                width={100}
                height={100}
                className="mr-3"
                src={weatherIcon}
                alt="Generic placeholder"
              />
            </Media>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>{Math.floor(data.main.temp_min)}°F</Col>
              <Col>{Math.floor(data.main.temp_max)}°F</Col>
            </Row>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {filterData &&
        filterData.map((d, i) =>
          i === 0 ? (
            <Col xs={2} sm={2} md={{ span: 2, offset: 1 }}>
              {dayTemplate(d)}
            </Col>
          ) : (
            <Col xs={2} sm={2} md={2}>
              {dayTemplate(d)}
            </Col>
          )
        )}
    </React.Fragment>
  );
}
