import React from 'react';
import styled from 'styled-components'
import { getbasketProductsPrice, getBasketProductData } from '../helpers';

const OrderButton = styled.button``
const BasketProductButton = styled.button``
const BasketProduct = styled.div`
  display: flex;
`
const BasketProductInfo = styled.div`
  display: flex;
`
const BasketProductName = styled.div``
const BasketProductPrice = styled.div``
const BasketProductCount = styled.div``
const TotalPrice = styled.div``
const EmptyBasket = styled.div``

const BasketProducts = ({basketProducts, products, changeProductCount}) => {
	const basketProductsPrice = getbasketProductsPrice(basketProducts, products)
    return  basketProducts.length > 0 ? 
		    <>
			  {basketProducts.map((product)=>{
				  const productData = getBasketProductData(product.id, products)
				  return (
				    <BasketProduct key={product.id}>
					  <BasketProductInfo>
					    <BasketProductName>{productData.name}</BasketProductName>
					    <BasketProductPrice>{productData.price} $</BasketProductPrice>
						<BasketProductCount>{product.count}</BasketProductCount>
						<BasketProductButton onClick={()=>changeProductCount(product.id, 1)}>+</BasketProductButton>
						<BasketProductButton onClick={()=>changeProductCount(product.id, -1)}>-</BasketProductButton>
					  </BasketProductInfo>
					</BasketProduct>
				  )
			  })}
			  <TotalPrice>Total Price: {basketProductsPrice} $</TotalPrice>
			  <OrderButton>Order</OrderButton>
			</> :
		    <EmptyBasket>Your basket is empty</EmptyBasket>

}

export default BasketProducts