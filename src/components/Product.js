import React from 'react';
import styled, {css} from 'styled-components'
import Sorting from './Sorting';
import { productFields } from '../constants'

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
const ProductName = styled(ProductItemBlock)`
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
	const isFieldVisible = (field) => !filter.hiddenFields.includes(field)
	return ( 
    <ProductItem isHeader={setSortingFilter}>
	  {isFieldVisible(productFields.NAME) && <ProductName>{product[productFields.NAME]}
		{setSortingFilter && <Sorting name={productFields.NAME} setSortingFilter={setSortingFilter} sortingFilter={filter.sortField}/>}
	  </ProductName>}
	  {isFieldVisible(productFields.DESCRIPTION) && <ProductDescription>{product[productFields.DESCRIPTION]}</ProductDescription>}
	  {isFieldVisible(productFields.PRICE) && 
	    <ProductPrice>{product[productFields.PRICE]}
	     {setSortingFilter ? <Sorting name={productFields.PRICE} setSortingFilter={setSortingFilter} sortingFilter={filter.sortField}/> : ' $'}
	    </ProductPrice>
	   }
	  <ProductButtonParent>
	    { setSortingFilter 
		? filter.sortField.name && <ClearButton onClick={clearFilter}>Clear Filters</ClearButton> 
		: <ProductButton onClick={() => addProductToBasket(product.id)}>Add to Basket</ProductButton>}
	  </ProductButtonParent>
    </ProductItem>
)
}

export default Product