import { makeStyles } from '@material-ui/core';
import { Button, Divider, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';



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

   const items = useSelector(item =>item)
const cartItems = items.products.filter(item=> item.count >= 1
    )
    return (
        <div >
            <SwipeableDrawer
                className={classes.drawer}
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}

            >{cartItems?(<div style={{margin:"3rem"}}>
            {cartItems?.map(item=>(
                <ItemCard item={item}style={{ width: "0.2rem" }} />
            ))}
        

        <Divider style={{ margin: "0.5rem" }} />
        <Typography variant="subtitle" color="initial" style={{ marginLeft: "1rem", marginBottom: "1rem" }}>Subtotal:LE700</Typography>
        <Link to='/checkout'>
        <Button variant='contained' style={{ backgroundColor: "#ff9200", color: "white", margin: "1rem" }}>checkout</Button>

        </Link>
    
        </div>):<div>Cart is Empty</div>}
                
                </SwipeableDrawer>
        </div>
    )
}

export default MiniCart