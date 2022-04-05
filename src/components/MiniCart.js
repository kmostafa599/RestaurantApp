import { makeStyles } from '@material-ui/core';
import { Button, Divider, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'
import ItemCard from './ItemCard';



const useStyles = makeStyles({
    drawer: {
        '& .MuiDrawer-paper': {
            width: "20rem",
            height: "25rem",
            top: "15%",
            // margin:"2rem"
        },
        '& .MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
            '& ::-webkit-scrollbar': {
                width: "20px",
            },

            /* Track */
            '&::-webkit-scrollbar-track': {
                boxShadow: "inset 0 0 5px grey",
                borderRadius: "10px",
            },

            /* Handle */
            '&::-webkit-scrollbar-thumb': {
                background: "red",
                borderRadius: "10px",
            },

            /* Handle on hover */
            '&::-webkit-scrollbar-thumb:hover': {
                background: "#b30000",
            },
        }
    },
})

const MiniCart = ({ state,toggleDrawer }) => {
    const classes = useStyles()

   

    return (
        <div >
            <SwipeableDrawer
                className={classes.drawer}
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                <div style={{margin:"3rem"}}>
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />
                <ItemCard style={{ width: "0.2rem" }} />

                <Divider style={{ margin: "0.5rem" }} />
                <Typography variant="subtitle" color="initial" style={{ marginLeft: "1rem", marginBottom: "1rem" }}>Subtotal:LE700</Typography>
                <Button variant='contained' style={{ backgroundColor: "#ff9200", color: "white", margin: "1rem" }}>checkout</Button>
            
                </div>
                </SwipeableDrawer>
        </div>
    )
}

export default MiniCart