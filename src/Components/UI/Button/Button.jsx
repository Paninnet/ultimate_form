import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../../Context/dataContext'
import classes from './Button.module.css'

export const Button = () => {
      const { state, showPrevPage, showNextPage } = useContext(dataContext)

      return (
            <div className={classes.btn_wrapper}>
            
                  <NavLink to="/ultimate_form/">
                        <button onClick={() => showPrevPage(state.currentPage)}
                              disabled={state.currentPage === 1 ? true : false}
                              >PREV</button></NavLink>
                  <NavLink to="/ultimate_form/step2/">
                        <button onClick={() => showNextPage(+state.currentPage)}
                              disabled={state.wrongName ===true || state.wrongLastName ===true ? true : false}
                        >NEXT</button></NavLink>

            </div>


      )
}


