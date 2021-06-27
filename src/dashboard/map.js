import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React ,{Component}from 'react';
 
export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
    }
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCen-4Z7P_P6KsT7TMW12-n3szG7TilZEA')
})(MapContainer)