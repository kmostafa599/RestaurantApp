import { Grid } from '@material-ui/core'
import { Grow } from '@mui/material'
import React from 'react'
import ItemCard from './ItemCard'
let timeout = 2000
const Products = ({counter,setCounter}) => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grow in={true}><Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid></Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: timeout+100 } : {})}
                >
                    <Grid item xs={4}><ItemCard setCounter={setCounter} counter={counter}/></Grid>
                </Grow>
                 
                
            </Grid>
        </div>
    )
}

export default Products