import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as parksData from './skateboard-parks.json';

function Karta() {
  const [selectedPark, setSelectedPark] = useState(null)
  return (
    <GoogleMap
      defaultZoom = {12.5}
      defaultCenter = {{ lat: 40.716558, lng: -73.956094 }}
    >
      {parksData.features.map(park => (
        <Marker
          key = {park.properties.ID}
          position = {{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}



const WrappedKarta = withScriptjs(withGoogleMap(Karta));



export default function Map() {
  return (
    <div className="home-three">
      <div className="map">
        <WrappedKarta
          googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC0CGUE2HVx9QnKI_0o9_OAplwOhfrscQ4`}
          loadingElement = {<div className="map-loading" />}
          containerElement = {<div className="map-container"/>}
          mapElement = {<div className="map-element" />}
        />
      </div>
    </div>
  );
}
