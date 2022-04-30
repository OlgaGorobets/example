import React from 'react';
import styled from 'styled-components'
import PaginationButton from './PaginationButton';

const PaginationParent = styled.div`
`

const Pagination = ({active, count, clickButton}) => {
	return ( 
	  <PaginationParent>
	  {Array(count).fill(0).map((value, index)=><PaginationButton key={index} clickButton={() => clickButton(index)} value={index+1} isActive={active === index}/>)}
      </PaginationParent>		
   )
}

export default Pagination