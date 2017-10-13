import { StyleSheet } from 'react-native';

import {
  textColor,
  coolGrey,
  secondaryFont
} from '../../constants/styleConstants';

const styles = StyleSheet.create({
  image: {
    marginBottom: 40
  },
  container: {
    marginBottom: 20,
    position: 'relative',
    zIndex: 2
  },
  optionsContainer: {
    position: 'absolute',
    top: 71,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  option: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: coolGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 15
  },
  text: {
    color: textColor,
    fontFamily: secondaryFont,
    letterSpacing: 0.2,
    textAlign: 'center',
    width: '100%'
  }
});

export default styles;
