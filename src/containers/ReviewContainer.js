import React from 'react';
import RenderStarRating from '../components/RenderStarRating'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
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
    maxWidth: 40,
    maxHeight: 40,
    // <img className={classes.img} src="/static/images/grid/complex.jpg" />
  },
}));

export default function ReviewContainer(props) {
  const classes = useStyles();
  // console.log("reviewInfo", props.reviewInfo)

  const handleEditClick = (id) => {
    props.history.push(`/review/${id}/edit`)
    const clickedReviewObj = props.reviewInfo
    props.handleEditReviewClick(clickedReviewObj)
    // console.log(props.reviewInfo)
    // console.log(id)
  }

  const handleDeleteClick = (id) => {
    props.handleDeleteReview(id)
    // console.log(id)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
            <Grid item>
              <img className={classes.img} alt="complex" src="https://image.flaticon.com/icons/svg/1177/1177568.svg" />
              <Typography variant="h9">
                {props.reviewInfo.user.username}
              </Typography>
          </Grid>
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
                  <RenderStarRating readOnly={true} reviewInfo={props.reviewInfo} />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleEditClick(props.reviewInfo.id)}>Edit</Button> : null}
            {props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleDeleteClick(props.reviewInfo.id)}>Delete</Button> : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}