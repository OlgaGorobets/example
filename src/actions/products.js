const ITEMS_REQUEST_SUCCESS = ‘ITEMS_REQUEST_SUCCESS’ ;

export function itemsRequestSuccess(bool) {
   return {
      type: ITEMS_REQUEST_SUCCESS,
      isLoading: bool,
   }
}