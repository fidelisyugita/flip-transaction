/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import TransactionActions from '../../Redux/TransactionRedux';

import {Colors, Fonts, AppStyles} from '../../Themes';
import I18n from '../../I18n';
import {Scale} from '../../Transforms';
import {IsIncludes} from '../../Lib';

import TransactionList from '../../Components/TransactionList';
import ModalDefault from '../../Components/ModalDefault';
import RadioButton from '../../Components/RadioButton';
import ModalCategory from '../../Components/ModalCategory';

const SORT_CATEGORIES = [
  {
    id: 0,
    value: I18n.t('SORTING'),
  },
  {
    id: 1,
    value: `${I18n.t('name')} A-Z`,
  },
  {
    id: 2,
    value: `${I18n.t('name')} Z-A`,
  },
  {
    id: 3,
    value: I18n.t('newestDate'),
  },
  {
    id: 4,
    value: I18n.t('oldestDate'),
  },
];

class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      showSortingModal: false,
      categoryIdChoosed: 0,
    };
  }

  componentDidMount() {
    const {getTransactionsRequest} = this.props;

    getTransactionsRequest();
  }

  renderModal() {
    const {showSortingModal, categoryIdChoosed} = this.state;

    return (
      <ModalDefault
        visible={showSortingModal}
        onClose={() => this.setState({showSortingModal: false})}>
        <View
          style={[
            AppStyles.backgroundSnow,
            {
              width: '90%',
              borderRadius: Scale(5),
              paddingVertical: Scale(20),
            },
          ]}>
          {SORT_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() =>
                this.setState({
                  categoryIdChoosed: category.id,
                  showSortingModal: false,
                })
              }
              style={[
                AppStyles.row,
                AppStyles.alignCenter,
                {paddingHorizontal: Scale(20), paddingVertical: Scale(17)},
              ]}>
              <RadioButton isSelected={category.id === categoryIdChoosed} />
              <Text style={[Fonts.style.large]}>{category.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ModalDefault>
    );
  }

  render() {
    const {searchText, categoryIdChoosed} = this.state;
    const {navigation, transactions} = this.props;
    let data = [...transactions].filter(
      (tr) =>
        IsIncludes(tr.beneficiary_name, searchText) ||
        IsIncludes(tr.sender_bank, searchText) ||
        IsIncludes(tr.beneficiary_bank, searchText) ||
        IsIncludes(tr.amount, searchText),
    );

    switch (categoryIdChoosed) {
      case 1:
        data.sort((a, b) => a.beneficiary_name > b.beneficiary_name);
        break;
      case 2:
        data.sort((a, b) => a.beneficiary_name < b.beneficiary_name);
        break;
      case 3:
        data.sort((a, b) => a.created_at < b.created_at);
        break;
      case 4:
        data.sort((a, b) => a.created_at > b.created_at);
        break;

      default:
        break;
    }

    return (
      <SafeAreaView style={[AppStyles.flex1, AppStyles.backgroundSilver]}>
        {this.renderModal()}

        <View style={styles.searchBar}>
          <View style={[AppStyles.row, AppStyles.alignCenter]}>
            <Icon name="search1" size={Scale(21)} color={Colors.steel} />
            <TextInput
              placeholderTextColor={Colors.steel}
              maxLength={20}
              value={searchText}
              placeholder={I18n.t('searchPlaceholder')}
              onChangeText={(text) => this.setState({searchText: text})}
              style={[Fonts.style.small, {marginHorizontal: Scale(5)}]}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.setState({showSortingModal: true})}
            style={[AppStyles.row, AppStyles.alignCenter]}>
            <Text style={[Fonts.style.tinyBold, {color: Colors.orange}]}>
              {SORT_CATEGORIES[categoryIdChoosed].value}
            </Text>
            <Icon
              name="down"
              size={Scale(17)}
              color={Colors.orange}
              style={{marginHorizontal: Scale(4)}}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <TransactionList
              onPress={() =>
                navigation.navigate('TransactionDetailScreen', {
                  item: item,
                })
              }
              status={item.status}
              sender_bank={item.sender_bank}
              beneficiary_bank={item.beneficiary_bank}
              beneficiary_name={item.beneficiary_name}
              amount={item.amount}
              created_at={item.created_at}
            />
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

const styles = StyleSheet.create({
  searchBar: {
    ...AppStyles.row,
    ...AppStyles.backgroundSnow,
    ...AppStyles.justifyBetween,
    ...AppStyles.shadow,
    margin: Scale(5),
    marginBottom: Scale(7),
    borderRadius: Scale(5),
    paddingHorizontal: Scale(10),
    height: Scale(60),
  },
});
