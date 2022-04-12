import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Products from './Products';
import { makeStyles } from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from '@material-ui/core'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/actions';

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
  const useStyles = makeStyles(theme=>({
    menu:{
        display:"flex",
        alignItems:"center",
    },
    accordion: {
      // margin:"5px",

      border: "1px solid",
      borderColor: props => props ? 'rgb(230 3 75)' : 'white',
      borderRadius: "10px",
      marginBottom: theme.spacing(2)

  },
  accordionSummary: {
      marginBottom: props => props ? "5px" : "0px",
      border: "2px solid black"
  },
}))
const   Menu = ({data}) => {
  const categories = useSelector(state=>state.categories)
  const dispatch = useDispatch()
  const [counter,setCounter] = useState()

    const [open, setOpen] = useState(false);
    const classes = useStyles(open)
    
    console.log(data)
    console.log(categories)

    useEffect(()=>{
      dispatch(getCategories())
    },[])
    return (
        //sx={{ display: { xl: 'none', xs: 'block' } }}
        <div>
          {/* {categories.map(category=>(
 <div className={classes.accordion} sx={{  }}>
 <Accordion TransitionProps={{ timeout: 750 }} elevation={0} className="m-2" sx={{ display: { xs: "block", xl: "none" }, border: "none", borderRadius: 10, margin: "5px", }}>
     <AccordionSummary
         onClick={() => setOpen(!open)}
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
         sx={{ border: "none", }}
         className="shadow"
         elevation={3}
     >
         <Typography>{category.name}</Typography>
     </AccordionSummary>


     <AccordionDetails >
         <Products data={data}counter={counter} setCounter={setCounter}/>


     </AccordionDetails>

 </Accordion>
 </div>
          ))} */}
         
            <div className={classes.menu}>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    {/* {data.categories} */}
                </TabsList>
                
                <TabPanel value={0}><Products data={data}counter={counter} setCounter={setCounter}/></TabPanel>
                <TabPanel value={1}><Products/></TabPanel>
                <TabPanel value={2}><Products/></TabPanel>
            </TabsUnstyled>
        </div>
        </div>
        
    )
}

export default Menu