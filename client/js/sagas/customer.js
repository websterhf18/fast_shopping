import { call, put, takeLatest } from 'redux-saga/effects'
import { customerCall } from '../api';

import { REQUEST_CUSTOMER, receiveCustomerAction } from "../actions";

function* fetchCustomer(payload) {
    var formData = new FormData();
    formData.append('email', payload.data);
    try {
        const results = yield call(customerCall, formData);
        yield put(receiveCustomerAction(results));
    } catch (error) {
        
    }
}

export default function* customer() {
    yield takeLatest("REQUEST_CUSTOMER", fetchCustomer);
}