import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../../Context/dataContext'
import classes from './Button.module.css'

export const Button2 = () => {
      const { state, showPrevPage, showNextPage } = useContext(dataContext)


debugger
      return (
         
            <div className={classes.btn_wrapper}>
            
                  <NavLink to="/ultimate_form/">
                        <button onClick={() => showPrevPage(state.currentPage)}
                              disabled={state.currentPage === 1 ? true : false}
                              >PREV</button></NavLink>
                  <NavLink to="/ultimate_form/step3/">
                        <button onClick={() => showNextPage(+state.currentPage)}
                              disabled={((state.wrongEmail === true && state.hasPhone === false ) || (state.wrongPhone === true  && state.hasPhone === true && state.wrongEmail === false))   ? true : false}
                        >NEXT</button></NavLink>

            </div>


      )
}
