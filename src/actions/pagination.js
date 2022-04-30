export const SET_PAGINATION_ACTIVE_PAGE = 'SET_PAGINATION_ACTIVE_PAGE';

export function setPaginationActivePage(page) {
   return {
      type: SET_PAGINATION_ACTIVE_PAGE,
      page,
   }
}