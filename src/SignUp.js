import React from "react";
import { 
  Avatar, 
  Button, 
  CssBaseline, 
  TextField, 
  Link, 
  Grid, 
  Typography, 
  makeStyles, 
  Paper, 
  Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Image from './images/GrandTeton.jpg';

export default function SignUp(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.backGroundImg}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={props.validateSignUpUser}>
            <Grid container spacing={2}>
              <Grid item xs={5} sm={6}>
                <TextField
                  onChange={event => props.handleInputChange("signUpFirstName", event.target.value)}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={event => props.handleInputChange("signUpLastName", event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={event => props.handleInputChange("signUpEmail", event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={event => props.handleInputChange("signUpUsername", event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={event => props.handleInputChange("signUpPassword", event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Input
                  onChange={event => props.handleInputChange("signUpAvatar", event.target.files[0])}
                  variant="outlined"
                  required
                  fullWidth
                  name="avatar"
                  label="Profile Picture"
                  type="file"
                  id="avatar"
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
              Create Your Account
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'Plum',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    backGroundImg: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: 80,
    },
  }));