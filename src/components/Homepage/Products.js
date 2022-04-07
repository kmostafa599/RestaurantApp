import { Grid, makeStyles } from '@material-ui/core'
import { Grow } from '@mui/material'
import React, { useState } from 'react'
import ItemCard from './ItemCard'
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from '@material-ui/core'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux'

let timeout = 2000
const useStyles = makeStyles(theme => ({
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
const Products = ({ counter, setCounter}) => {
    
    const data = useSelector(state=>state)
    return (
        <div>
        
            <Grid container spacing={2} sx={{ display: { xl: 'none', xs: 'block' } }}>
                {/* <Grow in={true}><Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter} /></Grid></Grow> */}
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                {/* <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                > */}
                    {data?.products?.map((item,key) => (
                        <Grid key={key} item xs={4}>
                            {console.log(item)}
                            <ItemCard setCounter={setCounter} counter={counter} item={item}/>
                        </Grid>
                    ))}

                {/* </Grow> */}



            </Grid>
        </div>
    )
}

export default Products