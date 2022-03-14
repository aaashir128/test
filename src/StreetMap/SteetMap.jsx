import React from "react";
import "./StreetMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const parkData = [
  {
    features: [
      {
        type: "Feature",
        properties: {
          PARK_ID: 960,
          NAME: "Bearbrook Skateboard Park",
          DESCRIPTIO: "Flat asphalt surface, 5 components",
        },
        geometry: {
          type: "Point",
          coordinates: [-75.3372987731628, 45.383321536272049],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1219,
          NAME: "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
          DESCRIPTIO:
            "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
        },
        geometry: {
          type: "Point",
          coordinates: [-75.546518086577947, 45.467134581917357],
        },
      },
    ],
  },
];

function SteetMap() {
  
  return (
    <div className="streetMap">
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default SteetMap;
