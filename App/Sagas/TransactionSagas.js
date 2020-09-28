/* eslint-disable curly */
import {call, put} from 'redux-saga/effects';

import TransactionActions from '../Redux/TransactionRedux';

export function* getTransactions(api, action) {
  const {callback} = action;
  console.tron.log({action});

  try {
    // make the call to the api
    const response = yield call(api.getTransactions, action.data);
    console.tron.log({response});

    if (!response.ok) throw response;
    const {data} = response;
    console.tron.log({data});

    // do data conversion here if needed
    let res = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        res.push(data[key]);
      }
    }
    console.tron.log({res});
    yield put(TransactionActions.getTransactionsSuccess(res));
    if (callback) callback({ok: true});
  } catch (error) {
    yield put(TransactionActions.getTransactionsFailure(error));
    if (callback) callback({ok: false});
  }
}
