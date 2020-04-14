import React from 'react';
import { Paper, Grid, Typography, IconButton, withStyles } from '@material-ui/core';
import Image from '../images/Olympic.jpg';

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 310,
  },
  imageIcon: {
    height: "30px",
    width: "30px",
  },
  introGrid: {
    margin: "auto",
  },
  introText: {
    color: "white"
  }
});

function LandingPage(props) {
  const {classes} = props

  const handleIntroClick = () => {
    const randomParkId = props.parks[Math.floor(Math.random() * props.parks.length)].id
    console.log("randomParkId", randomParkId)
    const showPark = props.parks.find(park => park.id === randomParkId)
    props.handleParkClick(showPark)
    console.log("showPark", showPark)
    props.history.push(`park/${randomParkId}`)
  }

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.introGrid}>
        <IconButton onClick={() => handleIntroClick()}>
          <Typography className={classes.introText} variant="h2" cursor="pointer">
            Find your next adventure
          </Typography >
        </IconButton>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(LandingPage)