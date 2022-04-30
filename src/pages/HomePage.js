import React from 'react';
import ProductsList from '../containers/ProductsList';
import ProductsFilter from '../containers/ProductsFilter';
import MiniBasket from '../containers/MiniBasket';

const HomePage = () => (
    <>
	  <MiniBasket/>
	  <ProductsFilter/>
	  <ProductsList/>
    </>
)

export default HomePage