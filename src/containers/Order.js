import React from 'react';
import { connect } from 'react-redux';


const Order = ({basketProducts, products}) => {

	return ( 
       <div>
jhjhjhj
	   </div>
	)
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }), dispatch => ({
	onRemoveProductFromBasket: id => {
    },
  }))(Order);