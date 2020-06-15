import { call, put, takeLatest } from 'redux-saga/effects'

import apiCall from '../api';

import { PRODUCTS_REQUEST, receiveProducts } from "../actions";

function* fetchProducts({ payload }) {
    try {
        const results = yield call(apiCall, 'get', 'http://localhost:3000/api/products');
        yield put(receiveProducts(results));
    } catch (error) {
        
    }
}

export default function* products() {
    yield takeLatest("PRODUCTS_REQUEST", fetchProducts);
}