import { SET_PAGINATION_ACTIVE_PAGE } from '../actions/pagination';
import { SET_SORTING_FILTER, CLEAR_FILTER } from '../actions/filter';

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
	   removeFields: [],
   },
   basket: {},
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
			removeFields: [],
		 }
	  }
	  default: return state
   }
}
export default reducer;