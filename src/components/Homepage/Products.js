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
    const [open, setOpen] = useState(false);
    const classes = useStyles(open)
    const data = useSelector(state=>state)
    return (
        <div className={classes.accordion} sx={{ display: { xs: "block", xl: "none" } }}>
            {/* <Accordion TransitionProps={{ timeout: 750 }} elevation={0} className="m-2" sx={{ border: "none", borderRadius: 10, margin: "5px", }}>
                <AccordionSummary
                    onClick={() => setOpen(!open)}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ border: "none", }}
                    className="shadow"
                    elevation={3}
                >
                    <Typography>Seafood</Typography>
                </AccordionSummary>


                <AccordionDetails > */}
                    {/* <Typography  >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography> */}
                    {/* <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                        <Grid item >

                        </Grid>

                        <Grid style={{ width: "100%" }} item > */}
                            {/* {product.length? product.map((data,index) => (
                <ItemCard itemName={data.name} itemPrice={data.price} itemImage={data.photo}/>)
                  ):<h1>No products available</h1>} */}

                            {/* <ItemCard />
                        </Grid>

                    </Grid>


                </AccordionDetails>

            </Accordion> */}

            <Grid container spacing={2} sx={{ display: { xl: 'none', xs: 'block' } }}>
                {/* <Grow in={true}><Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter} /></Grid></Grow> */}
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                {/* <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                > */}
                    {data?.Data?.map((item,key) => (
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