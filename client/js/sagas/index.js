import { all, fork } from 'redux-saga/effects'

import products from './products'
import customer from './customer'
import order from './order'

export default function* mySaga(){
    yield all([
        fork(products),
        fork(customer),
        fork(order)
    ]);
};