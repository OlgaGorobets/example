import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import { setPaginationActivePage } from '../actions/pagination';
import { setSortingFilter, clearFilter } from '../actions/filter';
import { addProductToBasket, changeProductsCountInBasket } from '../actions/basket';
import { sortingData, isSortingFieldInt } from '../constants';
import { productsType, filterType, paginationType, basketProductsType } from '../types'

const ProductsList = ({products, filter, pagination, basket, onSetPaginationActivePage, onSetSortingFilter, onClearFilter, onAddProductToBasket, onChangeProductsCountInBasket}) => {
    const usePaginationFilter = (item, index) => index >= pagination.page*pagination.count && index < pagination.page*pagination.count + pagination.count
	const sortingName = filter.sortField.name
	const sortingIsUp = filter.sortField.type === sortingData.UP
	const filteredProducts = sortingName ? products.sort((item1, item2)=> {
     let value1 = sortingIsUp ? item1[sortingName] : item2[sortingName]
	 let value2 = sortingIsUp ? item2[sortingName] : item1[sortingName]
	 if(isSortingFieldInt[sortingName]){
		 value1 = parseFloat(value1)
		 value2 = parseFloat(value2)
	 }

	 return  value1 > value2 ?  1 : -1
	}) : products

	const filteredProductsForPage = filteredProducts.filter(usePaginationFilter)
	const paginationButtonsCount = parseInt(filteredProducts.length/pagination.count + 1)
    const clickPaginationButton = (index) => onSetPaginationActivePage(index)
	const clickAddToBasket = (id) => {
       const productInBasket = basket.find((item)=> item.id === id)
	   if(productInBasket){
		  onChangeProductsCountInBasket(id, productInBasket.count+1) 
	   }
	   else{
		 onAddProductToBasket(id)
	   }
	}
	return ( 
	<>
      <Products addProductToBasket={clickAddToBasket} filteredProducts={filteredProductsForPage} clearFilter={onClearFilter} filter={filter} setSortingFilter={onSetSortingFilter} />
	  <Pagination active={pagination.page} count={paginationButtonsCount} clickButton={clickPaginationButton} />
	</>
    )
}

ProductsList.propTypes = {
  products: productsType.isRequired,
  filter: filterType.isRequired,
  pagination: paginationType.isRequired,
  basket: basketProductsType.isRequired,
  onSetPaginationActivePage: PropTypes.func.isRequired,
  onSetSortingFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
  onAddProductToBasket: PropTypes.func.isRequired,
  onChangeProductsCountInBasket: PropTypes.func.isRequired,
}

export default connect(
   state => ({
    products: state.products,
	filter: state.filter,
	pagination: state.pagination,
	basket: state.basket,
  }),
  dispatch => ({
	onSetPaginationActivePage: index => {
      dispatch(setPaginationActivePage(index));
    },
	onSetSortingFilter: sorting => {
	  dispatch(setSortingFilter(sorting));
	},
	onClearFilter: () => {
	  dispatch(clearFilter());
	},
	onAddProductToBasket: (id) => {
	  dispatch(addProductToBasket(id));
	},
	onChangeProductsCountInBasket: (id, count) => {
	  dispatch(changeProductsCountInBasket(id, count));
	}
  }))(ProductsList);