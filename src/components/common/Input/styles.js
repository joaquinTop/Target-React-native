import { StyleSheet } from 'react-native';

import {
  white,
  black,
  textColor,
  strongGrey,
  errorColor,
  secondaryFont
} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  input: {
    width: 188,
    height: 37,
    backgroundColor: white,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 14,
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