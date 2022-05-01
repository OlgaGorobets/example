import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { getbasketProductsPrice } from '../helpers'
import { productsType, basketProductsType } from '../types'

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
	const basketProductsPrice = getbasketProductsPrice(basketProducts, products)
	return ( 
    <BasketCounter to="/basket">
	Count of products in your basket is <BasketCounterValue>{basketProducts.length}</BasketCounterValue> full amount is <BasketCounterValue>{basketProductsPrice.toFixed(2)}</BasketCounterValue> $
    </BasketCounter>
)
}

MiniBasket.propTypes = {
  basketProducts: basketProductsType.isRequired,
  products: productsType.isRequired,
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }))(MiniBasket);