import React from 'react';
import RenderStarRating from '../components/RenderStarRating'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, IconButton } from '@material-ui/core';
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
    marginBottom: 0,
  },
  header: {
    fontWeight: "bold",
    margin: 8
  },
  parkHeader: {
    fontWeight: "bold",
    // color: "black"
  },
  reviewUsername: {
    textAlign: 'center'
  },
  teal: {
    color: theme.palette.getContrastText(teal[300]),
    backgroundColor: teal[300],
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  editButton: {
    "&:hover": {
      backgroundColor: "#6fb381",
      color: "#FFF"
    }
  },
  deleteButton: {
    "&:hover": {
      backgroundColor: "#FF6452",
      color: "#FFF"
    }
  }
}));

export default function ReviewContainer(props) {
  const classes = useStyles();

  const handleEditClick = (id) => {
    props.history.push(`/reviews/${id}/edit`)
    const clickedReviewObj = props.reviewInfo
    props.handleEditReviewClick(clickedReviewObj)
  }

  const handleDeleteClick = (id) => {
    props.handleDeleteReview(id)
  }

  const handleParkClick = (id) => {
    const showPark = props.parks.find(park => park.id === id)
    props.handleParkClick(showPark)
    props.history.push(`/parks/${id}`)
  }

  const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' }
  const visitDate = new Date(props.reviewInfo.visit_date).toLocaleDateString('en-US', DATE_OPTIONS)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <Avatar className={classes.teal}>{props.reviewInfo.user.first_name[0]}{props.reviewInfo.user.last_name[0]}</Avatar>
            <Typography className={classes.reviewUsername} variant="body1">
              {props.reviewInfo.user.username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                { props.renderParkName ?
                  <IconButton>
                    <Typography variant="h6" className={classes.parkHeader} onClick={() => handleParkClick(props.reviewInfo.park.id)}>
                      {props.reviewInfo.park.name}
                    </Typography> 
                  </IconButton>
                : null }
                {/* <Typography align="left" className={classes.header}>
                  Review
                </Typography> */}
                {/* <Divider/> */}
                <Typography align="left" gutterBottom>
                  {props.reviewInfo.content}
                </Typography>
                <Typography align="left" variant="body2" className={classes.header}>
                  Visit Date
                </Typography>
                <Divider/>
                <Typography align="left" variant="body2" gutterBottom>
                  {visitDate}
                </Typography>
                <Typography align="left" variant="body2" className={classes.header}>
                  Rating
                </Typography>
                <Divider/>
                  <RenderStarRating readOnly={true} reviewInfo={props.reviewInfo} />
              </Grid>
            </Grid>
          </Grid>
          { props.renderParkName ?
          <Grid item xs={2} container direction="column">
            { props.reviewInfo.user.id === props.appState.userId ? <Button className={classes.editButton} variant="outlined" onClick={() => handleEditClick(props.reviewInfo.id)}>Edit</Button> : null}
            { props.reviewInfo.user.id === props.appState.userId ? <Button className={classes.deleteButton} variant="outlined" onClick={() => handleDeleteClick(props.reviewInfo.id)}>Delete</Button> : null}
          </Grid>
          : null }
        </Grid>
      </Paper>
    </div>
  )
}