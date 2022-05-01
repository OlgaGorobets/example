export const getBasketProductData = (basketProductId, products) => products.find((product)=>product.id === basketProductId)

export const getbasketProductsPrice = (basketProducts, products) => {
	const basketProductsPriceArr = basketProducts.map((item) => {
		const basketProduct =  getBasketProductData(item.id, products)
		return parseFloat(basketProduct.price) * item.count
	})	
	return basketProductsPriceArr.reduce((prev, next) => prev + next, 0)
}