import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import {getInitialData} from './store/actions/index'



function App() {
  // const products = [
  //   {
  //       name:"seafood",
  //       id:1,
  //       price:"100$",
  //       contents:["Shrimp", "Squid", "Pineapple"],
  //       count:0,
  //   }
  // ]
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  console.log(data)
  useEffect(()=>{
    dispatch(getInitialData())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
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
