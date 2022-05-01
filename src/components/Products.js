import React from 'react';
import styled from 'styled-components'
import Product from './Product';
import { productFields } from '../constants'

const ProductsParent = styled.div`
  font-weight: 14px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-bottom: 10px;
`
const Title = styled.h3`
`


const Products = ({filteredProducts, filter, setSortingFilter, clearFilter, addProductToBasket}) => {
    return ( 
	  <ProductsParent>
		<Title>Products:</Title>
		<Product
		  setSortingFilter={setSortingFilter}
		  clearFilter={clearFilter}
		  filter={filter}
		  product={({
			[productFields.NAME]: 'Name',
			[productFields.DESCRIPTION]: 'Description',
			[productFields.PRICE]: 'Price',
		})}/>
		{filteredProducts.map(product => <Product key={product.id} filter={filter} product={product} addProductToBasket={addProductToBasket}/>)}
      </ProductsParent>		
   )
}

export default Products