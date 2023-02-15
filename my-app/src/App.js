import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useMemo } from 'react';
import { render } from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';
import places from './Icon/place.json'
import Pin from './Icon/Pin.js';
import Sidebar from './components/sidebar.js';

function App() {
  //function used to locate/ pin each stor location provided
  const [popupInfo, setPopupInfo] = useState(null);
  //creates pin for each location
  const pins = useMemo(
    () =>
      places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  return (
    //displays map of area
    <div className="App">

      <Sidebar />

      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 18.423300,
          latitude: -33.918861,
          zoom: 14
        }}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=TR9NAAwUWdjx09uW2QIr	"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}

        {popupInfo && ( //popup info on each individual location
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div style={{ fontSize: 15, fontWeight: "bold" }} >
              {popupInfo.store}
              <br></br>
            </div>

            <div>
              Longitude: {popupInfo.longitude}
              <br></br>
              Latitude: {popupInfo.latitude}
              <br></br>
              Address: {popupInfo.address}
              <br></br>
              Telephone:{popupInfo.telephone}

            </div>

          </Popup>
        )}
      </Map>


    </div>

  );
}

export default App;
