import { call, put, takeLatest } from 'redux-saga/effects'
import { orderCall } from '../api';

import { REQUEST_ORDER, receiveOrderAction } from "../actions";

function* fetchOrder(payload) {
    var bodyData = {
        "type_user": payload.data.type_user,
        "info_user": payload.data.info_user,
        "products": payload.data.products
    }
    try {
        const results = yield call(orderCall, bodyData);
        yield put(receiveOrderAction(results));
        window.location.href = 'thanks';
    } catch (error) {
        
    }
}

export default function* order() {
    yield takeLatest("REQUEST_ORDER", fetchOrder);
}