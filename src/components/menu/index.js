import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

class Menu extends Component {
  constructor() {
    super();

    this.state = { selectedOption: 0 };

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem({ key }) {
    const { onOptionSelected } = this.props;
    onOptionSelected(key);
  }

  render() {
    const { optionsList } = this.props;

    return (
      <View style={styles.optionsContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/menu-top.png')}
        />
        <FlatList
          data={optionsList}
          renderItem={({ item }) =>
            <TouchableHighlight
              underlayColor={'coolGrey'}
              onPress={() => this.selectItem(item)}
              style={styles.option}
            >
              <View style={styles.optionRow}>
                <Text style={styles.text}>{item.label}</Text>
              </View>
            </TouchableHighlight>
          }
          style={styles.list}
        />
      </View>
    );
  }
}

Menu.propTypes = {
  optionsList: array.isRequired,
  onOptionSelected: func
};

export default Menu;
