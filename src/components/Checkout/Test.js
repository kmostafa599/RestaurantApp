import { Divider, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import ItemCard from '../Homepage/ItemCard'
import { makeStyles, Button } from '@material-ui/core'

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
    const classes = useStyles()

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs >
                    <div className={classes.form}>
                        <TextField

                            id="standard-password-input"
                            label="Name"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <TextField
                            id="standard-password-input"
                            label="Mobile"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Address"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="City"
                            type="password"
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
                </Grid>
                <Divider orientation="vertical" flexItem style={{ margin: "2rem", marginTop: "10rem", marginBottom: "10rem", marginLeft: "15rem" }} />

                <Grid item xs >
                    <div style={{ height: "70%", marginLeft: "auto", marginTop: "10rem", marginBottom: "10rem", marginRight: "2rem" }}>
                        <ItemCard style={{ width: "0.2rem" }} />
                        <ItemCard style={{ width: "0.2rem" }} />
                        <ItemCard style={{ width: "0.2rem" }} />
                        <ItemCard style={{ width: "0.2rem" }} />
                        <ItemCard style={{ width: "0.2rem" }} />
                        <Divider style={{ margin: "0.5rem" }} />

                        <Typography variant="subtitle" color="initial" style={{ marginLeft: "1rem", marginBottom: "1rem" }}>Subtotal:LE700</Typography>

                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Test