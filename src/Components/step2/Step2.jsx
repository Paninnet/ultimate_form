
import React, { useContext, useEffect } from 'react'
import { Button } from '../UI/Button/Button'
import { FormWrapper } from '../UI/Form/FormWrapper'
import { Input } from '../UI/Input/Input'
import classes from '../UI/Button/Button.module.css'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../Context/dataContext'

export const Step2 = () => {
   const { state} = useContext(dataContext)
   return (
      <FormWrapper>

         <div >Step {state.currentPage}</div>
         <Input type='email' hold="Email"></Input>
         <label htmlFor=" "></label>
         <div className={classes.checkBox}>
            <input className={classes.checkBox_item} id="checkbox_id" type="checkbox"></input>
            <label for="checkbox_id">Do you have a phobe ?</label>
         </div>
         <Button />
      </FormWrapper>
   )
}