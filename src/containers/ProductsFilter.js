import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setFieldVisibility } from '../actions/filter';
import Filter from '../components/Filter';
import { hiddenFieldsType } from '../types'

const ProductsFilter = ({hiddenFields, onSetFieldVisibility}) => {
	return ( 
    <Filter hiddenFields={hiddenFields} setFieldVisibility={onSetFieldVisibility}/>
   )
}

ProductsFilter.propTypes = {
  hiddenFields: hiddenFieldsType.isRequired,
  onSetFieldVisibility: PropTypes.func.isRequired,
}

export default connect(state => ({
	hiddenFields: state.filter.hiddenFields,
  }), dispatch => ({
	onSetFieldVisibility: hiddenFields => {
      dispatch(setFieldVisibility(hiddenFields));
    },
  }))(ProductsFilter);