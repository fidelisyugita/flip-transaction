/* eslint-disable curly */
import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

import I18n from '../I18n';
import {Colors, Fonts, Metrics, Images, AppStyles} from '../Themes';

import {DropDownHolder} from '../Components/DropDownHolder';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getTransactionsRequest: ['data', 'callback'],
  getTransactionsSuccess: ['payload'],
  getTransactionsFailure: ['error'],
});

export const TransactionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const DEFAULT_STATE = {
  data: null,
  fetching: false,
  payload: null,
  error: null,
};

export const INITIAL_STATE = Immutable({
  transactions: [],

  getTransactions: DEFAULT_STATE,
});

/* ------------- Selectors ------------- */

export const TransactionSelectors = {
  selectTransactions: (state) => state.transaction.transactions,
};

/* ------------- Reducers ------------- */

export const getTransactionsRequest = (state, {data}) => {
  return state.merge({
    ...state,
    getTransactions: {...state.getTransactions, fetching: true, data},
  });
};
export const getTransactionsSuccess = (state, {payload}) => {
  // DropDownHolder.alert('success', I18n.t('successDefault'), undefined);

  let newTransactions = [...state.transactions];
  if (payload.length > 0) newTransactions = payload;

  return state.merge({
    ...state,
    getTransactions: {fetching: false, error: null, payload: null, data: null},
    transactions: newTransactions,
  });
};
export const getTransactionsFailure = (state, {error}) => {
  DropDownHolder.alert(
    'error',
    I18n.t('errorDefault'),
    error.message || I18n.t('tryAgain'),
  );

  return state.merge({
    ...state,
    getTransactions: {...state.getTransactions, fetching: false, error},
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRANSACTIONS_REQUEST]: getTransactionsRequest,
  [Types.GET_TRANSACTIONS_SUCCESS]: getTransactionsSuccess,
  [Types.GET_TRANSACTIONS_FAILURE]: getTransactionsFailure,
});
