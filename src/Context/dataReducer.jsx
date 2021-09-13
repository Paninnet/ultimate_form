export const CURRENT_PAGE ='CURRENT_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const ON_FIRST_NAME_CHANGE = 'ON_FIRST_NAME_CHANGE'
export const ON_LAST_NAME_CHANGE = 'ON_LAST_NAME_CHANGE'


export const dataReducer =(state,action) => {

   switch (action.type) {
      case CURRENT_PAGE:
         return{...state}
      case NEXT_PAGE:
         return{...state, currentPage:state.currentPage + 1, disabledNext:action.disabledNext}
      case PREV_PAGE:
         return{...state, currentPage:state.currentPage - 1}

      case ON_FIRST_NAME_CHANGE:
         return{...state, firtsName:action.name,wrongName:action.wrongName }
      case ON_LAST_NAME_CHANGE:
         return{...state, lastName:action.lastName,wrongLastName:action.wrongLastName}
   
      default:
         return{...state}
   }
}