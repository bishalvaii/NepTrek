import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'mui-image';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2), // Reduce the padding for small screens
  },
  service: {
    textAlign: 'center',
    padding: theme.spacing(1), // Reduce the padding for small screens
  },
  titles: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem', // Adjust the font size for small screens
    },
  },
  description: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem', // Adjust the font size for small screens
    },
  },
  image: {
    maxHeight: '200px', // Reduce the maxHeight for small screens
    [theme.breakpoints.down('sm')]: {
      maxHeight: '250px', // Adjust the maxHeight for small screens
    },
  },
  header: {
    
    marginTop: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00308F',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },}
  
}));

const services = [
  {
    title: 'Guided Tours',
    image: 'https://hsj.com.np/uploads/0000/386/2020/05/05/bhairav-kunda.jpeg',
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

  return ( <div className={classes.root}>
    <Typography className={classes.header} variant="h4" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
          <div className={classes.service}>
            <Typography className={classes.titles} variant="h6">{service.title}</Typography>
            <Typography variant="subtitle1">{service.description}</Typography>
            <Image src={service.image} alt="pic" className={classes.image} />
          </div>
        </Grid>
      ))}
    </Grid>
  </div>)
  
}
