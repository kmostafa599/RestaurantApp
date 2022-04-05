import React, { useState } from 'react'
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Products from './Products';
import { makeStyles } from '@material-ui/core';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: black;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 5rem;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    border-radius: 1px;
    outline: 1px solid #CD2F17;
    &:hover {
      background-color: #CD2F17;
    }

    

    &.${tabUnstyledClasses.selected} {
      background-color: #CD2F17;
      color: #ffff;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: #fffff;
    border-radius: 1px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;
  const useStyles = makeStyles({
    menu:{
        display:"flex",
        alignItems:"center",
    },
})
const Menu = ({data}) => {
  const [counter,setCounter] = useState()

    const classes = useStyles()
    console.log(data)
    return (
        //sx={{ display: { xl: 'none', xs: 'block' } }}
        <div className={classes.menu}>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabsList>
                <TabPanel value={0}><Products data={data}counter={counter} setCounter={setCounter}/></TabPanel>
                <TabPanel value={1}><Products/></TabPanel>
                <TabPanel value={2}><Products/></TabPanel>
            </TabsUnstyled>
        </div>
    )
}

export default Menu