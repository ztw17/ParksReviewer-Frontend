import React from 'react';
import { makeStyles, Paper, Typography, Fab, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ParkBanner(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.showPark.image})` }}>
      { props.appState.loggedIn ? 
        <Tooltip title="Add park to favorites">
            <Fab color="secondary" aria-label="favorite" className={classes.buttonOverlay} onClick={() => props.handleFavoritesClick(props.showPark.id)}>
              <FavoriteIcon />
            </Fab>
          </Tooltip>
      : null }
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
      // position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      // marginBottom: theme.spacing(3),
      // backgroundImage: '',
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
      top: -130,
      bottom: 800,
      right: 0,
      left: 950,
    },
    mainFeaturedPostContent: {
      position: 'left',
      padding: theme.spacing(6),
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
}));