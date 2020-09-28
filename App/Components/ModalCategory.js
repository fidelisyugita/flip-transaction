import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors, Fonts, AppStyles} from '../Themes';
import I18n from '../I18n';
import {Scale} from '../Transforms';

import ModalDefault from './ModalDefault';
import RadioButton from './RadioButton';

export default class ModalCategory extends Component {
  static defaultProps = {
    visible: false,
    data: [],
    isSelected: false,
  };

  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.array,
    onPress: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  render() {
    const {visible, onClose, data, onPress, isSelected} = this.props;

    return (
      <ModalDefault visible={visible} onClose={onClose}>
        <View style={styles.container}>
          {data.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={onPress}
              style={styles.list}>
              <RadioButton isSelected={isSelected} />
              <Text style={[Fonts.style.large]}>{category.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ModalDefault>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...AppStyles.backgroundSnow,
    width: '90%',
    borderRadius: Scale(5),
    paddingVertical: Scale(20),
  },
  list: {
    ...AppStyles.row,
    ...AppStyles.alignCenter,
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(17),
  },
});
