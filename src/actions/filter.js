export const SET_SORTING_FILTER = 'SET_SORTING_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const SET_FIELD_VISIBILITY = 'SET_FIELD_VISIBILITY';

export function setSortingFilter(sorting) {
   return {
      type: SET_SORTING_FILTER,
      sorting,
   }
}
export function clearFilter() {
   return {
      type: CLEAR_FILTER,
   }
}
export function setFieldVisibility(hiddenFields) {
   return {
      type: SET_FIELD_VISIBILITY,
	  hiddenFields,
   }
}