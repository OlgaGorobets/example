export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
export const REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET';
export const CHANGE_PRODUCTS_COUNT_IN_BASKET = 'CHANGE_PRODUCTS_COUNT_IN_BASKET';
export const FILL_BASKET = 'FILL_BASKET';

export function addProductToBasket(id) {
   return {
      type: ADD_PRODUCT_TO_BASKET,
      id,
   }
}
export function removeProductFromBasket(id) {
   return {
      type: REMOVE_PRODUCT_FROM_BASKET,
      id,
   }
}

export function changeProductsCountInBasket(id, count) {
   return {
      type: CHANGE_PRODUCTS_COUNT_IN_BASKET,
      id,
	  count,
   }
}
