import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import ItemCard from './ItemCard'



const useStyles = makeStyles({
    container:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center"

    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin:"2rem",
        width:"100%",
        top:"20%",
    }
})

const Cart = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            

  <div className={classes.form}>
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </div>
 
      <Divider variant='vertical'/>
      <div style={{ height: "70%",marginLeft:"auto",marginTop:"10rem", marginBottom:"10rem",marginRight:"2rem"}}>
      <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <Divider style={{ margin: "0.5rem" }} />

                <Typography variant="subtitle" color="initial" style={{ marginLeft: "1rem", marginBottom: "1rem" }}>Subtotal:LE700</Typography>
        <Button variant='contained'>Order now</Button>
      </div>


        </div>
    )
}

export default Cart