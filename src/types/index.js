import PropTypes from 'prop-types';

export const productType = PropTypes.exact({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
})
export const basketProductType = PropTypes.exact({
  id: PropTypes.string,
  count: PropTypes.number,
})
export const sortFieldType = PropTypes.exact({
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  type: PropTypes.string,
})
export const hiddenFieldsType = PropTypes.arrayOf(PropTypes.string)
export const filterType = PropTypes.exact({
    sortField: sortFieldType,
	hiddenFields: hiddenFieldsType,
})
export const productsType = PropTypes.arrayOf(productType)
export const basketProductsType = PropTypes.arrayOf(basketProductType)
export const paginationType = PropTypes.exact({
  page: PropTypes.number, 
  count: PropTypes.number,
})