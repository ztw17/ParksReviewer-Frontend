import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/Olympic.jpg';

// variant="h6" className={classes.title}
export default function LandingPage() {
    const classes = useStyles();

    return (
      <Paper className={classes.paperContainer}>
            <Typography color="white" variant="h2">
              Find your next adventure
            </Typography >
          <Grid container justify = "center"> 
              <form className={classes.root} noValidate autoComplete="off">
                  <TextField 
                    InputProps={{className: classes.input}} 
                    InputLabelProps={{className: classes.floatingLabelFocusStyle}}
                    id="filled-basic" 
                    label="Enter a park, location, or tag name" 
                    variant="filled" 
                  />
              </form>
              <Button variant="contained">Search</Button>
          </Grid>
      </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
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
    padding: 270,
    color: "white"
    },
  input: {
    color: "white",
  },
  floatingLabelFocusStyle: {
    color: "white",
    borderColor: 'green !important',
  },
}));