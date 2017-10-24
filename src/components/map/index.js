import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';
import { loadingIndicatorColor, loadingBackgroundColor } from '../../constants/styleConstants';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        error: null,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const regionState = { ...this.state.region };
        regionState.latitude = position.coords.latitude;
        regionState.longitude = position.coords.longitude;
        this.setState({
          regionState,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <MapView
        provider={this.props.provider}
        style={styles.map}
        initialRegion={this.state.region}
        onPress={this.onMapPress}
        loadingEnabled
        loadingIndicatorColor={loadingIndicatorColor}
        loadingBackgroundColor={loadingBackgroundColor}
      />
    );
  }
}

export default MapComponent;
