
import React, { useContext, useEffect } from 'react'
import { Button } from '../UI/Button/Button'
import { FormWrapper } from '../UI/Form/FormWrapper'
import { Input } from '../UI/Input/Input'
import classes from '../UI/Button/Button.module.css'
import classess from '../UI/Input/Input.module.css'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../Context/dataContext'
import { Button2 } from '../UI/Button/Button2'

export const Step2 = () => {
   const { state,changeEmail,changeHasPhone,changePhoneNumber } = useContext(dataContext)
   return (
      <FormWrapper>
         <div >Step {state.currentPage}</div>
         <div className={classes.inputWrapper}>
            <input className={state.wrongEmail ? classess.wrong_item : classess.input_item} value={state.email} onInput={(e) =>changeEmail(e.target.value)}  type="email" placeholder='Email' />
         </div>
         <label htmlFor=" "></label>
         <div className={classes.checkBox}>
            <input onChange={() => changeHasPhone(!state.hasPhone)} checked={state.hasPhone} className={classes.checkBox_item} id="checkbox_id" type="checkbox"></input>
            <label for="checkbox_id">Do you have a phobe ?</label>
         </div>
         {state.hasPhone ? <div className={classes.inputWrapper}>
            <input className={state.wrongPhone ? classess.wrong_item : classess.input_item} value={state.phoneNumber} onInput={(e) =>changePhoneNumber(e.target.value)}  type="tel" placeholder='Tel' />
         </div> :<div></div>}
         <Button2 />
      </FormWrapper>
   )
}