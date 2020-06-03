import React from 'react';
import { Button, Card, Paper, CssBaseline, TextField, Grid, Typography, withStyles, Container } from '@material-ui/core';
import StarRating from './StarRating';
// import AddTag from './AddTag';
// import Tag from './Tag';
import Image from '../images/HalfDome.jpg';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#434C5C",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "theme.palette.secondary.main",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    // margin: "auto"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#E56B78"
  },
  backGroundImg: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 80,
  },
  heading: {
    fontFamily: font
  }
});

const font =  "'Amatic SC', cursive";

class AddReviewForm extends React.Component {
  constructor() {
    super()
    this.state = {
        content: "",
        rating: "",
        visitDate: "",
        reviewTags: [], 

    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createNewReview = (event) => {
    event.preventDefault()
    const newReview = {
      content: this.state.content,
      rating: this.state.rating,
      visit_date: this.state.visitDate,
      user_id: this.props.appState.userId,
      park_id: this.props.appState.showPark.id,
    }
    this.props.handleAddReview(newReview)
    this.setState({
      content: "",
      rating: "",
      visit_date: "",
    })
    this.props.history.push(`/parks/${this.props.appState.showPark.id}`)
  }

  // renderTags = () => {
  //   // console.log(this.props.showPark.tags)
  //   return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} handleTagDelete={this.props.handleTagDelete} history={this.props.history}/>)
  // }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.backGroundImg}>
        <Container component="main" maxWidth="xs">
          <Card className={classes.paper}>
          <CssBaseline />
            <div>
              <Grid align="center">
                <Typography className={classes.heading} component="h1" variant="h5">
                  Share your experience at
                </Typography>
                <Typography className={classes.heading} component="h1" variant="h4">
                  {this.props.showPark.name}
                </Typography>
              </Grid>
              <form className={classes.form} onSubmit={this.createNewReview} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleInputChange}
                      id="outlined-multiline-static"
                      label="Write your review"
                      name="content"
                      multiline
                      fullWidth
                      rows="4"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                        Add a rating
                    </Typography>
                    <StarRating handleInputChange={this.handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      Add a visit date
                    </Typography>
                    <TextField
                      onChange={this.handleInputChange}
                      id="date"
                      label=""
                      name="visitDate"
                      type="date"
                      defaultValue=""
                      // onChange={(event) => this.onChange(event)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Typography>
                      Add a tag
                    </Typography>
                    <Box className={classes.tagBox}>
                        {this.renderTags()}
                    </Box>
                    <AddTag />
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <Typography>
                      Add a photo
                    </Typography>
                    <TextField
                      onChange={event => this.props.fileSelectedHandler(event)}
                      variant="outlined"
                      required
                      fullWidth
                      name="reviewImage"
                      abel="Add a photo"
                      type="file"
                      id="reviewImage"
                    />
                  </Grid> */}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
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
    )
  }
}

export default withStyles(styles)(AddReviewForm)