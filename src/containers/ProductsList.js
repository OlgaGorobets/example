import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import { setPaginationActivePage } from '../actions/pagination';


const ProductsList = ({products, filter, pagination, onSetPaginationActivePage}) => {
    const usePaginationFilter = (item, index) => index >= pagination.page*pagination.count && index < pagination.page*pagination.count + pagination.count
	const filteredProducts = products
	const filteredProductsForPage = products.filter(usePaginationFilter)
	const paginationButtonsCount = parseInt(filteredProducts.length/pagination.count + 1)
    const clickPaginationButton = (index) => onSetPaginationActivePage(index)
	return ( 
	<>
      <Products filteredProducts={filteredProductsForPage} filter={filter} />
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
    }
  }))(ProductsList);