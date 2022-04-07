import { Divider, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import ItemCard from '../Homepage/ItemCard'
import { makeStyles, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { addOrder } from '../../store/actions'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"

    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "2rem",
        width: "100%",
        marginTop: "15rem",
    },
    button: {
        margin: "1rem",
    }
})
const Test = () => {
    const data = useSelector(state => state)
    const classes = useStyles()
    const dispatch = useDispatch()
    const products = data.products.filter(item => item.count > 0 ? item.id: null)
       
    console.log(products)
        
    const formik = useFormik({
        initialValues:{
            name:'',
            mobile:'',
            address:'',
            city:'',
            products:[],
        },
        onSubmit:values =>{
            dispatch(addOrder(values))
        }
        
    })

    return (
        <div>
            <Grid container >
                <Grid item xs={12} md={6} xl={6}        
                 sx={{ display: { xl: 'block', xs: 'block' } }}
>
<form>

                    <div className={classes.form}>
                        <TextField

                            id="standard-password-input"
                            label="Name"
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <TextField
                            id="standard-password-input"
                            label="Mobile"
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Address"
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="City"
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                    <Button className={classes.button} variant="contained" style={{
                        color: "white",
                        backgroundColor: "#CD2F17"
                    }}>
                        Order Now
                    </Button>
                    <Button className={classes.button} variant="outlined" style={{

                    }}>
                        cancel
                    </Button>
                    </form>

                </Grid>

                <Grid item xs={0} md={6} xl={6}
                                 sx={{ display: { xl: 'block', xs: 'none' } }}
                                 >

                    <div style={{ height: "70%", margin:"8rem",marginTop: "10rem",  marginRight: "2rem" }}>
                    <Divider orientation="vertical" flexItem style={{ margin: "2rem",}} />

                        {data.products.map(item => item.count > 0 ? (
                            <div>
                                <ItemCard  item={item} />
                            </div>

                            
                         ) : <div></div>)}


                        <Typography variant="subtitle" color="initial" style={{ marginLeft: "1rem", marginBottom: "1rem" }}>Subtotal:LE700</Typography>

                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Test