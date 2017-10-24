import React from 'react';
import { View } from 'react-native';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { logout } from '../../actions/userActions';
import Menu from '../../components/menu';

const menuOptions = [{ key: 1, label: 'Map' }, { key: 2, label: 'Chats' }, { key: 3, label: 'Profile' }, { key: 4, label: 'Logout' }];

const Drawer = ({ logout }) => (
  <View style={styles.container}>
    <Menu
      optionsList={menuOptions}
      onOptionSelected={(key) => {
        switch (key) {
          case 1:
          case 2:
          case 3:
            break;
          case 4:
            logout();
            break;
          default:
            break;
        }
      }}
    />
  </View>
);

Drawer.propTypes = {
  logout: func.isRequired
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatch)(Drawer);
