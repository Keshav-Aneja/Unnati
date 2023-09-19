"use client";
import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
function Map() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView(
      [12.969845739670108, 79.155602113299],
      17
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-[70%] h-[70vh] absolute bottom-5 rounded-3xl z-60"
    ></div>
  );
}

export default Map;
