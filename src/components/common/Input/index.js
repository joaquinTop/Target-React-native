import React, { Component } from 'react';
import { string, object, bool } from 'prop-types';
import { View, TextInput, Text, Keyboard } from 'react-native';

import styles from './styles';

class Input extends Component {
  constructor() {
    super();

    this.state = { isFocused: false };
    this.closeKeyboard = this.closeKeyboard.bind(this);
  }

  closeKeyboard() {
    Keyboard.dismiss();
  }

  render() {
    const {
      label,
      input: { onChange, ...restInput },
      password = false,
      placeholder = '',
      keyboardType = 'default',
      returnKeyType = 'done',
      meta
    } = this.props;
    const { isFocused } = this.state;
    const showError = meta && meta.submitFailed && meta.error;

    return (
      <View>
        {label && <Text style = {styles.label} >{label}</Text>}
        <View>
          <TextInput
            onChangeText={text => onChange(text.trim())}
            {...restInput}
            placeholder={placeholder}
            style={[styles.input, showError && styles.inputError, isFocused && styles.activeInput]}
            secureTextEntry={password}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSubmitEditing={this.closeKeyboard}
          />
          {showError &&
            <Text style={styles.error}>{meta.error}</Text>
          }
        </View>
      </View>
    );
  }
}

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  keyboardType: string,
  placeholder: string,
  returnKeyType: string
};

export default Input;