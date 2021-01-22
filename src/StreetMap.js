import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function StreetMap({ lat, lon, date, api }) {
  return (
    <React.Fragment>
      {lat && lon && (
        <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //url="http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date={date}&opacity=0.9&fill_bound=true&appid={api}"
          />
          <Marker position={[lat, lon]}></Marker>
        </MapContainer>
      )}
    </React.Fragment>
  );
}
