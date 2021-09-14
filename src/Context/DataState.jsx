import { useReducer } from "react"
import Swal from "sweetalert2"
import { dataContext } from "./dataContext"
import { CURRENT_PAGE, dataReducer, FINISH_JOB, HAS_PHONE, NEXT_PAGE, ON_EMAIL_CHANGE, ON_FIRST_NAME_CHANGE, ON_LAST_NAME_CHANGE, ON_PHONE_CHANGE, PREV_PAGE } from "./dataReducer"

export const DataState = ({ children }) => {
   const initialState = {
      currentPage: 1,
      totalPage: 3,

      firtsName: "",
      lastName: "",

      email: "",
      hasPhone: false,
      phoneNumber: "",


      wrongName: true,
      wrongLastName: true,
      wrongEmail: true,
      wrongPhone: true
   }

   const [state, dispacth] = useReducer(dataReducer, initialState)


   const showCurrentPage = () => {
      dispacth({ type: CURRENT_PAGE })
   }
   const showNextPage = (nextPageNumber) => {
      if ((!/[^a-zA-Z]/.test(state.firtsName))) {
         dispacth({ type: NEXT_PAGE, nextPageNumber })
      }

   }
   const showPrevPage = (prevPageNumber) => {
      dispacth({ type: PREV_PAGE, prevPageNumber })
   }


   const changeFirstName = (name) => {
      if ((!/[^a-zA-Z]/.test(name) && name.trim())) {
         dispacth({ type: ON_FIRST_NAME_CHANGE, name, disabledNextN: false })
      } else dispacth({ type: ON_FIRST_NAME_CHANGE, name, wrongName: true })


   }
   const changeLastName = (lastName) => {
      if ((!/[^a-zA-Z]/.test(lastName) && lastName.trim())) {
         dispacth({ type: ON_LAST_NAME_CHANGE, lastName, disabledNextL: false })
      } else dispacth({ type: ON_LAST_NAME_CHANGE, lastName, wrongLastName: true })
   }

   const changeEmail = (email) => {
      if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) && email.trim()) {
         dispacth({ type: ON_EMAIL_CHANGE, email, wrongEmail: false })
      }
      else {
         dispacth({ type: ON_EMAIL_CHANGE, email, wrongEmail: true })
      }
   }

   const changeHasPhone = (phone) => {
      dispacth({ type: HAS_PHONE, phone, phoneNumber: "", wrongPhone: true })
   }

   const changePhoneNumber = (phoneNumber) => {
      if (/^\d[\d\(\)\ -]{4,14}\d$/.test(phoneNumber) && phoneNumber.trim())
         dispacth({ type: ON_PHONE_CHANGE, phoneNumber, wrongPhone: false })
      else {
         dispacth({ type: ON_PHONE_CHANGE, phoneNumber, wrongPhone: true })
      }

   }

   const finishJob = (firtsName ="", currentPage = 1, lastName="", email="", hasPhone=false, phoneNumber="",
      wrongName = true,
      wrongLastName = true,
      wrongEmail = true,
      wrongPhone = true) => {
         Swal.fire("Great Job","Nice",'success')
      dispacth({ type: FINISH_JOB,firtsName,currentPage,lastName,email,hasPhone,phoneNumber,wrongEmail,wrongName, wrongLastName,wrongPhone })
   }


   return (
      <dataContext.Provider value={{ state, showNextPage, showCurrentPage, showPrevPage, changeFirstName, changeLastName, changeEmail, changeHasPhone, changePhoneNumber,finishJob }}>
         {children}
      </dataContext.Provider>
   )
}