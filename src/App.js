import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import { Provider } from "react-redux";
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import reducer from '../src/reducers'
import { rootSaga } from '../src/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(rootSaga)


const App = () => ( 
    <Provider store = {store}>
	  <BrowserRouter>
	    <Routes>
          <Route exact path='/'  element={<HomePage/>}/>
          <Route path='/basket'  element={<BasketPage/>}/>
		</Routes>  
	   </BrowserRouter>
    </Provider>
);

export default App;