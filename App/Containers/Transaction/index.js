/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  Text,
  Image,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import TransactionActions from '../../Redux/TransactionRedux';

import {Colors, Fonts, Metrics, Images, AppStyles} from '../../Themes';
import I18n from '../../I18n';
import {Scale} from '../../Transforms';

class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    const {getTransactionsRequest} = this.props;

    getTransactionsRequest();
  }

  render() {
    const {searchText} = this.state;
    const {navigation, transactions} = this.props;
    const data = [...transactions];

    return (
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TransactionDetailScreen', {
                  item: item,
                })
              }
              style={[
                AppStyles.shadow,
                {
                  margin: Scale(8),
                  borderRadius: Scale(8),
                },
              ]}>
              <View style={{padding: Scale(12)}}>
                <Text>{item.sender_bank}</Text>
                <Text>{item.beneficiary_bank}</Text>
                <Text>{item.beneficiary_name}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.completed_at || item.created_at}</Text>
                <Text>{item.status}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen);
