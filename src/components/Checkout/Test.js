import { Divider, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import ItemCard from '../Homepage/ItemCard'
import { makeStyles, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik, useFormik } from 'formik';
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
        marginTop: "10rem",
    },
    button: {
        margin: "1rem",
    }
})
const Test = () => {
    const data = useSelector(state => state)
    const classes = useStyles()
    const dispatch = useDispatch()
    const products = data.products.filter(item => item.count > 0 ? item.id : null)
    let ids =[]
    let qty = []
    const getIds = products.map(data=>ids.push(data.id))
    const getQty = products.map(data=>qty.push(data.count))
    console.log(ids)
    console.log(qty)

    // console.log(products)

    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            address: '',
            city: '',
            items: [{ids:ids,qty:qty}],
        },
        onSubmit: values => {
            console.log({ values })
            values.items = ids
            dispatch(addOrder(values))
        }

    })

    return (
        <div>
            <Grid container >
                <Grid item  sm={6} xl={6}
                   
                >

                    <form onSubmit={formik.handleSubmit}>
                        <div className={classes.form}>
                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.name}

                                id="name"
                                label="Name"
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                            />

                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.mobile}

                                id="mobile"
                                label="Mobile"
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.address}

                                id="address"
                                label="Address"
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.city}

                                id="city"
                                label="City"
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                            />
                        </div>
                        <Button className={classes.button} variant="contained" type='submit' style={{
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

                <Grid item sm={6} xl={6}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >

                    <div style={{ height: "70%", margin: "8rem", marginTop: "10rem", marginRight: "2rem" }}>

                        {data.products.map(item => item.count > 0 ? (
                            <div>
                                <ItemCard item={item} />
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