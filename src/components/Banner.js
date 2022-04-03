import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Button } from '@mui/material'



const useStyles = makeStyles({
    banner:{
        display:"flex",
        justifyContent:"center",
        width:"match-parent",
        height:"25rem",
        backgroundColor:"#303030",
    },
    button:{
        height:"2rem",
        margin:"5rem",
        position:"absolute",
        left:"5rem",

    },
    background:{
        backgroundColor:"white",
        width:"100%",
        margin:"5rem",
        height:"15rem",
        position:"relative"
    },
    buttons:{
        position:"absolute",
        left:"5%",
        top:"50%",
    }
})

const Banner = () => {
    const classes = useStyles()
  return (
    <div className={classes.banner}>
        <div className={classes.background}>
        <Button className={classes.buttons}>Buy one get 2</Button>
        </div>
        
        </div>
  )
}

export default Banner