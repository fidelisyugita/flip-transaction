import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors, Fonts, AppStyles} from '../Themes';
import I18n from '../I18n';
import {Scale} from '../Transforms';

export default class ModalDefault extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };

  render() {
    const {children, visible, onClose} = this.props;

    return (
      <Modal visible={visible} transparent={true} onRequestClose={onClose}>
        <TouchableOpacity
          onPress={onClose}
          style={[
            AppStyles.flex1,
            AppStyles.alignCenter,
            AppStyles.justifyCenter,
            {
              backgroundColor: Colors.windowTint,
            },
          ]}>
          {children && children}
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    ...AppStyles.shadow,
    margin: Scale(5),
    marginVertical: Scale(3),
    borderRadius: Scale(5),
  },
});
