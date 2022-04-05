import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Badge, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import DeliveryIcon from '../../icons/fast-delivery.png'
import MiniCart from './MiniCart';
import Logo from '../../icons/Logo.png'

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
    IconContainer: {
        width: "2rem",
        height: "2rem",
        display:"flex",

    },
    Icon: {
        width: "100%",
        margin:"0.1rem",
        
    },
    badge:{
        '&.css-106c1u2-MuiBadge-badge':{
            backgroundColor:"#ff9200"
        }
    }
    
})

const Header = (props) => {
    const classes = useStyles()
    const [counter, setCounter] = useState(4)
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
    if(counter==true){
        setInvisible(true)
        
    }
    else{
        setInvisible(false)
    }
    
}, [counter]);
    return (
        <div>
            <AppBar className={classes.appBar} style={{position:"absolute"}}>
                <Toolbar >
                    <Typography variant="h6" component="div">
                    <div className={classes.IconContainer}><div>OBSD</div> <img className={classes.Icon}src={Logo} alt=''/></div> 
                    </Typography>
                    <div className={classes.navMenu}>
                        <Typography className={classes.menuItems} variant="h5" component="div">
                            Menu
                        </Typography>
                        <Typography className={classes.menuItems} variant="h6" component="div">
                            Most popular
                        </Typography>
                        <Typography className={classes.menuItems} variant="h6" component="div">
                            <div className={classes.IconContainer} onClick={toggleDrawer('right', true)} >
                                <Badge badgeContent={counter} color="primary" style={{color:"#ff9200"}} invisible={invisible}>
                                    <img className={classes.Icon} src={DeliveryIcon} alt='' />
                                </Badge>
                            </div>

                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Button>right</Button>
          <MiniCart state={state} toggleDrawer={toggleDrawer}/>
        </div>
    )
}

export default Header