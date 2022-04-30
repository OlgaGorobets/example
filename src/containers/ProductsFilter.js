import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';


const ProductsFilter = ({products, filter}) => {
	return ( 
    <div>filter</div>
)
}

export default connect(state => ({
    products: state.products,
	filter: state.filter,
  }))(ProductsFilter);