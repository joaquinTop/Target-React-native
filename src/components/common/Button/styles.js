import { StyleSheet } from 'react-native';

import { primaryBoldFont } from '../../../constants/styleConstants';

const styles = (width, height, color, colorShadow, textColor, fontSize, shadowOffset) =>
  StyleSheet.create({
    container: {
      width,
      height
    },
    buttonContainer: {
      width,
      backgroundColor: color,
      padding: 10,
      height: height - shadowOffset,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    },
    buttonDisable: {
      opacity: 0.7
    },
    shadow: {
      width,
      backgroundColor: colorShadow,
      padding: 10,
      height: height - shadowOffset,
      borderRadius: 5,
      position: 'absolute',
      top: shadowOffset
    },
    title: {
      fontSize,
      color: textColor,
      fontWeight: '600',
      fontFamily: primaryBoldFont
    }
  });

export default styles;
