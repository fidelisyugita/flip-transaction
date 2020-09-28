import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors, Fonts, AppStyles} from '../Themes';
import I18n from '../I18n';
import {Scale, MoneyFormatter, DateFormatter} from '../Transforms';

export default class TransactionList extends Component {
  static defaultProps = {
    status: '',
    sender_bank: '',
    beneficiary_bank: '',
    beneficiary_name: '',
    amount: 0,
    created_at: '',
  };

  static propTypes = {
    onPress: PropTypes.func,
    status: PropTypes.string,
    sender_bank: PropTypes.string,
    beneficiary_bank: PropTypes.string,
    beneficiary_name: PropTypes.string,
    amount: PropTypes.number,
    created_at: PropTypes.string,
  };

  render() {
    const {
      onPress,
      status,
      sender_bank,
      beneficiary_bank,
      beneficiary_name,
      amount,
      created_at,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.mainContainer,
          backgroundColor: status === 'SUCCESS' ? Colors.green : Colors.orange,
        }}>
        <View style={styles.container}>
          <View style={styles.contentList}>
            <Text style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
              {sender_bank}
            </Text>
            <Icon
              name="arrowright"
              size={Fonts.size.medium}
              style={{marginHorizontal: Scale(5)}}
            />
            <Text style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
              {beneficiary_bank}
            </Text>
          </View>

          <View style={[styles.contentList, AppStyles.justifyBetween]}>
            <Text style={[Fonts.style.small, Fonts.style.textUppercase]}>
              {beneficiary_name}
            </Text>
            {status === 'SUCCESS' ? (
              <View style={styles.successIcon}>
                <Text style={[Fonts.style.tinyBold, {color: Colors.snow}]}>
                  {I18n.t('success')}
                </Text>
              </View>
            ) : (
              <View style={styles.pendingIcon}>
                <Text style={[Fonts.style.tinyBold]}>{I18n.t('checking')}</Text>
              </View>
            )}
          </View>

          <View style={styles.contentList}>
            <Text style={[Fonts.style.small]}>{MoneyFormatter(amount)}</Text>
            <Text style={[Fonts.style.largeBold]}>{' • '}</Text>
            <Text style={[Fonts.style.small]}>{DateFormatter(created_at)}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
  container: {
    marginLeft: Scale(6),
    borderTopRightRadius: Scale(5),
    borderBottomRightRadius: Scale(5),
    backgroundColor: Colors.snow,
    paddingVertical: Scale(10),
  },
  contentList: {
    ...AppStyles.row,
    ...AppStyles.alignCenter,
    paddingHorizontal: Scale(15),
  },
  successIcon: {
    paddingVertical: Scale(2),
    paddingHorizontal: Scale(8),
    backgroundColor: Colors.green,
    borderRadius: Scale(4),
  },
  pendingIcon: {
    paddingVertical: Scale(2),
    paddingHorizontal: Scale(8),
    borderColor: Colors.orange,
    borderWidth: Scale(1),
    borderRadius: Scale(4),
  },
});
