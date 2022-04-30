import React from 'react';
import styled from 'styled-components'

const ProductItem = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
`
const ProductItemBlock = styled.div`
  flex:1 1 auto;
`
const ProductTitle = styled(ProductItemBlock)`
  font-weight: bold;
  font-size: 15px;
`
const ProductDescription = styled(ProductItemBlock)`
`
const ProductPrice = styled(ProductItemBlock)`
`
const ProductButtonParent = styled(ProductItemBlock)`
  text-align: right;
`
const ProductButton = styled.button`
`
const Product = ({product}) => {
	console.log(product);
	return ( 
    <ProductItem>
	  <ProductTitle>{product.name}</ProductTitle>
	  <ProductDescription>{product.description}</ProductDescription>
	  <ProductPrice>{product.price}$</ProductPrice>
	  <ProductButtonParent>
	    <ProductButton>Add to Basket</ProductButton>
	  </ProductButtonParent>
    </ProductItem>
)
}

export default Product