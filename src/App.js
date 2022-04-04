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



function App() {
  const [counter,setCounter] = useState()
  
  const classes = useStyles() 
  
  
  return (
    <div className="App">
      <Stack spacing={3}>
        <Header />
        <Banner/>
        <Menu counter={counter} setCounter={setCounter}/>
      </Stack>

      <div>
        
          
    </div>
    </div>

  );
}

export default App;
