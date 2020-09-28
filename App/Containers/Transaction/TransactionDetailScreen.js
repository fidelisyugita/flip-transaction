/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import TransactionActions from '../../Redux/TransactionRedux';

import {Colors, Fonts, AppStyles} from '../../Themes';
import I18n from '../../I18n';
import {Scale} from '../../Transforms';

class TransactionDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.navigation.getParam('item', null),
    };
  }

  render() {
    const {item} = this.state;
    const {navigation} = this.props;

    return (
      <SafeAreaView style={[AppStyles.flex1, AppStyles.backgroundSilver]}>
        <ScrollView>
          <View style={[AppStyles.backgroundSnow, {marginVertical: Scale(20)}]}>
            <View style={styles.headerList}>
              <Text style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                {`${I18n.t('transactionId')}: #${item.id}`}
              </Text>

              <TouchableOpacity
                // onPress={() => navigation.pop()}
                style={{padding: Scale(8)}}>
                <Icon name="copy1" size={Scale(15)} color={Colors.orange} />
              </TouchableOpacity>
            </View>

            <View style={AppStyles.borderTop1} />

            <View style={[styles.headerList, AppStyles.justifyBetween]}>
              <Text style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                {I18n.t('transactionDetail')}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={{padding: Scale(5)}}>
                <Text style={[Fonts.style.medium, {color: Colors.bloodOrange}]}>
                  {I18n.t('close')}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={AppStyles.borderTop2} />

            <View style={styles.titleList}>
              <Text style={[Fonts.style.xlBold, Fonts.style.textUppercase]}>
                {item.sender_bank}
              </Text>
              <Icon
                name="arrowright"
                size={Scale(19)}
                style={{marginHorizontal: Scale(5)}}
              />
              <Text style={[Fonts.style.xlBold, Fonts.style.textUppercase]}>
                {item.beneficiary_bank}
              </Text>
            </View>

            <View style={styles.contentList}>
              <View style={[AppStyles.flex2]}>
                <Text
                  style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                  {item.beneficiary_name}
                </Text>
                <Text style={[Fonts.style.medium]}>{item.account_number}</Text>
              </View>
              <View style={[AppStyles.flex1]}>
                <Text
                  style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                  {I18n.t('nominal')}
                </Text>
                <Text style={[Fonts.style.medium]}>{item.amount}</Text>
              </View>
            </View>

            <View style={styles.contentList}>
              <View style={[AppStyles.flex2]}>
                <Text
                  style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                  {I18n.t('transferMessage')}
                </Text>
                <Text style={[Fonts.style.medium]}>{item.remark}</Text>
              </View>
              <View style={[AppStyles.flex1]}>
                <Text
                  style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                  {I18n.t('uniqueCode')}
                </Text>
                <Text style={[Fonts.style.medium]}>{item.unique_code}</Text>
              </View>
            </View>

            <View style={styles.contentList}>
              <View style={[AppStyles.flex2]}>
                <Text
                  style={[Fonts.style.mediumBold, Fonts.style.textUppercase]}>
                  {I18n.t('createdAt')}
                </Text>
                <Text style={[Fonts.style.medium]}>{item.created_at}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transaction.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  getTransactionsRequest: (data, callback) =>
    dispatch(TransactionActions.getTransactionsRequest(data, callback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionDetailScreen);

const styles = StyleSheet.create({
  headerList: {
    ...AppStyles.row,
    ...AppStyles.alignCenter,
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(16),
  },
  titleList: {
    ...AppStyles.row,
    ...AppStyles.alignCenter,
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(10),
  },
  contentList: {
    ...AppStyles.row,
    ...AppStyles.alignCenter,
    paddingHorizontal: Scale(20),
    paddingBottom: Scale(20),
  },
});
