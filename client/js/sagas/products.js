import { call, put, takeLatest } from 'redux-saga/effects'

import { productsCall } from '../api';

import { PRODUCTS_REQUEST, receiveProducts } from "../actions";

function* fetchProducts({ payload }) {
    try {
        const results = yield call(productsCall);
        yield put(receiveProducts(results));
    } catch (error) {
        
    }
}

export default function* products() {
    yield takeLatest("PRODUCTS_REQUEST", fetchProducts);
}