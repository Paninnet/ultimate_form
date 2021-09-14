import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { dataContext } from '../../../Context/dataContext'
import classes from './Button.module.css'

export const Button3 = () => {
   const { state, showPrevPage, showNextPage } = useContext(dataContext)


   debugger
   return (

      <div className={classes.btn_wrapper}>

         <NavLink to="/ultimate_form/step2/">
            <button onClick={() => showPrevPage(state.currentPage)}
               disabled={state.currentPage === 1 ? true : false}
            >PREV</button></NavLink>
         <NavLink to="/#">
            <button onClick={() => showNextPage(+state.currentPage)}
               disabled={state.currentPage === state.totalPage}
            >NEXT</button></NavLink>
            

      </div>


   )
}
