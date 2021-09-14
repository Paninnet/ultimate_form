import React, { useContext } from 'react'
import { dataContext } from '../../../Context/dataContext'
import classes from './Input.module.css'

export const Input = () => {

   const {state,changeFirstName, changeLastName } = useContext(dataContext)
   return (
      <div className={classes.inputWrapper}>
         <input className={state.wrongName ? classes.wrong_item :classes.input_item} value={state.firtsName} onInput={(e) => changeFirstName(e.target.value)} type="text" placeholder=' First Name'  />
         <input className={state.wrongLastName ? classes.wrong_item :classes.input_item} value={state.lastName} onChange={(e) => changeLastName(e.target.value)} type="text" placeholder='Last Name' />
      </div>

   )
}

