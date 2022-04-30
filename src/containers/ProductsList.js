import React from "react";
import { connect } from 'react-redux';

const ProductsList = ({products}) => {
	console.log(products);
	return ( 
    <div>
	  products list
    </div>
)
}

export default connect(state => ({
    products: state.products,
  }))(ProductsList);