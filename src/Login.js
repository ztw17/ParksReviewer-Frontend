import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Paper, Card, Button, CssBaseline, TextField, Link, Grid, Typography, makeStyles, Container, Avatar } from '@material-ui/core'
import Image from './images/Zion2.jpeg';

export default function Login(props) {
  const classes = useStyles();

    return (
      <Paper className={classes.backGroundImg}>
        <Container component="main" maxWidth="xs">
          <Grid className={classes.cardGrid}>
            <Card className={classes.paper}>
            <CssBaseline />
              <Grid align="center">
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Typography align="center" component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={props.validateUserLogin}>
                <TextField
                  value={props.appState.loginEmail}
                  onChange={event => props.handleInputChange("loginEmail", event.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  value={props.appState.loginPassword}
                  onChange={event => props.handleInputChange("loginPassword", event.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
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
      padding: '15px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'IndianRed',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "#527CD0",
    },
    cardGrid: {
      justifyContent: "center",
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '30vw'
    },
    backGroundImg: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      width: "100vw",
      height: "100vh",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'fixed',
    }
  }));