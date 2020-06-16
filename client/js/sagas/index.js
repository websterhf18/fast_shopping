import { all, fork } from 'redux-saga/effects'

import products from './products'
import customer from './customer'

export default function* mySaga(){
    yield all([
        fork(products),
        fork(customer)
    ]);
};