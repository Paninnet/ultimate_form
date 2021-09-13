import React from 'react'
import classes from './FormWrapper.module.css'

export const FormWrapper = ({children}) => {
   return(
      <div className ={classes.form_wrapper}>
         {children}
      </div>
   )
}