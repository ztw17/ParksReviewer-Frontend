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
  Container,
  Card, 
  withStyles } from '@material-ui/core';
import Image from '../images/Acadia.jpg';

const styles = theme => ({
    card: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      backgroundColor: 'white',
      padding: '20px',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "#287179"
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
      },
  });

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.editUser.first_name,
            lastName: props.editUser.last_name,
            email: props.editUser.email,
            username: props.editUser.username,
            password: props.editUser.password
        }
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    submitEditUser = (event) => {
        event.preventDefault()
        const updatedUser = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            id: this.props.appState.userId
        }
        this.props.handleUpdatedUser(updatedUser)
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: ""
        })
        this.props.history.push('/profile')
    }

    render() {
        const { classes } = this.props;
        
        return (
            <Paper className={classes.backGroundImg}>
            <Container component="main" maxWidth="xs">
                <Grid className={classes.cardGrid}>
                <Card className={classes.card}>
                <CssBaseline />
                    {/* <Grid align="center">
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                    </Grid> */}
                    <Typography align="center" component="h1" variant="h5">
                        Edit Account
                    </Typography>
                    <form className={classes.form} onSubmit={this.submitEditUser}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            onChange={this.handleInputChange}
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={this.state.firstName}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            onChange={this.handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            onChange={this.handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={this.state.email}
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            onChange={this.handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={this.state.username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            onChange={this.handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={this.state.password}
                            autoComplete="current-password"
                            />
                        </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Submit Changes
                        </Button>
                        <Grid container justify="flex-end">
                        </Grid>
                    </form>
                </Card>
                </Grid>
            </Container>
            </Paper>
        );
    }
}

export default withStyles(styles)(EditProfileForm)