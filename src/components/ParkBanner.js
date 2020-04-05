import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export default function ParkBanner(props) {
  const classes = useStyles();
  const { showPark } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${showPark.image})` }}>
      {<img style={{ display: 'none' }} src={showPark.image} alt={showPark.imageText} />}
      {/* <div className={classes.overlay} /> */}
          <div className={classes.overlay}>
            <Typography component="h3" variant="h2" color="inherit" gutterBottom>
              {showPark.name}
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
    mainFeaturedPostContent: {
      position: 'left',
      padding: theme.spacing(6),
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
}));