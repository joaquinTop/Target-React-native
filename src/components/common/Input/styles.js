import { StyleSheet } from 'react-native';

import {
  white,
  black,
  textColor,
  errorColor,
  secondaryFont
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 0
  },
  input: {
    width: 160,
    height: 30,
    backgroundColor: white,
    marginBottom: 6,
    marginTop: 2,
    paddingHorizontal: 15,
    fontSize: 12,
    fontFamily: secondaryFont,
    color: textColor,
    borderWidth: 1,
    borderColor: black
  },
  activeInput: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: black
  },
  inputError: {
    backgroundColor: white,
    borderWidth: 2,
    borderColor: errorColor,
    flexDirection: 'column',
    fontSize: 9,
    marginBottom: 2
  },
  error: {
    color: errorColor,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: secondaryFont
  }
});

export default styles;
