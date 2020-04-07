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
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  //   <img className={classes.img} src="/static/images/grid/complex.jpg" />
  // },
}));

export default function ReviewContainer(props) {
  const classes = useStyles();
//   console.log(reviewInfo)

  const handleEditClick = (id) => {
    console.log("I've been clicked")
    console.log(id)
    props.history.push(`/review/${id}/edit`)
  }

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
                  <RenderStarRating readOnly={true} reviewInfo={props.reviewInfo} />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {props.reviewInfo.user_id === props.appState.userId ? <Button onClick={() => handleEditClick(props.reviewInfo.id)}>Edit Review</Button> : ""}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}