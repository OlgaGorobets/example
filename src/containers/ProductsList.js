import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import { setPaginationActivePage } from '../actions/pagination';
import { setSortingFilter, clearFilter } from '../actions/filter';
import { sortingData, isSortingFieldInt } from '../constants';

const ProductsList = ({products, filter, pagination, onSetPaginationActivePage, onSetSortingFilter, onClearFilter}) => {
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
	return ( 
	<>
      <Products filteredProducts={filteredProductsForPage} clearFilter={onClearFilter} filter={filter} setSortingFilter={onSetSortingFilter} />
	  <Pagination active={pagination.page} count={paginationButtonsCount} clickButton={clickPaginationButton} />
	</>
    )
}

export default connect(
   state => ({
    products: state.products,
	filter: state.filter,
	pagination: state.pagination,
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
	}
  }))(ProductsList);