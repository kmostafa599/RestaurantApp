import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Badge, Button, Divider, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DeliveryIcon from '../icons/fast-delivery.png'
import ItemCard from './ItemCard';

const useStyles = makeStyles({
    header: {
        marginLeft: "10rem",
        marginRight: "10rem"
    },
    navMenu: {
        marginLeft: "auto",
        display: "flex",

    },
    menuItems: {
        padding: "1rem"
    },
    appBar: {
        '& .MuiToolbar-root': {
            backgroundColor: "#303030",
        },
        '&.css-11b3ww9-MuiPaper-root-MuiAppBar-root':{
            boxShadow: "none",
            backgroundColor: "#303030",

        },  
        

    },
    deliveryIconContainer: {
        width: "2rem",
        height: "2rem",

    },
    deliveryIcon: {
        width: "100%",
    },
    drawer:{
        '& .MuiDrawer-paper':{
          width:"20rem",
          height:"25rem",
          top:"15%",
        },
        '& .MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1160xiw-MuiPaper-root-MuiDrawer-paper':{
            '& ::-webkit-scrollbar': {
                width: "20px",
              },
              
              /* Track */
              '&::-webkit-scrollbar-track': {
                boxShadow: "inset 0 0 5px grey", 
                borderRadius: "10px",
              },
               
              /* Handle */
              '&::-webkit-scrollbar-thumb' :{
                background: "red", 
                borderRadius: "10px",
              },
              
              /* Handle on hover */
              '&::-webkit-scrollbar-thumb:hover' :{
                background: "#b30000", 
              },
        }
      },
})

const Header = (props) => {
    const classes = useStyles()
    const [counter, setCounter] = useState(1)
    const [invisible, setInvisible] = useState(false);
    const [state, setState] = React.useState({
    
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, ['right']: open });
      };
useEffect(() => {
    if(counter){
        setInvisible(true)
        
    }
    else{
        setInvisible(false)
    }
    
}, [counter]);
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar >
                    <Typography variant="h6" component="div">
                        Logo
                    </Typography>
                    <div className={classes.navMenu}>
                        <Typography className={classes.menuItems} variant="h5" component="div">
                            Menu
                        </Typography>
                        <Typography className={classes.menuItems} variant="h6" component="div">
                            Most popular
                        </Typography>
                        <Typography className={classes.menuItems} variant="h6" component="div">
                            <div className={classes.deliveryIconContainer} onClick={toggleDrawer('right', true)} >
                                <Badge badgeContent={counter} color="primary" invisible={invisible}>
                                    <img className={classes.deliveryIcon} src={DeliveryIcon} alt='' />
                                </Badge>
                            </div>

                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Button>right</Button>
          <SwipeableDrawer
          className={classes.drawer}
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
                <ItemCard style={{width:"0.2rem"}}/>
                <ItemCard style={{width:"0.2rem"}}/><ItemCard style={{width:"0.2rem"}}/><ItemCard style={{width:"0.2rem"}}/><ItemCard style={{width:"0.2rem"}}/>
              
        <Divider style={{margin:"0.5rem"}}/>
        <Typography variant="subtitle" color="initial" style={{marginLeft:"1rem",marginBottom:"1rem"}}>Subtotal:LE700</Typography>
        <Button variant='contained' style={{backgroundColor:"#ff9200",color:"white",margin:"1rem"}}>checkout</Button>
          </SwipeableDrawer>
        </div>
    )
}

export default Header