import React, {Component} from 'react';
import Marker from './Marker.jsx';

class MarkerList extends Component {
  render() {
    return (
      <div>
        {this.props.markers.map(this._buildMarkers)}
      </div>
    );
  }

  //loops through all messages
  _buildMarkers = (marker) => {
      return (<Marker center={marker.center}/>)
  }


}
export default MarkerList;
