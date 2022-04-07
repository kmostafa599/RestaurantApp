import { Avatar, Badge, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tab, tabClasses, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

var colors = ['red', 'green', 'orange']
// const Tab = styled(TabUnstyled)`
// // font-family: IBM Plex Sans, sans-serif;
// color:  white;
//     cursor: pointer;
//     background:  linear-gradient(to right, #CD2F17 55%, #303030 50%) right;
//     background-size: 200%;
//     transition: .5s ease-out;
//     padding: 12px 16px;
//     border-radius: 1px;
//     display: inline-block;
//     border: 0.5px dotted white;
//     padding: 1em 2em;
//     text-align: center;
//     height: ;


// '&:hover': {
//     background-position: left;
// }



//     &.${tabUnstyledClasses.selected} {
//       background-color: #CD2F17;
//       color: #ffff;
//     }

//     &.${buttonUnstyledClasses.disabled} {
//       opacity: 0.5;
//       cursor: not-allowed;

//     }
//   `;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
// const TabsList = styled(TabsListUnstyled)`
//     min-width: 320px;
//     background-color: #fffff;
//     border-radius: 1px;
//     margin-bottom: 16px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     align-content: space-between;
//   `;

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // font: "22px Arial",
    display: "inline-block",
    padding: "1em 2em",
    textAlign: "center",
    height: "",
    color: " white",
    // background: "red", /* default color */
    border: "0.5px dotted white",
    /* "to left" / "to right" - affects initial color */
    background: " linear-gradient(to right, #CD2F17 55%, #303030 50%) right",
    backgroundSize: "200%",
    
    transition: ".5s ease-out",
    '&:hover': {
      backgroundPosition: "left",

    },
    

  },
  selectedButton: {
    '&.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
      color: "white",
      backgroundPosition:"left"
    },
    '&.MuiTabs-indicator-css-10d9dml-MuiTabs-indicator':{
        display:"none",
    },
      
    
  },
  panel:{
    '&.css-19kzrtu':{
      padding:"0px"
    }
  }

}))


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dashboard = ({orders}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);
  const [done, setDone] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: 'flex' }} >
      <Box
        className={classes.panel} sx={{ p:'0px',flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
        <div style={{marginTop:"11vh",width:"25vw",height:"100vh",backgroundColor:"#303030"}}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          TabIndicatorProps={{style:{
            display:"none"
          }}}
        >
          <Tab label={ "Pending Orders" &&<Badge sx={{bgColor:"blue",borderRadius:"10px"}}badgeContent={1}>Pending orders</Badge>  } classes={{
            root: classes.buttons,
            selected: classes.selectedButton
          }} 
          style={{marginBottom:"1rem",}}
          />
          <Tab label={ "Completed orders" &&
          <Badge sx={{bgColor:"blue",borderRadius:"10px"}}badgeContent={0}>Completed orders</Badge>  } classes={{
            root: classes.buttons,
            selected: classes.selectedButton
          }}/>
        
        </Tabs>
        </div>
        <div >

        
        <TabPanel value={value} index={0} style={{padding:"0"}} className={classes.panel}>
          <Grid container spacing={2} style={{width:"75vw",marginTop:"2rem",height:"100vh",}}>
            {orders.map(order=>(
              <Grid item xs={4}>
                {order.address}
              </Grid>
            ))}
            
          </Grid> 

        </TabPanel>
        <TabPanel value={value} index={1} >
        <Grid container spacing={2} style={{width:"75vw",height:"100vh"}}>
            
            
            <Grid item xs={4}>
            <div style={{border:"1px solid",width:"100%",height:"100%"}}>

            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{border:"1px solid",width:"100%",height:"100%"}}>

            </div>
            </Grid>
            
            <Grid item xs={4}>
            <div style={{border:"1px solid",width:"100%",height:"100%"}}>

            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{border:"1px solid",width:"100%",height:"100%"}}>

            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{border:"1px solid",width:"100%",height:"100%"}}>

            </div>
            
            </Grid>
            <Grid item xs={4}>
            <div style={{align:"left",border:"1px solid",width:"100%",height:"max-content"}}>
              <div style={{width:"100%",height:"0.8rem",backgroundColor:"#303030"}}>
                <div style={{marginLeft:"auto"}} >3:30</div>
              </div>
              <div >
                <div onClick={()=>setDone(!done)} style={{textDecoration:done?'line-through':'none'}}><input type='checkbox'/> hello</div>
                <div onClick={()=>setDone(!done)} style={{textDecoration:done?'line-through':'none'}}><input type='checkbox'/> hello</div>
                <div onClick={()=>setDone(!done)} style={{textDecoration:done?'line-through':'none'}}><input type='checkbox'/> hello</div>

              </div>
            </div>
            </Grid>
          </Grid> 
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        </div>
      </Box>
      

    </div>
  )
}

export default Dashboard