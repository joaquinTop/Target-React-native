import React, { Component } from 'react';
import { string, array } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import ModalPicker from 'react-native-modal-picker'

import styles from './styles';

const MyPicker = ({ data, input: { onChange, ...restInput }, label, meta }) => (
      <View>
        <Text style={styles.label} >{label}</Text>
        <View  style={[styles.picker, (meta && meta.submitFailed && meta.error) && styles.inputError]}>
          <ModalPicker
            data={data}
            selectStyle={styles.modal}
            selectTextStyle={styles.input}
            initValue=""
            onChange={(option)=> onChange(option.key)} />
        </View>
        {(meta && meta.submitFailed && meta.error) &&
            <Text style={styles.error}>{meta.error}</Text>
          }
      </View>
);

MyPicker.propTypes = {
  data: array.isRequired,
  label: string.isRequired
};

export default MyPicker;
