import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles({
    header:{
        marginLeft:"10rem",
        marginRight:"10rem"
    },
    navMenu: {
        marginLeft: "auto",
        display: "flex",
        
    },
    menuItems:{
        padding:"1rem"
    },
    appBar:{
        '& .MuiToolbar-root':{
            backgroundColor:"#303030",
            boxShadow: "none"
        },
        boxShadow: "none"

    },
})

const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar >
                    <Typography  variant="h6" component="div">
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
                            Cart logo
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header