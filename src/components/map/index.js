import React, { Component } from 'react';
import { Dimensions, Alert, View, Image } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';
import { loadingIndicatorColor, loadingBackgroundColor, tintSecondaryColor } from '../../constants/styleConstants';
import { createTarget } from '../../constants/messages';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const RADIUS = 700;

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
      position: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
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
        Alert.alert(
          'Information',
          createTarget,
          [{ text: 'OK' }],
          { cancelable: false }
        );
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  onRegionChange(newRegion) {
    const positionState = { ...this.state.position };
    positionState.latitude = newRegion.latitude;
    positionState.longitude = newRegion.longitude;
    this.setState({
      positionState,
    });
  }

  render() {
    return (
      <MapView
        provider={this.props.provider}
        style={styles.map}
        initialRegion={this.state.region}
        onPress={this.onMapPress}
        onRegionChange={region => this.onRegionChange(region)}
        loadingEnabled
        loadingIndicatorColor={loadingIndicatorColor}
        loadingBackgroundColor={loadingBackgroundColor}
      >
        <View pointerEvents="none" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
          <Image pointerEvents="none" source={require('../../assets/position.png')} />
        </View>
        <MapView.Circle
          center={this.state.position}
          radius={RADIUS}
          strokeColor={tintSecondaryColor}
          zIndex={2}
          strokeWidth={1.2}
        />
      </MapView>
    );
  }
}

export default MapComponent;
