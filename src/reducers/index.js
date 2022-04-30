const getProducts = (count=100) => {
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
   basket: {},
   order: {},
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT': return state
      case 'DECREMENT': return state
	  default: return state
   }
}
export default reducer;