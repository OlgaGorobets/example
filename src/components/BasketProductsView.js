import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getbasketProductsPrice, getBasketProductData } from '../helpers';
import { productsType, basketProductsType } from '../types'

const BasketProductButton = styled.button`
  margin: 0 1px;
`
const BasketProduct = styled.div`
  display: flex;
  border: 1px solid #ccc;
  max-width: 400px;
`
const BasketProductChild = styled.div`
  flex: 1 1 auto;
  padding: 5px;
`

const BasketProductName = styled(BasketProductChild)``
const BasketProductPrice = styled(BasketProductChild)``
const BasketProductCount = styled(BasketProductChild)``
const BasketProductButtons = styled(BasketProductChild)`
  text-align: right;
`
const TotalPrice = styled.div``

const BasketProductsView = ({basketProducts, products, changeProductCount}) => {
    const basketProductsPrice = getbasketProductsPrice(basketProducts, products)
	return 	<>
	        {basketProducts.map((product)=>{
				  const productData = getBasketProductData(product.id, products)
				  return (
				    <BasketProduct key={product.id}>
					  <BasketProductName>{productData.name}</BasketProductName>
					  <BasketProductPrice>{productData.price} $</BasketProductPrice>
				      <BasketProductCount>
					    {product.count}
					 </BasketProductCount>
					 {changeProductCount && <BasketProductButtons>
					   <BasketProductButton onClick={()=>changeProductCount(product.id, 1)}>+</BasketProductButton>
					   <BasketProductButton onClick={()=>changeProductCount(product.id, -1)}>-</BasketProductButton>
					 </BasketProductButtons>}
					</BasketProduct>
				  )
			  })}
			  <TotalPrice>Total Price: {basketProductsPrice.toFixed(2)} $</TotalPrice>
		  </>	  
}

BasketProductsView.propTypes = {
  basketProducts: basketProductsType.isRequired,
  products: productsType.isRequired,
  changeProductCount: PropTypes.func,
}
BasketProductsView.defaultProps = {
  changeProductCount: null,
}

export default BasketProductsView