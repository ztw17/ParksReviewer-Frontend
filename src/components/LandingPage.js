import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/Olympic.jpg';
import america from '../images/america.png';
import pin from '../images/pin.png';
import tag from '../images/tag.png';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '60ch',
      // '& $notchedOutline': {
      //   borderColor:'green',
    // },
      // borderColor: 'green',
    }
  },
  // root: {
  //   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "white"
  //   },
  //   "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "white"
  //   },
  //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "white"
  //   }
  // },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top: 500,
    bottom: -50,
    right: 0,
    left: 0,
    padding: 300,
    color: "white",
    },
  // input: {
  //   color: "white",
  // },
  // floatingLabelFocusStyle: {
  //   color: "white",
  //   borderColor: 'green !important',
  // },
  imageIcon: {
    // transform: "scale(.09)",
    height: "30px",
    width: "30px",
  },
  directions: {
    margin: 20,
  }
});

// variant="h6" className={classes.title}
class LandingPage extends React.Component {

  handleIntroClick = () => {
    console.log("hello")
  }

  render() {
    const {classes} = this.props

    return (
      <Paper className={classes.paperContainer}>
        <Grid>
          <Typography style={{textAlign: "center"}} variant="h2" cursor="pointer" onClick={this.handleIntroClick}>
            Find your next adventure
          </Typography >
        </Grid>
          <Grid container justify = "center" className={classes.directions}> 
            {/* <Typography>
              Select <img className={classes.imageIcon} alt="america" src={america}/> to explore by U.S. state,
              <img className={classes.imageIcon} alt="america" src={pin}/> to explore by map, or 
              <img className={classes.imageIcon} alt="america" src={tag}/> to explore by tag
            </Typography> */}
              {/* <form className={classes.root} noValidate autoComplete="off">
                  <TextField 
                    InputProps={{className: classes.input}} 
                    InputLabelProps={{className: classes.floatingLabelFocusStyle}}
                    id="filled-basic" 
                    label="Enter a park, location, or tag name" 
                    variant="filled" 
                  />
              </form>
              <Button variant="contained">Search</Button> */}
          </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(LandingPage)