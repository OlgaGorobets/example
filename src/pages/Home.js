import React from "react";
import { connect } from 'react-redux';

const Home = ({products}) => {
	console.log(products);
	return ( 
    <div>
	  home111
    </div>
)
}

export default connect(state => ({
    products: state.products,
  }))(Home);