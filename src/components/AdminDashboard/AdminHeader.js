import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Badge, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
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
const AdminHeader = () => {
    const classes = useStyles()
  return (
    <div>
        <AppBar className={classes.appBar} style={{position:"absolute"}}>
                <Toolbar >
                    <Typography variant="h6" component="div">
                    <div className={classes.IconContainer}><div>OBSD</div> <img className={classes.Icon}src={Logo} alt=''/></div> 
                    </Typography>
                   
                </Toolbar>
            </AppBar>
    </div>
  )
}

export default AdminHeader