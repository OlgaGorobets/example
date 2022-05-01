import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import BasketProducts from '../components/BasketProducts';

const BasketParent = styled.div`
`
const Title = styled.h4``

const Basket = ({basketProducts, products}) => {
	const changeProductCount = (id, counter) => {
		
	}
	return ( 
       <BasketParent>
	      <Title>Basket</Title>
          <BasketProducts basketProducts={basketProducts} products={products} changeProductCount={changeProductCount}/>
	   </BasketParent>
	)
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }))(Basket);