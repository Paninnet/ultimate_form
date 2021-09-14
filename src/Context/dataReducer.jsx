export const CURRENT_PAGE ='CURRENT_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const ON_FIRST_NAME_CHANGE = 'ON_FIRST_NAME_CHANGE'
export const ON_LAST_NAME_CHANGE = 'ON_LAST_NAME_CHANGE'
export const ON_EMAIL_CHANGE = 'ON_EMAIL_CHANGE'
export const HAS_PHONE = 'HAS_PHONE'
export const ON_PHONE_CHANGE = 'ON_PHONE_CHANGE'
export const FINISH_JOB = 'FINISH_JOB'


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

      case ON_EMAIL_CHANGE:
         return{...state, email:action.email, wrongEmail:action.wrongEmail}
      case HAS_PHONE:
         return{...state,hasPhone:action.phone,phoneNumber:action.phoneNumber,wrongPhone:action.wrongPhone}
      case ON_PHONE_CHANGE:
         return{...state,phoneNumber:action.phoneNumber, wrongPhone:action.wrongPhone}

      case FINISH_JOB:
         return{...state, currentPage:action.currentPage, firtsName:action.firtsName,lastName:action.lastName, email:action.email,hasPhone:action.hasPhone,
         phoneNumber:action.phoneNumber, wrongName: action.wrongName, wrongLastName: action.wrongLastName, wrongEmail:action.wrongEmail, wrongPhone:action.wrongPhone
         }
   
      default:
         return{...state}
   }
}

