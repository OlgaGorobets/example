import { SET_PAGINATION_ACTIVE_PAGE } from '../actions/pagination';

const getProducts = (count=50) => {
	let res = []
	for(let i=0;i<count;i++){
		res.push({
		  id: `product${i}`,
		  name: `Product${i}`,
		  description: `Description${i}`,
		  price: parseFloat(Math.random() * 900 + 1000).toFixed(2)
		})
	}
	return res
}
const initialState = {
   products: getProducts(),
   pagination:{ page: 0, count: 9},
   filter: {
	   sortField: {name: 'name', type: 'asc'},
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
      case 'DECREMENT': return state
	  default: return state
   }
}
export default reducer;