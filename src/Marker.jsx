import React, {Component} from 'react';

class Marker extends Component {
  render() {
    return(
      <div className="markers">
        <span lat={this.props.lat} lng={this.props.lng}>HOLY SHIT</span>
      </div>
    )
  }
}
export default Marker;
