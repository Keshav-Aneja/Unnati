import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
function Map() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <div ref={mapRef} style={{ height: "400px" }}></div>;
}

export default Map;
