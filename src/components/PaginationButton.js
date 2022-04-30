import React from 'react';
import styled from 'styled-components'

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

export default PaginationButton