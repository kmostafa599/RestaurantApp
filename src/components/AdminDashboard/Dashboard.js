import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'

var colors = ['red', 'green', 'orange']
const useStyles = makeStyles({
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
const Dashboard = () => {
    const classes = useStyles()
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: "25vw", height: "100vh", backgroundColor: "#303030" }}>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div >
                    <button className={classes.buttons} >Pending orders</button>
                </div>
                <div >
                    <button className={classes.buttons} style={{ width: "", top: "35%" }}>completed orders</button>
                </div>
            </div>
            <div style={{ width: "75vw", margin: "4rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}>
                            <div  style={{ backgroundColor:"#2fcd17"}}><div style={{ marginLeft:"6rem"}}>3:30</div></div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid><Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                </Grid>



            </div>

        </div>
    )
}

export default Dashboard