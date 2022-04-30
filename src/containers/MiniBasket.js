import React from "react";
import { connect } from 'react-redux';

const MiniBasket = ({basket}) => {
	console.log(basket, 'basket');
	return ( 
    <div>
	  mini basket
    </div>
)
}

export default connect(state => ({
    basket: state.basket,
  }))(MiniBasket);