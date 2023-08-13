import { Box, Button, Grid, Typography } from "@material-ui/core";
import Image from "mui-image";
import { makeStyles } from "@material-ui/core";

import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import TrekkingDetails from "./TrekkingDetails";
import BookingDetails from "./BookingDetails";

const useStyles = makeStyles((theme) => ({
  mainText: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#00308F",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  cardContainer: {
    margin: "10px",
    padding: "20px",
    backgroundColor: "#218313",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px #ccc",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
      padding: "15px", // Adjust the padding for small screens
    },
  },
  cardImage: {
    height: "200px",
    width: "100%", // Adjust the width to fill the container on small screens
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
  cardText: {
    marginTop: "10px",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "20px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Adjust the font size for small screens
    },
  },
  costText: {
    fontWeight: "bold",
    color: "white",
  },
  bookButton: {
    backgroundColor: "#FFA500",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      width: "100%", // Adjust the width to fill the container on small screens
      marginBottom: "5px", // Adjust the margin for small screens
    },
  },
  detailsButton: {
    marginLeft: "auto", // Align the button to the right on large screens
    backgroundColor: "#FFA500",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      marginTop: "10px",
      fontSize: "0.8rem",
      width: "100%", // Adjust the width to fill the container on small screens
    },
  },
}));

const destinations = [
  {
    id: 1,
    name: "Everest Base Camp",
    image:
      "https://stingynomads.com/wp-content/uploads/2020/03/Everest-Base-Camp-trek-itinerary.jpg.webp",
    cost: "$1000",
    days: "5 days",
  },
  {
    id: 2,
    name: "Annapurna Base Camp",
    image:
      "https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1526186954883-NUGH9ZRJWBTZN1LBRIQK/annapurna+base+camp-min.JPG",
    cost: "$650",
    days: "7 days",
  },
  {
    id: 3,
    name: "Langtang Region Trekking",
    image:
      "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
    cost: "$800",
    days: "10 days",
  },
  {
    id: 4,
    name: "Langtang Region Trekking",
    image:
      "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
    cost: "$2000",
    days: "10 days",
  },
  {
    id: 5,
    name: "Langtang Region Trekking",
    image:
      "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
    cost: "$2000",
    days: "10 days",
  },
  {
    id: 6,
    name: "Langtang Region Trekking",
    image:
      "https://nepalguidetrekking.com/uploads/package/frontend/similar-tibet-culture-and-langtang-valley-trekking-12-days.jpg",
    cost: "$2000",
    days: "10 days",
  },
];

const PopularDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography variant="h4" className={classes.mainText}>
          Find Popular Destinations
        </Typography>
      </Box>
      <Grid spacing={3} container>
        {destinations.map((destination) => (
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
              <Typography className={classes.cardText} variant="h6">
                {destination.name}
              </Typography>
              <Typography variant="subtitle1">
                {destination.description}
              </Typography>
              <Image
                src={destination.image}
                alt="pic"
                className={classes.cardImage}
              />
              <Typography className={classes.cardText}>
                Cost:{" "}
                <span className={classes.costText}>{destination.cost}</span>
              </Typography>
              <Typography className={classes.cardText}>
                Duration: {destination.days}
              </Typography>

              <Link to="/book">
                <Button
                  onClick={() => setSelectedDestination(destination)}
                  className={classes.bookButton}
                  variant="contained"
                  color="primary"
                >
                  Book
                </Button>
              </Link>
              <Button
                className={classes.detailsButton}
                onClick={() => setSelectedDestination(destination)}
                variant="contained"
                color="primary"
              >
                View details
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PopularDestinations;
