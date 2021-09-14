import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../Context/dataContext'
import { Button3 } from '../UI/Button/Button3'
import { FormWrapper } from '../UI/Form/FormWrapper'
import classes from './Step3.module.css'


export const Step3 = () => {
   const { state,finishJob } = useContext(dataContext)
   debugger
   return (
      <FormWrapper>
         <div>
            Form Values
            <div className={classes.form_res_wrapper} >
               <div className={classes.form_res_item}>
                  <p className={classes.item}>Field</p>
                  <p className={classes.result}>Value</p>
               </div>
               <div className={classes.form_res_item}>
                  <p className={classes.item}>FirstName</p>
                  <p className={classes.result}>{state.firtsName}</p>
               </div>
               <div className={classes.form_res_item}>
                  <p className={classes.item}>LastName</p>
                  <p className={classes.result}>{state.lastName}</p>
               </div>
               <div className={classes.form_res_item}>
                  <p className={classes.item}>Email</p>
                  <p className={classes.result}>{state.email}</p>
               </div>
               <div className={classes.form_res_item}>
                  <p className={classes.item}>Phone</p>
                  <p className={classes.result}>{state.hasPhone ? "true" : "false"}</p>
               </div>
               <div className={classes.form_res_item}>
                  <p className={classes.item}>Phone Number</p>
                  <p className={classes.result}>{state.hasPhone ? state.phoneNumber : "null"}</p>
               </div>
            </div>
            <Button3 />
            <NavLink to="/ultimate_form/"><button onClick={() =>finishJob() }>Finish the Job</button></NavLink>
         </div>
      </FormWrapper>
   )
}