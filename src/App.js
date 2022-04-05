import { Stack } from '@mui/material';
import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';




function App() {
  const [counter,setCounter] = useState()
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/checkout/' element={<Checkout/>} />
        <Route path='/admin/Dashboard' element={<Dashboard/>} />


      </Routes>
      {/* <Stack spacing={3}> */}
        {/* <Header /> */}
        {/* <AdminHeader style={{}}/> */}
         {/* <Banner/> */}
        {/* <Menu counter={counter} setCounter={setCounter}/>  */}
        {/* <Cart/> */}
        {/* <Test/> */}
        {/* <Success/> */}
        {/* <Dashboard/> */}
      {/* </Stack> */}

      <div>
        
          
    </div>
    </div>

  );
}

export default App;
