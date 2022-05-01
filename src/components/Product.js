import React from 'react';
import styled, {css} from 'styled-components'
import Sorting from './Sorting';

const ProductItem = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  ${({isHeader}) => isHeader && css`
	font-weight: bold;
	font-size: 15px;
	text-transform: uppercase;
  `};
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
const ClearButton = styled.button`
   background: #ccc;
`
const Product = ({product, setSortingFilter, clearFilter, filter, addProductToBasket}) => {
	return ( 
    <ProductItem isHeader={setSortingFilter}>
	  <ProductTitle>{product.name}
		  {setSortingFilter && <Sorting name="name" setSortingFilter={setSortingFilter} sortingFilter={filter.sortField}/>}
	  </ProductTitle>
	  <ProductDescription>{product.description}</ProductDescription>
	  <ProductPrice>{product.price}
	    {setSortingFilter ? <Sorting name="price" setSortingFilter={setSortingFilter} sortingFilter={filter.sortField}/> : ' $'}
	  </ProductPrice>
	  <ProductButtonParent>
	    { setSortingFilter 
		? filter.sortField.name && <ClearButton onClick={clearFilter}>Clear Filters</ClearButton> 
		: <ProductButton onClick={() => addProductToBasket(product.id)}>Add to Basket</ProductButton>}
	  </ProductButtonParent>
    </ProductItem>
)
}

export default Product