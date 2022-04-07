import React from 'react'
import AdminHeader from './AdminHeader'
import Dashboard from './Dashboard'
import AppBar from '@mui/material/AppBar';
import { Badge, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import Logo from '../../icons/Logo.png'

const useStyles = makeStyles(theme =>({
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
        width:"calc(100% - 250px)"
    }
,
    //     '& .MuiToolbar-root': {
    //         backgroundColor: "#303030",
    //     },
    //     '&.css-11b3ww9-MuiPaper-root-MuiAppBar-root':{
    //         boxShadow: "none",
    //         backgroundColor: "#303030",

    //     },  
    // },
    toolbar: theme.mixins.toolbar,
    // IconContainer: {
    //     width: "2rem",
    //     height: "2rem",
    //     display:"flex",

    // },
    // Icon: {
    //     width: "100%",
    //     margin:"0.1rem",
        
    // },
    // badge:{
    //     '&.css-106c1u2-MuiBadge-badge':{
    //         backgroundColor:"#ff9200"
    //     }
    // }
    
}));
const AdminDashboard = () => {
  const classes = useStyles()

  return (
    <div>
      <AdminHeader/>
        <Dashboard className={classes.toolbar}/>
    </div>
  )
}

export default AdminDashboard