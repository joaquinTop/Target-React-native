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
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 0
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 12,
    fontFamily: secondaryFont,
    color: textColor
  },
  inputError: {
    backgroundColor: white,
    borderWidth: 2,
    borderColor: errorColor,
    flexDirection: 'column',
    marginBottom: 2
  },
  error: {
    color: errorColor,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: secondaryFont
  },
  picker: {
    width: 160,
    height: 30,
    marginBottom: 6,
    marginTop: 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: black
  },
  modal: {
    borderWidth: 0,
    borderColor: white
  }
});

export default styles;