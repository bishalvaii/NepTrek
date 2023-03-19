import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  cost: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  days: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
}));

const trekkingLocations = [
    {
    name: 'Khumbu',
    image: 'images/khumbu.jpg',
    description: 'The Khumbu region, also known as the Everest region, is located in northeastern Nepal and is home to Mount Everest, the highest peak in the world. The trek to Everest Base Camp is one of the most popular trekking routes in the region.',
    cost: '$2,500',
    days: '12'
    },
    {
    name: 'Annapurna',
    image: 'images/annapurna.jpg',
    description: 'The Annapurna region is located in central Nepal and is home to Annapurna, the tenth highest peak in the world. The Annapurna Circuit trek is one of the most popular trekking routes in the region, offering diverse landscapes and cultural experiences.',
    cost: '$2,000',
    days: '14'
    },
    {
    name: 'Mustang',
    image: 'images/mustang.jpg',
    description: 'Mustang, also known as the Upper Mustang, is a remote and isolated region in Nepal located near the border of Tibet. The Mustang trek offers a unique blend of Tibetan culture and stunning mountain landscapes.',
    cost: '$3,000',
    days: '16'
    },
    {
    name: 'Langtang',
    image: 'images/langtang.jpg',
    description: 'Langtang National Park is located in the Himalayas of Nepal, north of Kathmandu. The Langtang trek offers breathtaking views of Langtang Lirung, as well as a chance to explore traditional Tamang villages and experience the local culture.',
    cost: '$1,800',
    days: '10'
    },
    ];


const TrekkingDetails = () => {
  const classes = useStyles();
  return (
    <>

  {trekkingLocations.map(locations => (
    <Grid item xs={4}>
         <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={locations.image}
        title={locations.heading}
      />
      <CardContent>
        <Typography variant="h5" className={classes.heading}>
          {locations.heading}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {locations.description}
        </Typography>
        <Typography variant="body2" className={classes.cost}>
          Cost: {locations.cost}
        </Typography>
        <Typography variant="body2" className={classes.days}>
          Days: {locations.days}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
  ))}
  </>
  )

 
};

export default TrekkingDetails;
