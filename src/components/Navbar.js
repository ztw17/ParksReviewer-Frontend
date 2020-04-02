import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }));
  
export default function Navbar(props) {
    const classes = useStyles();
    const navbarStyles = {textDecoration: "none", color: "white"}

    // handleLogout = () => {
    //     this.props.resetUserObj()
    //     this.props.history.push('/')
    // }

    return (
      <div className={classes.root}>
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Explore
                    </Typography>
                        <Link to="/" style={navbarStyles}>
                            <Button color="inherit">Logout</Button>
                        </Link>
                        <Link to="/signup" style={navbarStyles}>
                            <Button color="inherit">Sign Up</Button>
                        </Link>
                        <Link to="/login" style={navbarStyles}>
                            <Button color="inherit">Login</Button>
                        </Link>
                </Toolbar>
            </AppBar>
        </Fragment>
    </div>
  );
}

{/* this.props.loggedIn ? onClick={this.handleLogout} */}