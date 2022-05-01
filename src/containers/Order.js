import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import BasketProductsView from '../components/BasketProductsView';
import OrderForm from '../components/OrderForm';
import {clearBasket} from '../actions/basket';

const OrderButton = styled.button`
`
const OrderParent = styled.div`
`
const OrderValue = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  margin: 10px;
  background: #eee;
`
const OrderTitle = styled.h4``
const Order = ({basketProducts, products, onClearBasket, setOrderSubmited}) => {
  const [startOrder, setStartOrder] = useState(false)
  const submitOrder = (values) => {
	setOrderSubmited(values)
	onClearBasket()
  }
  useEffect(() => {
    setStartOrder(false)
  }, [basketProducts]);
  
	return ( 
       <OrderParent>
	    {startOrder ? 
		  <OrderValue>
		     <OrderTitle>Your order: </OrderTitle>
			 <BasketProductsView basketProducts={basketProducts} products={products}/>
			 <OrderForm submitOrder={submitOrder}/>
		  </OrderValue> : 
		  <OrderButton onClick={()=>setStartOrder(true)}>Order</OrderButton>
		}
	   </OrderParent>
	)
}

export default connect(state => ({
    basketProducts: state.basket,
	products: state.products,
  }), dispatch => ({
	onClearBasket: () => {
      dispatch(clearBasket());
    },
  }))(Order);