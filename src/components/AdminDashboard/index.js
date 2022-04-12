import React, { useEffect } from 'react'
import AdminHeader from './AdminHeader'
// import Dashboard from './Dashboard'
import AppBar from '@mui/material/AppBar';
import { Badge, Button, Stack, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import Logo from '../../icons/Logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions';
import PermanentDrawerLeft from './Test';
import Dashboard from './Dashboard';

const useStyles = makeStyles(theme => ({
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
    width: "calc(100% - 250px)"
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
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders)
  const classes = useStyles()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  console.log(orders)
  return (
    <div>
      <Stack spacing={5}>
        <Stack item>
          <AdminHeader />
          item 1
        </Stack>
        <Stack item>
          <Dashboard className={classes.toolbar} orders={orders} />
          {/* <PermanentDrawerLeft/> */}
        </Stack>
        <Stack item>
          
          {/* <Dashboard className={classes.toolbar} orders={orders} /> */}
          {/* <PermanentDrawerLeft/> */}
        </Stack>

      </Stack>
    </div>
  )
}

export default AdminDashboard