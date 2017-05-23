import React, { Component} from 'react';
class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      //this.refs.map is where the map will get rendered to.  Helps for third party libraries that don't play well with React and JSX.
      zoom: 12,
      //zoom is the map zoom level (12 is the screen width of the city)
      center: {
        lat: this.props.lat,
        lng: this.props.lon
        //these will come in as part of the CityData
      }
    });
  }

  render() {
    return <div ref="map" />;
    //this.refs.map anyplace else in the dom gives reference to that map
  }
}

export default GoogleMap;

//we're about to use a library that has no idea of how to integrate into a React application!!

//ref is a direct reference to an HTML element that's been rendered to the page

//lifecycle method that occurs only when the component mounts (renders)