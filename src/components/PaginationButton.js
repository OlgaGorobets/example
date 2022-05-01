import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background : ${({isActive}) => isActive ? 'blue' : '#ccc'};
  cursor: pointer;
  border: 1px solid #000;
  &:hover {
    border-color: blue;
  }
  
`

const PaginationButton = ({isActive, value, clickButton}) => {
	
	return ( 
	  <Button isActive={isActive} onClick={clickButton}>
	  {value}
      </Button>		
   )
}

PaginationButton.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.number,
  clickButton: PropTypes.func.isRequired,
}
PaginationButton.defaultProps = {
  isActive: false,
  value: 0,
}

export default PaginationButton