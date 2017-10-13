import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { destroy } from 'redux-form/immutable';
import { Navigation } from 'react-native-navigation';

import SignUpForm from '../../components/user/SignUpForm';
import Loading from '../../components/common/Loading';
import styles from './styles';
import { signUp } from '../../actions/userActions';
import { defaultNavigatorStyle } from '../../constants/styleConstants';

class SignUpScreen extends Component {
  componentWillUnmount() {
    const { destroyForm } = this.props;
    destroyForm();
  }

  render() {
    const { signUp, loading, authenticated } = this.props;

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
        <SignUpForm onSubmit={user => signUp(user.toJS())} />
        <View style={styles.line} />
        <Text style={styles.signInLink} onPress={() => { 
          Navigation.startSingleScreenApp({
            screen: {
              screen: 'target.LoginScreen',
              title: 'Login',
              navigatorStyle: {}
            }
          });
        }}>
          SIGN IN
        </Text>
      </View>
    );
  }
}

SignUpScreen.propTypes = {
  signUp: func.isRequired,
  authenticated: bool.isRequired,
  loading: bool.isRequired,
  destroyForm: func.isRequired
};

SignUpScreen.navigatorStyle = defaultNavigatorStyle;

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  loading: state.getIn(['user', 'loading'])
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  destroyForm: () => dispatch(destroy('signUp'))
});

export default connect(mapState, mapDispatch)(SignUpScreen);
