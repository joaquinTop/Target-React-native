import { StyleSheet } from 'react-native';

import { primaryBoldFont, secondaryFont, textColor, transparent, whiteBackground } from '../../constants/styleConstants';

const styles = StyleSheet.create({
    image: {
      position: 'absolute',
      width: '100%',
      minHeight: 250,
      top: 0
    },
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: whiteBackground
    },
    welcome: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: primaryBoldFont,
      backgroundColor: transparent,
      marginBottom: 30,
      marginTop: 30,
      margin: 10
    },
    forgotLink: {
      fontSize: 10.5,
      fontFamily: secondaryFont,
      marginTop: 11,
      textAlign: 'center',
      color: textColor
    },
    connectWithFb: {
      fontSize: 12,
      fontFamily: primaryBoldFont,
      letterSpacing: 2.4,
      marginTop: 22,
      textAlign: 'center',
      color: textColor
    },
    line: {
      backgroundColor: textColor,
      width: 121,
      height: 0.5,
      marginTop: 30
    },
    signInLink: {
      color: textColor,
      fontSize: 11,
      fontFamily: secondaryFont,
      letterSpacing: 1.6,
      textAlign: 'center',
      marginTop: 15.5
    }
  });

  export default styles;
  