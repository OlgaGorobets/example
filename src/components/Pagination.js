import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PaginationButton from './PaginationButton'

const PaginationParent = styled.div`
`

const Pagination = ({active, count, clickButton}) => {
	return ( 
	  <PaginationParent>
	  {Array(count).fill(0).map((value, index)=><PaginationButton key={index} clickButton={() => clickButton(index)} value={index+1} isActive={active === index}/>)}
      </PaginationParent>		
   )
}
Pagination.propTypes = {
  active: PropTypes.number,
  count: PropTypes.number,
  clickButton: PropTypes.func.isRequired,
}
Pagination.defaultProps = {
  active: 0,
  count: 0,
}

export default Pagination