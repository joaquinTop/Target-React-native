import { StyleSheet } from 'react-native';
import { transparent } from '../../../constants/styleConstants';

export const buttonStyle = StyleSheet.create({
  container: {
    marginVertical: 10
  }
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: transparent,
    alignItems: 'center',
    width: '90%'
  }
});

export default styles;
