import { Button, useTheme } from '@mui/material';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import seafood from '../../icons/Seafood.png'
import { useDispatch } from 'react-redux';
import { deleteProduct, changeCount } from '../../store/actions';

const ItemCard = ({ counter, setCounter, item }) => {
    console.log(item.name)
    let [count, setCount] = useState(item.count)
    const dispatch = useDispatch()
    const handleIncrement =()=>{
        //setCount(count++)
        dispatch(changeCount(item.id,+1))
    }
    const handleDecrement =()=>{
        
        dispatch(changeCount(item.id,-1))
    }
    const handleDelete =() =>{
        dispatch(deleteProduct(item.id))
    }

    return (
        <div>
            <Card sx={{ display: 'flex', boxShadow: "none" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={seafood}
                    alt="Live from space album cover"
                    style={{ width: "5rem", height: "5rem" }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {item?.name}
                        </Typography>
                        <Typography component="div" variant="h7">
                            {item?.contents}
                        </Typography>
                        

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous" onClick={handleDecrement} disabled={item.count<=1}>
                            -
                        </IconButton>
                        <IconButton aria-label="next">
{item.count}
                        </IconButton>
                        <IconButton aria-label="next" onClick={handleIncrement}>
+
                        </IconButton>
                        {item.count>=1?(<IconButton aria-label="play/pause" onClick={handleDelete}>
                            <DeleteIcon/>         
                        </IconButton>):<div></div>}
                        
                    </Box>
                </Box>

            </Card>
        </div>
    )
}

export default ItemCard