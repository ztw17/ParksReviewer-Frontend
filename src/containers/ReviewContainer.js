import React from 'react';
import RenderStarRating from '../components/RenderStarRating'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#434C5C",
  },
  paper: {
    padding: theme.spacing(2),
    margin: 15,
    maxWidth: 600,
  },
  header: {
    fontWeight: "bold",
  },
  reviewUsername: {
    textAlign: 'center'
  },
  teal: {
    color: theme.palette.getContrastText(teal[300]),
    backgroundColor: teal[300],
  },
}));

export default function ReviewContainer(props) {
  const classes = useStyles();

  const handleEditClick = (id) => {
    props.history.push(`/review/${id}/edit`)
    const clickedReviewObj = props.reviewInfo
    props.handleEditReviewClick(clickedReviewObj)
  }

  const handleDeleteClick = (id) => {
    props.handleDeleteReview(id)
  }

  const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' }
  const visitDate = new Date(props.reviewInfo.visit_date).toLocaleDateString('en-US', DATE_OPTIONS)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <Avatar className={classes.teal}>{props.reviewInfo.user.first_name[0]}</Avatar>
            <Typography className={classes.reviewUsername} variant="h9">
              {props.reviewInfo.user.username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" className={classes.header}>
                  {props.reviewInfo.park.name}
                </Typography>
                <Divider/>
                <Typography align="left" gutterBottom variant="subtitle1">
                  {props.reviewInfo.content}
                </Typography>
                <Typography className={classes.header}>
                  Visit Date
                </Typography>
                <Divider/>
                <Typography align="left" variant="body2" gutterBottom>
                  {visitDate}
                </Typography>
                <Typography className={classes.header}>
                  Rating
                </Typography>
                <Divider/>
                  <RenderStarRating align="left" readOnly={true} reviewInfo={props.reviewInfo} />
              </Grid>
              {/* <Grid item>
                <Typography variant="body2">
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={2} container direction="column" spacing={12}>
            {props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleEditClick(props.reviewInfo.id)}>Edit</Button> : null}
            {props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleDeleteClick(props.reviewInfo.id)}>Delete</Button> : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}