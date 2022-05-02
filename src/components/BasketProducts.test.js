import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'
import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'
import BasketProducts from './BasketProducts'
import reducer from '../reducers'

const store = createStore(
   reducer,
)

const basketProductMock = {
  id: 'test1',
  count: 1,
}
const productMock = {
  id: 'test1',
  name: 'name1',
  description: 'description1',
  price: '200.2',
}

describe('BasketProducts component', () => {
  it('renders EmptyBasket if basket is empty', () => {
	const mockEmptyText = 'Your basket is empty';
    const { getByText } = render(<BasketProducts basketProducts={[]} products={[]} changeProductCount={jest.fn()}/>);
    expect(getByText(mockEmptyText)).toBeInTheDocument()
  });

  it('renders Basket product and order button', async () => {
    const { getByText } = render(
	  <Provider store={store}>
	    <BasketProducts basketProducts={[basketProductMock]} products={[productMock]} changeProductCount={jest.fn()}/>
      </Provider>);
    expect(getByText(productMock.name)).toBeInTheDocument()
	expect(getByText('Order')).toBeInTheDocument()
	
	const user = userEvent.setup()
	await user.click(getByText('Order'))
	expect(getByText('Submit')).toBeInTheDocument()
	expect(getByText('Phone')).toBeInTheDocument()
	expect(getByText('Name')).toBeInTheDocument()
  });
  
  it('changes Basket product count', async () => {
	const changeProductCount = jest.fn()
    const { getByText } = render(<Provider store={store}><BasketProducts basketProducts={[basketProductMock]} products={[productMock]} changeProductCount={changeProductCount}/></Provider>);

	const user = userEvent.setup()
	await user.click(getByText('+'))

	await waitFor(() => expect(changeProductCount).toHaveBeenCalledWith('test1', 1))
  });

});
