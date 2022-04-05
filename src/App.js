import { Stack } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Menu from './components/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@material-ui/core'
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';
import Test from './components/Test';
import Success from './components/Success';
import Dashboard from './components/Dashboard';
import AdminHeader from './components/AdminHeader';



function App() {
  const [counter,setCounter] = useState()
  
  
  
  return (
    <div className="App">
      <Stack spacing={3}>
        <Header />
        {/* <AdminHeader style={{}}/> */}
         <Banner/>
        <Menu counter={counter} setCounter={setCounter}/> 
        {/* <Cart/> */}
        {/* <Test/> */}
        {/* <Success/> */}
        <Dashboard/>
      </Stack>

      <div>
        
          
    </div>
    </div>

  );
}

export default App;
