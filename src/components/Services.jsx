import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'mui-image';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  service: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
}));

const services = [
  {
    title: 'Guided Tours',
    image: 'https://www.nepaltraveladventure.com/uploads/resized/album_2020-01-06%2009:56:13_nepal-family-tour-in-nepal.jpg',
    description: 'Explore the best of the destination with our expert guides',
    
  },
  {
    title: 'Camping Adventures',
    description: 'Experience the great outdoors in style with our camping adventures',
    image: 'https://nepaltraveller.com/images/main/1602402950.sidetrackimagecamping.jpg'
  },
  {
    title: 'Hiking Excursions',
    description: 'Discover the beauty of nature on one of our challenging hikes',
    image: "https://www.adventurerepubliq.com/wp-content/uploads/2019/12/toomas-tartes-Yizrl9N_eDA-unsplash.jpg",
  },
  {
    title: 'Equipment Rentals',
    description: 'Get the gear you need to conquer any trail with our equipment rentals',
    image: 'https://www.thirdrockadventures.com/assets-back/images/blog/rent-or-buy-trekking-gear.jpgPBq.jpg'
  },
  {
    title: 'Transportation Services',
    description: 'Get to and from your adventure with ease with our transportation services',
    image: 'https://nepalcallsyou.com/public/photos/shares/nepal-3381823_1280.jpg'
  },
  {
    title: 'Accommodation Booking',
    description: 'Find the perfect place to rest your head after a long day of exploration',
    image: 'https://www.nepalhighlandtreks.com/uploads/articles/images/tea-house-at-annapurna-region.jpg'
  },
];

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid key={index} item xs={4}>
            <div className={classes.service}>
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="subtitle1">{service.description}</Typography>
              <Image src={service.image} alt="pic " />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
