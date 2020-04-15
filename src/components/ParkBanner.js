import React from 'react';
import { makeStyles, Paper, Typography, Fab, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ParkBanner(props) {
  const classes = useStyles();
  
  const parkComparison = () => {
    return (props.appState.userFavorites.some(favorite => {
      return (favorite.park.name === props.showPark.name)
    }))
  }

  const favoriteButton = () => {
    if (!props.appState.loggedIn) {
      return null
    } else if (parkComparison()) {
      return <Tooltip title="Add park to favorites">
      <Fab disabled color="secondary" aria-label="favorite" className={classes.buttonOverlay}>
        <FavoriteIcon />
      </Fab>
  </Tooltip>
    } else return <Tooltip title="Add park to favorites">
    <Fab color="secondary" aria-label="favorite" className={classes.buttonOverlay}>
      <FavoriteIcon onClick={() => props.handleFavoritesClick(props.showPark.id)}/>
    </Fab>
  </Tooltip>
  }

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.showPark.image})` }}>
      {favoriteButton()}
      {<img style={{ display: 'none' }} src={props.showPark.image} alt={props.showPark.name} />}
      <div className={classes.overlay}>
        <Typography component="h3" variant="h2" color="inherit" gutterBottom>
          {props.showPark.name}
        </Typography>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: 150,
    },
    overlay: {
      position: 'relative',
      top: 140,
      bottom: 0,
      right: 0,
      left: -100,
    },
    buttonOverlay: {
      position: 'relative',
      top: -125,
      bottom: 800,
      right: 0,
      left: 960,
    },
}));