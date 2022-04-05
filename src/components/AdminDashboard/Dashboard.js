import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

var colors = ['red', 'green', 'orange']
const useStyles = makeStyles({
    buttons: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
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
    '&MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1h9z7r5-MuiButtonBase-root-MuiTab-root':{
        color:"red"
    }
})
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
  
const Dashboard = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div style={{ display: 'flex' }}>

<Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One"  />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
        <Tab label="Item Four"  />
        <Tab label="Item Five"  />
        <Tab label="Item Six"  />
        <Tab label="Item Seven"  />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
    </Box>
            {/* <div style={{ width: "35vw", height: "100vh", backgroundColor: "#303030" }}>
                <div>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#303030' }}>
                        <ListItem alignItems="flex-start">
                            
                            <ListItemText
                                primary={<div >
                                    <button className={classes.buttons} >Pending orders</button>
                                </div>}
                                
                            />
                        </ListItem>
                        <Divider variant="inset" component="div" />
                        <ListItem alignItems="flex-start">
                            
                            <ListItemText
                                primary={<div >
                                    <button className={classes.buttons} >completed orders</button>
                                </div>}
                                
                            />
                        </ListItem>
                    </List></div> */}

                {/* <div >
                    <button className={classes.buttons} >Pending orders</button>
                </div>
                <div >
                    <button className={classes.buttons} style={{ width: "", top: "35%" }}>completed orders</button>
                </div>
            </div>
            <div style={{ width: "75vw", margin: "4rem" }}> */}
                {/* <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}>
                            <div style={{ backgroundColor: "#2fcd17" }}><div style={{ marginLeft: "6rem" }}>3:30</div></div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid><Grid item xs={4}>
                        <div style={{ width: "10rem", height: "10rem", border: "1px solid" }}></div>
                    </Grid>
                </Grid> */}



            {/* </div> */}

        </div>
    )
}

export default Dashboard