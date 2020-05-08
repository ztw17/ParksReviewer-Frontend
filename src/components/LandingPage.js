import React from 'react';
import { Paper, Grid, Typography, IconButton, withStyles } from '@material-ui/core';
import Image from '../images/Olympic.jpg';

const font =  "'Amatic SC', cursive";

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    // width: "100%",
    // height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'fixed',
    padding: 290,
  },
  imageIcon: {
    height: "30px",
    width: "30px",
  },
  introGrid: {
    margin: "auto",
    align: "center",
    alignText: "center"
  },
  introText: {
    color: "white",
    fontFamily: font
  },
});

function LandingPage(props) {
  const {classes} = props

  const handleIntroClick = () => {
    const randomParkId = props.parks[Math.floor(Math.random() * props.parks.length)].id
    const showPark = props.parks.find(park => park.id === randomParkId)
    props.handleParkClick(showPark)
    props.history.push(`park/${randomParkId}`)
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