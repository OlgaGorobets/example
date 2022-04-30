import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components'

const BasketParent = styled.div`
  display: flex;
`

const Basket = ({basketProducts, products}) => {
	/*const basketProductsAmountArr = basketProducts.map((item) => {
		const basketProduct =  products.find((product)=>product.id === item.id)
		return parseFloat(basketProduct.price) * item.count
	})	
	const basketProductsAmount = basketProductsAmountArr.reduce((prev, next) => prev + next, 0)*/
	return ( 
       <BasketParent>
	   basket page
	   </BasketParent>
	)
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }))(Basket);