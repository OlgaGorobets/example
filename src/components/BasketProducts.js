import React from 'react';
import styled from 'styled-components'
import Order from '../containers/Order';
import BasketProductsView from '../components/BasketProductsView';

const EmptyBasket = styled.div``

const BasketProducts = ({basketProducts, products, changeProductCount}) => {
    return  basketProducts.length > 0 ?
			<>
		      <BasketProductsView basketProducts={basketProducts} products={products} changeProductCount={changeProductCount}/>
			  <Order/>
			</> :
		    <EmptyBasket>Your basket is empty</EmptyBasket>

}

export default BasketProducts