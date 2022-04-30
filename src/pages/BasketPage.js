import React from 'react';
import { Link } from 'react-router-dom';
import Basket from '../containers/Basket';

const BasketPage = () => ( 
    <>
	<Link to="/">
	   Back to products list
    </Link>
	<Basket/>
	</>
);

export default BasketPage;