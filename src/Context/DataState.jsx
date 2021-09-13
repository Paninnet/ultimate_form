import { useReducer } from "react"
import { dataContext } from "./dataContext"
import { CURRENT_PAGE, dataReducer, NEXT_PAGE, ON_FIRST_NAME_CHANGE, ON_LAST_NAME_CHANGE, PREV_PAGE } from "./dataReducer"

export const DataState = ({ children }) => {
   const initialState = {
      currentPage: 1,
      totalPage:4,
      firtsName:"",
      lastName:"",
      // disabledNextN:false,
      // disabledNextL:false,

      wrongName:true,
      wrongLastName:true
   }
    
   const [state, dispacth] = useReducer(dataReducer, initialState)


   const showCurrentPage = () => {
      dispacth({type:CURRENT_PAGE})
   }
   const showNextPage = (nextPageNumber) =>{
      if((!/[^a-zA-Z]/.test(state.firtsName))){
         dispacth({type:NEXT_PAGE,nextPageNumber})
      }

   }
   const showPrevPage = (prevPageNumber) =>{
      dispacth({type:PREV_PAGE,prevPageNumber})
   }


   const changeFirstName = (name) =>{
      if((!/[^a-zA-Z]/.test(name) && name.trim() )){
         dispacth({type:ON_FIRST_NAME_CHANGE,name,disabledNextN:false})
      }else dispacth({type:ON_FIRST_NAME_CHANGE,name,disabledNextN:true,wrongName:true })
      

   }
   const changeLastName = (lastName) => {
      if((!/[^a-zA-Z]/.test(lastName) && lastName.trim() )){
         dispacth({type:ON_LAST_NAME_CHANGE,lastName,disabledNextL:false})
      }else dispacth({type:ON_LAST_NAME_CHANGE,lastName,disabledNextL:true,wrongLastName:true})
   }

//      if((!/[^a-zA-Z]/.test(name))){
   return (
      <dataContext.Provider value={{ state,showNextPage,showCurrentPage,showPrevPage,changeFirstName,changeLastName }}>
         {children}
      </dataContext.Provider>
   )
}