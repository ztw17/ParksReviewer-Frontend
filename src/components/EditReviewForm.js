import React from 'react';
import { Button, Card, Paper, CssBaseline, TextField, Grid, Typography, withStyles, Container } from '@material-ui/core';
import StarRating from './StarRating';
// import AddTag from './AddTag';
// import Tag from './Tag';
import Image from '../images/Saguaro.jpg';

const styles = theme => ({
  paper: {
    // marginTop: theme.spacing(8),
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: "relative",
    top: "50%",
    bottom: "50%",
    color: "#434C5C",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "theme.palette.secondary.main",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#33415F",
    color: "white"
  },
  backGroundImg: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 120,
  },
  heading: {
    fontFamily: font
  }
});

const font =  "'Amatic SC', cursive";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        content: props.editReview.content,
        rating: props.editReview.rating,
        visitDate: props.editReview.visit_date,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  editReview = (event) => {
    event.preventDefault()
    const editedReview = {
      content: this.state.content,
      rating: this.state.rating,
      visit_date: this.state.visitDate,
      user_id: this.props.editReview.user.id,
      park_id: this.props.editReview.park.id,
      review_id: this.props.editReview.id
    }
    this.props.handleEditedReview(editedReview)
    this.setState({
      content: "",
      rating: "",
      visit_date: "",
    })
    const showPark = this.props.parks.find(park => park.id === editedReview.park_id)
    this.props.handleParkClick(showPark)
    this.props.history.push(`/parks/${this.props.editReview.park.id}`)
  }

  render() {
    const { classes } = this.props
  
    return (
      <Paper className={classes.backGroundImg}>
        <Container component="main" maxWidth="xs">
          <Card className={classes.paper}>
            <CssBaseline />
            <div className={classes.paper}>
              <Grid align="center">
                <Typography className={classes.heading} component="h1" variant="h5">
                  Edit your review of
                </Typography>
                <Typography className={classes.heading} component="h1" variant="h4">
                  {this.props.editReview.park.name}
                </Typography>
              </Grid>
              <form className={classes.form} onSubmit={this.editReview} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleInputChange}
                      id="outlined-multiline-static"
                      label="Edit your review"
                      value={this.state.content}
                      name="content"
                      multiline
                      fullWidth
                      rows="4"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                        Edit your rating
                    </Typography>
                    <StarRating rating={this.state.rating} handleInputChange={this.handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      Edit your visit date
                    </Typography>
                    <TextField
                      onChange={this.handleInputChange}
                      id="date"
                      label=""
                      name="visitDate"
                      type="date"
                      defaultValue={this.state.visitDate}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // color="secondary"
                  className={classes.submit}
                >
                  Submit Review
                </Button>
                <Grid container justify="flex-end">
                </Grid>
              </form>
            </div>
          </Card>
        </Container>
      </Paper>
    );
  }
}

export default withStyles(styles)(EditReviewForm)