import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import MapComponent from '../../components/map';
import styles from './styles';

const HomeScreen = () => (
  <View style={styles.container}>
    <MapComponent />
  </View>
);

HomeScreen.propTypes = {
  navigator: object.isRequired
};

export default HomeScreen;
