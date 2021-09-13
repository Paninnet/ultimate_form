
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { spacing } from '@material-ui/system'
import React from 'react'

const useStyles = makeStyles((theme) => ({
   root: {
      fontFamily:"Permanent Marker",
      // margin: theme.spacing(1, 'auto'),
      marginBottom:'30px',
      textAlign: 'center',
      fontSize: '40px',
      color: "deeppink",
      textShadow: '1px 1px darkmagenta'
   }
}))

export const Header = () => {

   const styles = useStyles()
   return (

         <Typography className={styles.root} component='h1' variant='h5'>The Ultimate React Form</Typography>

   )
   // return(
   //    <h1>The Ultimate React Form</h1>
   // )
}