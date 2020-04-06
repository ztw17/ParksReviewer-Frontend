import React from 'react';
import Rating from '../components/Rating'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 15,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ReviewContainer(props) {
  const classes = useStyles();
//   console.log(reviewInfo)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1} className={classes.mainGrid}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.reviewInfo.content}
                </Typography>
                <Typography>
                    Visit Date
                </Typography>
                <Divider/>
                <Typography variant="body2" gutterBottom>
                  {props.reviewInfo.visit_date}
                </Typography>
                <Typography>
                    Rating
                </Typography>
                <Divider/>
                <Typography variant="body2" color="textSecondary">
                  <Rating />
                  {props.reviewInfo.rating}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
              <img className={classes.img} src="/static/images/grid/complex.jpg" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}