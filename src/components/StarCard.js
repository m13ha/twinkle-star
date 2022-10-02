import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import cepheid from '../resources/images/Cepheid_animation_1.gif';
import binary from '../resources/images/Eclipsing-binary.gif';
import transit from '../resources/images/planetary-transit.gif';
import supernova from '../resources/images/supernova.gif';
import dwarf from '../resources/images/dwarf-nova.gif';

const ImgMediaCard = ({ props }) => {
  const { closeModal, typeIndex, type, variability, link, description } = props;

  const typeGif = () => {
    switch (typeIndex) {
      case 4:
        return transit;
        break;
      case 2:
        return cepheid;
        break;
      case 0:
        return dwarf;
        break;
      case 3:
        return supernova;
        break;
      case 1:
        return binary;
        break;
      default:
        break;
    }
  };

  return (
    <Card
      sx={{
        width: '80%',
        minWidth: '300px',
        maxWidth: '500px',
        fontSize: 16,
        background: 'linear-gradient(to top, #283E51, #0A2342)',
      }}
      color='dark'
    >
      <CardContent>
        <CardMedia
          component='img'
          alt='green iguana'
          height='250'
          image={typeGif()}
        />
        <Typography variant='h5' component='p' color='#eff'>
          {type}
        </Typography>
        <Typography variant='h6' color='#eff'>
          {variability}
        </Typography>
        <Typography variant='body2' color='#eff'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary' onClick={closeModal}>
          Close
        </Button>
        <Button size='small' color='primary' href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
