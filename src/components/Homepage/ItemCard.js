import { Button, useTheme } from '@mui/material';
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import seafood from '../../icons/Seafood.png'

const ItemCard = ({ counter, setCounter, item }) => {
    const theme = useTheme();
    console.log({item})

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
                            {item.name}
                        </Typography>
                        {item.contents(content => (
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {content}
                            </Typography>
                        ))}

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? '+' : '-'}
                            { }
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            { }          </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? '-' : '+'}
                        </IconButton>
                    </Box>
                </Box>

            </Card>
        </div>
    )
}

export default ItemCard