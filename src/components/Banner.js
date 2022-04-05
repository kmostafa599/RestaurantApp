import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, Grid, Typography } from '@mui/material'
import pizza from '../icons/pizza.png'

//sx={{ display: { xl: 'none', xs: 'block' } }}
const useStyles = makeStyles({
    banner: {
        display: "flex",
        justifyContent: "center",
        width: "match-parent",
        height: "35rem",
        backgroundColor: "#303030",
    },
    button: {
        height: "2rem",
        margin: "5rem",
        position: "absolute",
        left: "5rem",

    },
    background: {
        // backgroundColor: "white",
        width: "100%",
        margin: "5rem",
        height: "20rem",
        position: "relative"
    },
    text: {
        color: "white",
        textAlign: "left",
        left: "2rem",
    },
    bannerPhoto: {
        position: "absolute",

        width: "20rem",
        marginRight: '20px'

    },
    buttons: {
        position: "absolute",
        left: "0%",
        top: "50%",
        // font: "22px Arial",
        display: "inline-block",
        padding: "1em 2em",
        textAlign: "center",
        height: "2rem",
        color: " white",
        background: "red", /* default color */
        border: "0.5px dotted white",
        /* "to left" / "to right" - affects initial color */
        background: " linear-gradient(to right, #CD2F17 55%, #303030 50%) right",
        backgroundSize: "200%",
        transition: ".5s ease-out",
        '&:hover': {
            backgroundPosition: "left",

        },

    },
})

const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.banner}>
            <div className={classes.background}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant='h4' className={classes.text}>ENJOY OUR DELICIOUS <span style={{ color: "#ff9200" }}>FOOD</span></Typography> <div >
                            <div >
                                <button className={classes.buttons} >Buy one get 2</button>
                            </div>
                            <div >
                                <button className={classes.buttons} style={{ width: "", top: "35%" }}>order Online Now</button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.bannerPhoto} >
                            <img style={{ width: "100%", height: "100%" }} src={pizza} alt="" />
                        </div>
                    </Grid>
                </Grid>




            </div>

        </div>
    )
}

export default Banner