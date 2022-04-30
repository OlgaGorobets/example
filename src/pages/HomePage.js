import React from 'react';
import ProductsList from '../containers/ProductsList';
import ProductsFilter from '../containers/ProductsFilter';
import MiniBasket from '../containers/MiniBasket';

const HomePage = () => (
    <>
	  <ProductsFilter/>
	  <ProductsList/>
	  <MiniBasket/>
    </>
)

export default HomePage