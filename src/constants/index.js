export const sortingData = {
	'UP': 'up',
	'DOWN': 'down',
}
export const productFields = {
	NAME: 'name',
	DESCRIPTION: 'description',
	PRICE: 'price'
}

export const isSortingFieldInt = {
	[productFields.NAME]: false,
	[productFields.DESCRIPTION]: false,
	[productFields.PRICE]: true
}

export const basketStorageName = 'basket_storage'