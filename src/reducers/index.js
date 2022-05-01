import { SET_PAGINATION_ACTIVE_PAGE } from '../actions/pagination';
import { SET_SORTING_FILTER, CLEAR_FILTER, SET_FIELD_VISIBILITY } from '../actions/filter';
import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, CHANGE_PRODUCTS_COUNT_IN_BASKET, FILL_BASKET } from '../actions/basket';

import { sortingData } from '../constants';

const getProducts = (count=50) => {
	let res = []
	for(let i=0;i<count;i++){
		res.push({
		  id: `product_${i}`,
		  name: `Product name ${i}`,
		  description: `Description of this product ${i}`,
		  price: parseFloat(Math.random() * 900 + 1000).toFixed(2)
		})
	}
	return res
}
const initialState = {
   products: getProducts(),
   pagination:{ page: 0, count: 9},
   filter: {
	   sortField: {name: false, type: sortingData.UP},
	   hiddenFields: [],
   },
   basket: [],
   order: {},
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PAGINATION_ACTIVE_PAGE: return {
		 ...state,
		 pagination: {
			 ...state.pagination,
			 page: action.page,
		 }
	  }
      case SET_SORTING_FILTER: return {
		 ...state,
		 pagination: {
			 ...state.pagination,
			 page: 0,
		 },
		 filter: {
			...state.filter,
			sortField: action.sorting,
		 }
	  }
      case CLEAR_FILTER: return {
		 ...state,
		 pagination: {
			 ...state.pagination,
			 page: 0,
		 },
		 filter: {
			sortField: {name: false, type: sortingData.UP},
			hiddenFields: [],
		 }
	  }
      case SET_FIELD_VISIBILITY: return {
		 ...state,
		 filter: {
			...state.filter,
			hiddenFields: action.hiddenFields,
		 }
	  }
      case FILL_BASKET: return {
		 ...state,
	     basket: action.basket,
	  }
      case ADD_PRODUCT_TO_BASKET: return {
		 ...state,
	     basket: [...state.basket, {id: action.id, count: 1}],
	  }
      case REMOVE_PRODUCT_FROM_BASKET: return {
		 ...state,
	     basket: state.basket.filter((item)=>item.id !== action.id),
	  }
      case CHANGE_PRODUCTS_COUNT_IN_BASKET: return {
		 ...state,
	     basket: state.basket.map((item)=> item.id === action.id ? {id: action.id, count: action.count} : item),
	  }
	  default: return state
   }
}
export default reducer;