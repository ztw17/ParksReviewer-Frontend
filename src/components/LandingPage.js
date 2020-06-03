import React from 'react';
import { Paper, Grid, Typography, IconButton, withStyles } from '@material-ui/core';
import Image from '../images/Olympic.jpg';

const font =  "'Amatic SC', cursive";

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    width: "100vw",
    height: "100vh",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'fixed',
  },
  introGrid: {
    justifyContent: "center",
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  introText: {
    color: "white",
    fontFamily: font,
  },
});

function LandingPage(props) {
  const {classes} = props

  const handleIntroClick = () => {
    const randomParkId = props.parks[Math.floor(Math.random() * props.parks.length)].id
    const showPark = props.parks.find(park => park.id === randomParkId)
    props.handleParkClick(showPark)
    props.history.push(`parks/${randomParkId}`)
  }

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.introGrid}>
        <IconButton onClick={() => handleIntroClick()}>
          <Typography className={classes.introText} variant="h1" cursor="pointer">
            Find your next adventure
          </Typography >
        </IconButton>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(LandingPage)