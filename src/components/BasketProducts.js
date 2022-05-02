import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Order from '../containers/Order'
import BasketProductsView from '../components/BasketProductsView'
import { productsType, basketProductsType } from '../types'

const EmptyBasket = styled.div``
const OrderSubmited = styled.div`
`
export const BasketProducts = ({basketProducts, products, changeProductCount}) => {
	const [orderSubmited, setOrderSubmited] = useState(null)
	
    return  basketProducts.length > 0 ?
			<>
		      <BasketProductsView basketProducts={basketProducts} products={products} changeProductCount={changeProductCount}/>
			  <Order setOrderSubmited={setOrderSubmited}/>
			</> :
            orderSubmited ? <OrderSubmited>{orderSubmited.name}, we have received your order and will contact you shortly</OrderSubmited> : <EmptyBasket>Your basket is empty</EmptyBasket>

}

BasketProducts.propTypes = {
  basketProducts: basketProductsType.isRequired,
  products: productsType.isRequired,
  changeProductCount: PropTypes.func.isRequired,
}

export default BasketProducts

