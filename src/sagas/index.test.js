import { put } from 'redux-saga/effects'
import 'regenerator-runtime/runtime'
import { FILL_BASKET } from '../actions/basket'
import { fetchBasket } from './index'

const basketProductMock = {
  id: 'test1',
  count: 1,
}

describe('Sagas', () => {
  it('fetchBasket', () => {
    const gen = fetchBasket()
	gen.next()
	expect(gen.next(JSON.stringify([basketProductMock])).value).toEqual(put({ type: FILL_BASKET, basket: [basketProductMock] }))
    expect(gen.next().done).toBeTruthy()
  });
});
