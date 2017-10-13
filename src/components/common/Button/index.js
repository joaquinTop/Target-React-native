import React from 'react';
import { string, func, number, object, bool } from 'prop-types';
import { TouchableHighlight, View, Text } from 'react-native';

import stylesProps from './styles';
import { brandColor, brandColorShadow, white } from '../../../constants/styleConstants';

const Button = ({
  title,
  onPress,
  children,
  styleProps,
  height = 37,
  width = 114,
  color = brandColor,
  colorShadow = brandColorShadow,
  textColor = white,
  fontSize = 11,
  shadowOffset = 0,
  disable = false
}) => {
  const styles = stylesProps(width, height, color, colorShadow, textColor, fontSize, shadowOffset, disable);

  return (
    <View
      style={[
        styles.container,
        styleProps && styleProps.container,
        disable && styles.buttonDisable
      ]}
    >
      <View style={[styles.shadow, disable && styles.shadowDisable]} />
      <TouchableHighlight
        underlayColor={colorShadow}
        onPress={() => !disable && onPress()}
        style={[styles.buttonContainer, styleProps && styleProps.buttonContainer]}
      >
        { title ?
          <Text style={styles.title}>{title}</Text> :
          children
        }
      </TouchableHighlight>
    </View>
  );
};

Button.propTypes = {
  onPress: func.isRequired,
  title: string,
  styleProps: object,
  height: number,
  width: number,
  children: object,
  color: string,
  colorShadow: string,
  textColor: string,
  fontSize: number,
  shadowOffset: number,
  disable: bool
};

export default Button;
