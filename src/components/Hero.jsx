import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from 'mui-image';
import trek from '../images/trek.png';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { Box } from '@material-ui/core';
import { maxHeight } from '@mui/system';
import AvailableDestinations from './TrekkingDetails';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  hero: {
    width: '100%',
    height: '500px',
    padding: '20px',
    background: 'linear-gradient(to right, #204d2f, #14640e)',
    [theme.breakpoints.down('md')]: {
      height: 'auto'
    }
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
    heroRight: {
      width: '100%',
      height: '100%',
      marginTop: '-70px' ,
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        maxHeight: '600px',
        marginBottom: '20px',
     
      }
  },
  searchButton: {
    marginTop: '20px',
    backgroundColor: 'darkorange'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // adjust the font size for small screens
      marginBottom: '10px', // adjust the margin for small screens
    },
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
    display: 'block',
    overflow: 'hidden',
    maxHeight:'3.6em',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'none'
    }
  },
  locationDateSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },

  selectContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    backgroundColor: 'darkorange', // custom background color
    borderRadius: '2px',
    padding: '5px', // custom padding
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
     
     
    },

    },
    
  select: {
    minWidth: '150px',
    marginBottom: '20px',
    color: 'white'
  },
  locationIcon: {
    marginRight: '2px',
    padding: '10px',
    color: 'white'
  },
  dateIcon: {
    marginRight: '2px',
    padding: '10px',
    color: 'white'
  },
 
}));


const Hero = ({title, subtitle, locations, dates, imageUrl}) => {
    const classes = useStyles();
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [selectedDate, setSelectedDate] = useState(dates[0]);
    const [showDestinations, setShowDestinations] = useState(false);
    const [destinations] = useState([]);

    const handleSearch = () => {
      setShowDestinations(true)
    }

    return (
      <Grid container className={classes.hero}>
      <Grid item xs={6} className={classes.heroLeft}>
      <Typography variant="h2" className={classes.title}>{title}</Typography>
      <Typography variant="subtitle1"  className={classes.subtitle}>{subtitle}</Typography>

      <Box className={classes.locationDateSearch} >
    
      <div className={classes.selectContainer}>
        <LocationOnIcon className={classes.locationIcon} />

        <Select
            className={classes.select}
            value={selectedLocation}
            onChange={(event) => setSelectedLocation(event.target.value)}
        >
            {locations?.map((location, index) => (
            <MenuItem  key={index} value={location}>{location}</MenuItem>
        ))}
        </Select>
      </div>
          <div className={classes.selectContainer}>
            <EventIcon className={classes.dateIcon} />
            <Select
              className={classes.select}
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
            >
              {dates?.map((date, index) => (
              <MenuItem key={index} value={date}>{date}</MenuItem>
            ))}
          </Select>
      </div>
          <Link to="/availableAdventures"><Button onClick={handleSearch}variant="contained" color="warning" className={classes.searchButton}>Search</Button></Link>
          <ul>
            {}
          </ul>
    
      </Box>
      </Grid>
      
        <Grid item xs={6}>
        <Image src={trek} className={classes.heroRight} />
        </Grid>
        {showDestinations && <AvailableDestinations  destinations={destinations} />}
      </Grid>
    );
    }

    export default Hero;