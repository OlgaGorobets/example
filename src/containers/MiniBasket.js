import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const BasketCounter = styled(Link)`
  display: flex;
  width: 500px;
  margin-left: auto;
`
const BasketCounterValue = styled.div`
   background: #ccc;
   border-radius: 50%;
   padding: 2px 5px;
   min-width: 13px;
   margin: 0 5px;
   text-align: center;
`
const MiniBasket = ({basketProducts, products}) => {
	const basketProductsAmountArr = basketProducts.map((item) => {
		const basketProduct =  products.find((product)=>product.id === item.id)
		return parseFloat(basketProduct.price) * item.count
	})	
	const basketProductsAmount = basketProductsAmountArr.reduce((prev, next) => prev + next, 0)
	return ( 
    <BasketCounter to="/basket">
	Count of products in your basket is <BasketCounterValue>{basketProducts.length}</BasketCounterValue> full amount is <BasketCounterValue>{basketProductsAmount.toFixed(2)}</BasketCounterValue> $
    </BasketCounter>
)
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }))(MiniBasket);