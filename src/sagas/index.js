import { put, takeEvery, all, select } from 'redux-saga/effects'
import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, CHANGE_PRODUCTS_COUNT_IN_BASKET, FILL_BASKET } from '../actions/basket'
import { basketStorageName } from '../constants'

function* fetchBasket() {
  const basket = yield  localStorage.getItem(basketStorageName)
  if(basket){
	yield put({ type: FILL_BASKET, basket: JSON.parse(basket) })
  }
}

function* saveBasket() {
  const basket = yield select(state => state.basket)
  yield localStorage.setItem(basketStorageName, JSON.stringify(basket))
}

function* actionWatcher() {
  yield takeEvery([ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, CHANGE_PRODUCTS_COUNT_IN_BASKET], saveBasket)
}

export function* rootSaga() {
	yield all([
		fetchBasket(),
		actionWatcher()
	  ])
}