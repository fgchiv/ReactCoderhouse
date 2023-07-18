import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({data}) => {
  return (
    <Card sx={{ maxWidth: 240}}>
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain' }}
        image={data.image}
        title="a"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          $ {data.price}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default ProductCard
