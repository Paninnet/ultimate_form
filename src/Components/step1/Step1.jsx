
import React, { useContext, useEffect } from 'react'
import { Button } from '../UI/Button/Button'
import { FormWrapper } from '../UI/Form/FormWrapper'
import { Input } from '../UI/Input/Input'
import { dataContext } from '../../Context/dataContext'




export const Step1 = () => {

   const { state, showCurrentPage } = useContext(dataContext)
   useEffect(() => {
      showCurrentPage()
   }, [])


   return (
      <FormWrapper>
         <div  >Step {state.currentPage}</div>
         <Input />
         <Button />
      </FormWrapper>
   )
}
