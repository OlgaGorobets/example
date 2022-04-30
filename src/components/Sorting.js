import React from 'react';
import styled, {css} from 'styled-components'
import { sortingData } from '../constants';

const Button = styled.button`
  background : ${({isActive}) => isActive ? 'blue' : '#ccc'};
  cursor: pointer;
  border: 1px solid #000;
  &:hover {
    border-color: blue;
  }
  font-size: 11px;  
`

const Sorting = ({sortingFilter, name, setSortingFilter}) => {
	const clickSorting = (type) => setSortingFilter({name, type})
	const isSortingButtonActive = (type) => sortingFilter.name === name && sortingFilter.type === type
	return ( 
    <>
	  <Button isActive={isSortingButtonActive(sortingData.UP)} onClick={()=>clickSorting(sortingData.UP)}>
	    &#8593;
     </Button>
	 <Button isActive={isSortingButtonActive(sortingData.DOWN)} onClick={()=>clickSorting(sortingData.DOWN)}>
	   &#8595;
	 </Button>
    </>
)
}

export default Sorting