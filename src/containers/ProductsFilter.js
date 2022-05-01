import React from 'react';
import { connect } from 'react-redux';
import { setFieldVisibility } from '../actions/filter';
import Filter from '../components/Filter';


const ProductsFilter = ({hiddenFields, onSetFieldVisibility}) => {
	return ( 
    <Filter hiddenFields={hiddenFields} setFieldVisibility={onSetFieldVisibility}/>
   )
}

export default connect(state => ({
	hiddenFields: state.filter.hiddenFields,
  }), dispatch => ({
	onSetFieldVisibility: hiddenFields => {
      dispatch(setFieldVisibility(hiddenFields));
    },
  }))(ProductsFilter);