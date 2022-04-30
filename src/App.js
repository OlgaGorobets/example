import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Product from "./pages/Product";
import reducer from '../src/reducers'

const store = createStore(
   reducer,
)

const App = () => ( 
    <Provider store = {store}>
	  <BrowserRouter>
	    <Routes>
          <Route exact path='/'  element={<Home/>}/>
          <Route path='/:id'  element={<Product/>}/>
		</Routes>  
	   </BrowserRouter>
    </Provider>
);

export default App;