import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import PaginationButton from './PaginationButton'
import { productFields } from '../constants'
import { hiddenFieldsType } from '../types'

const FilterParent = styled.div`
  display: flex;
`
const FilterField = styled.button`
  margin: 0 3px;
  text-decoration: underline;
  ${({isHidden})=> isHidden && css`
    text-decoration: line-through;
  `}
`
const Filter = ({hiddenFields, setFieldVisibility}) => {
	const getHiddenFields = fieldName => hiddenFields.includes(fieldName) ? hiddenFields.filter(field=>field !== fieldName) : [...hiddenFields, fieldName]
	return ( 
	  <FilterParent>
	    Click fields to hide them: 
	  {Object.keys(productFields).map((field)=>{
		  const fieldName = productFields[field]
		  return <FilterField key={field} isHidden={hiddenFields.includes(fieldName)} onClick={()=>setFieldVisibility(getHiddenFields(fieldName))}>{fieldName}</FilterField>
	  })}
      </FilterParent>		
   )
}

Filter.propTypes = {
  hiddenFields: hiddenFieldsType.isRequired,
  setFieldVisibility: PropTypes.func.isRequired,
}

export default Filter