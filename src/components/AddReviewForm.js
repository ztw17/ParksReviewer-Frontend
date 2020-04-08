import React from 'react';
import { Button, Box, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarRating from './StarRating';
import AddTag from './AddTag';
import Tag from './Tag';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
  // root: {
  //   backgroundColor: "black",
  //   backgroundSize: 'cover',
  // }
});

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
    // console.log(event.target.value)
    this.setState({
      // content: "",
      // rating: "",
      // visit_date: "",
      [event.target.name]: event.target.value
    })
    // console.log([event.target.name])
    // console.log(event.target.value)
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
    // console.log(newReview)
    this.props.history.push(`/park/${this.props.appState.showPark.id}`)
  }

  // renderTags = () => {
  //   // console.log(this.props.showPark.tags)
  //   return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} handleTagDelete={this.props.handleTagDelete} history={this.props.history}/>)
  // }

  render() {
    const { classes } = this.props

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Share your experience at
            </Typography>
            <Typography component="h1" variant="h4">
              {this.props.showPark.name}
            </Typography>
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
                    className={classes.textField}
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
        </Container>
    );
  }
}

export default withStyles(styles)(AddReviewForm)