import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View } from 'react-native';

import Input from '../../common/Input';
import Button from '../../common/Button';
import styles, { buttonStyle } from './styles';
import * as constraints from '../../../utils/constraints';

const LoginForm = ({ handleSubmit }) => (
  <View style={styles.container} onSubmit={handleSubmit}>
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
    <Button title="SIGN IN" onPress={handleSubmit} styleProps={buttonStyle} />
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: constraints.validations(constraints.login)
})(LoginForm);
