import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View } from 'react-native';

import Input from '../../common/Input';
import MyPicker from '../../common/MyPicker';
import Button from '../../common/Button';
import styles, { buttonStyle } from './styles';
import * as constraints from '../../../utils/constraints';
import { genderOptions } from '../../../constants/constants';

const SignUpForm = ({ handleSubmit }) => (
  <View style={styles.container} onSubmit={handleSubmit}>
    <Field
      name="username"
      label="NAME"
      component={Input}
    />
    <Field
      name="email"
      label="EMAIL"
      keyboardType="email-address"
      component={Input}
    />
    <Field
      name="password"
      label="PASSWORD"
      component={Input}
      password
    />
    <Field
      name="passwordConfirmation"
      label="PASSWORD CONFIRMATION"
      component={Input}
      password
    />
    <Field
      name="gender"
      label="GENDER"
      data={genderOptions}
      component={MyPicker}
    />
    <Button title="SIGN UP" onPress={handleSubmit} styleProps={buttonStyle} />
  </View>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
