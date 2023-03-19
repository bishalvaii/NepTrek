import { Box, Button, Grid, Typography } from "@material-ui/core";
import Image from "mui-image";
import { makeStyles } from "@material-ui/core";

import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import TrekkingDetails from './TrekkingDetails'
import BookingDetails from "./BookingDetails";

const useStyles = makeStyles(theme => ({
  mainText: {
    marginTop: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00308F'
  },
  cardContainer: {
    margin: '10px',
    padding: '20px',
    backgroundColor: '#218313',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px #ccc',
  },
  cardImage: {
   height: '200px',
   width: '300px',
   objectFit: 'cover',
    borderRadius: '10px',
    
  },
  cardText: {
    marginTop: '10px',
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '20px',
    color: 'white'
  },
  costText: {
    fontWeight: 'bold',
    color: 'white',
  }, 
  bookButton: {
    
    backgroundColor: '#FFA500',
    color: 'black'
  },
  detailsButton: {
    
    marginLeft: '20em',
    backgroundColor: '#FFA500',
    color: 'black'
   
  }
}))

const destinations = [
    {
      id: 1,
      name: "Everest Base Camp",
      image: "https://stingynomads.com/wp-content/uploads/2020/03/Everest-Base-Camp-trek-itinerary.jpg.webp",
      cost: "$1000",
      days: "5 days"
    },
    {
      id: 2,
      name: "Annapurna Base Camp",
      image: "https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1526186954883-NUGH9ZRJWBTZN1LBRIQK/annapurna+base+camp-min.JPG",
      cost: "$1500",
      days: "7 days"
    },
    {
      id: 3,
      name: "Langtang Region Trekking",
      image: "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
      cost: "$2000",
      days: "10 days"
    },
    {
      id: '4',
      name: "Langtang Region Trekking",
      image: "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
      cost: "$2000",
      days: "10 days"
    },
    {
      id: 5,
      name: "Langtang Region Trekking",
      image: "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
      cost: "$2000",
      days: "10 days"
    },
    {
      id: 6,
      name: "Langtang Region Trekking",
      image: "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
      cost: "$2000",
      days: "10 days"
    },
  
  ];
  
  const PopularDestinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const classes = useStyles();
    return (
      <>
      <Box>
        <Typography variant="h4"  className={classes.mainText}>Find Popular Destinations</Typography>
      </Box>
      <Grid spacing={3} container>
        

        {destinations.map(destination => (
          <Grid item key={destination.id} xs={4}>
        <Box className={classes.cardContainer}>
              <Typography className={classes.cardText}>{destination.name}</Typography>
              <Image className={classes.cardImage} src={destination.image}  />
              <div>
                <Typography className={classes.cardText}>Cost: <span className={classes.costText}>{destination.cost}</span></Typography>
                <Typography className={classes.cardText}>Duration: {destination.days}</Typography>
               
                <Link to="/book"><Button onClick={() => setSelectedDestination(destination)} className={classes.bookButton} variant="contained" color="primary">Book</Button></Link>
                <Button className={classes.detailsButton} onClick={() => setSelectedDestination(destination)}variant="contained" color="primary">View details</Button>
             

             
              </div>
             

            </Box>
            
          </Grid>
        ))}
        
      </Grid>
      
      
      </>
    );
  };
  
  export default PopularDestinations;
  