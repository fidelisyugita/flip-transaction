/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import {Colors, AppStyles} from '../Themes';
import {Scale} from '../Transforms';

export default class RadioButton extends Component {
  static defaultProps = {
    isSelected: false,
    color: Colors.orange,
  };

  static propTypes = {
    isSelected: PropTypes.bool,
    color: PropTypes.string,
  };

  render() {
    const {isSelected, color} = this.props;

    return (
      <View
        style={{
          ...AppStyles.alignCenter,
          ...AppStyles.justifyCenter,
          borderRadius: 50,
          borderColor: color,
          borderWidth: Scale(2),
          width: Scale(17),
          height: Scale(17),
          marginRight: Scale(8),
        }}>
        {isSelected && (
          <View
            style={{
              borderRadius: 50,
              backgroundColor: color,
              width: Scale(9),
              height: Scale(9),
            }}
          />
        )}
      </View>
    );
  }
}
