import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import reducer from '../src/reducers'

const store = createStore(
   reducer,
)

const App = () => ( 
    <Provider store = {store}>
	  <BrowserRouter>
	    <Routes>
          <Route exact path='/'  element={<HomePage/>}/>
          <Route path='/:id'  element={<ProductPage/>}/>
		</Routes>  
	   </BrowserRouter>
    </Provider>
);

export default App;