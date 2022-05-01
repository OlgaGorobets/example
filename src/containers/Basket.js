import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BasketProducts from '../components/BasketProducts'
import {removeProductFromBasket, changeProductsCountInBasket} from '../actions/basket'
import {getBasketProductData} from '../helpers'
import { productsType, basketProductsType } from '../types'

const BasketParent = styled.div`
`
const Title = styled.h4``

const Basket = ({basketProducts, products, onRemoveProductFromBasket, onChangeProductsCountInBasket}) => {
	const changeProductCount = (id, counter) => {
		const basketProduct = getBasketProductData(id, basketProducts)
		const newCount = basketProduct.count + counter
		if(newCount > 0){
			onChangeProductsCountInBasket(id, newCount)
		}
		else{
			onRemoveProductFromBasket(id)
		}
	}
	return ( 
       <BasketParent>
	      <Title>Basket</Title>
          <BasketProducts basketProducts={basketProducts} products={products} changeProductCount={changeProductCount}/>
	   </BasketParent>
	)
}

Basket.propTypes = {
  basketProducts: basketProductsType.isRequired,
  products: productsType.isRequired,
  onRemoveProductFromBasket: PropTypes.func.isRequired,
  onChangeProductsCountInBasket: PropTypes.func.isRequired,
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }), dispatch => ({
	onRemoveProductFromBasket: id => {
      dispatch(removeProductFromBasket(id));
    },
	onChangeProductsCountInBasket: (id, count) => {
      dispatch(changeProductsCountInBasket(id, count));
    },
  }))(Basket);