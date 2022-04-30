import React from 'react';
import styled from 'styled-components'
import Product from './Product';

const ProductsParent = styled.div`
  font-weight: 14px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-bottom: 10px;
`
const Title = styled.h3`
`


const Products = ({filteredProducts, filter}) => {
    return ( 
	  <ProductsParent>
		<Title>Products:</Title>
		{filteredProducts.map(product => <Product key={product.id} product={product}/>)}
      </ProductsParent>		
   )
}

export default Products