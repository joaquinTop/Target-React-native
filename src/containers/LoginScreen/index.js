import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { destroy } from 'redux-form/immutable';

import LoginForm from '../../components/user/LoginForm';
import Loading from '../../components/common/Loading';
import styles from './styles';
import { login } from '../../actions/userActions';
import { defaultNavigatorStyle } from '../../constants/styleConstants';

class LoginScreen extends Component {
  componentWillUnmount() {
    const { destroyForm } = this.props;
    destroyForm();
  }

  render() {
    const { login, loading, authenticated } = this.props;

    if (loading || authenticated) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/login-top.png')}
        />
        <Text style={styles.welcome}>
          TARGET MVD
        </Text>
        <LoginForm onSubmit={user => login(user.toJS())} />
        <Text style={styles.forgotLink}>
          Forgot your password?
        </Text>
        <Text style={styles.connectWithFb}>
          CONNECT WITH FACEBOOK
        </Text>
        <View style={styles.line} />
        <Text style={styles.signUpLink}>
          SIGN UP
        </Text>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  login: func.isRequired,
  authenticated: bool.isRequired,
  loading: bool.isRequired,
  destroyForm: func.isRequired
};

LoginScreen.navigatorStyle = defaultNavigatorStyle;

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  loading: state.getIn(['user', 'loading'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user)),
  destroyForm: () => dispatch(destroy('login'))
});

export default connect(mapState, mapDispatch)(LoginScreen);
