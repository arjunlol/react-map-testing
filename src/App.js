import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  console.log(navigator.geolocation.getCurrentPosition())
  return {
    disableDefaultUI: true
    // zoomControlOptions: {
    //   position: maps.ControlPosition.RIGHT_CENTER,
    //   style: maps.ZoomControlStyle.SMALL
    // },
    // mapTypeControlOptions: {
    //   position: maps.ControlPosition.TOP_RIGHT
    // },
    // mapTypeControl: true
  };
}

class App extends Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={createMapOptions}>
      </GoogleMapReact>
      </div>
    );
  }
}

export default App;




