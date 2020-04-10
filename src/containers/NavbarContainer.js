import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Button, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavDropdown from '../components/NavDropdown'
import logo from '../images/logo.png';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'white',
      maxHeight: 60,
    //   backgroundColor: '#DEE0E3',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#434C5C',
    },
    title: {
      flexGrow: 1,
      transform: "scale(.2)",
    //   color: '#434C5C',
    //   textAlign: 'center',
    },
    navbarStyles: {
        textDecoration: "none", color: '#434C5C'
    },
});
  
class Navbar extends React.Component {
    state = {
        drawerOpen: false
    }

    toggleDrawer = () => {
        this.setState((prevState) => {
            return {drawerOpen: !prevState.drawerOpen}
        }) 
    };    

    render() {
        const {classes} = this.props

        return (
        <div className={classes.root}>
            <Fragment>
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Button onClick={this.props.handleLogoClick} className={classes.title}>
                            <img src={logo} alt="logo"/>
                        </Button>
                        {
                            this.props.loggedIn ?
                            <Fragment>
                                <Link to="/profile" className={classes.navbarStyles}>
                                    <Button color="inherit">Profile</Button>
                                </Link>
                                <Link to="/" className={classes.navbarStyles}>
                                    <Button onClick={this.props.handleLogout} color="inherit">Logout</Button>
                                </Link>
                            </Fragment>
                            :
                            <Fragment>
                                <Link to="/signup" className={classes.navbarStyles}>
                                    <Button onClick={this.props.handleSignUp} color="inherit">Sign Up</Button>
                                </Link>
                                <Link to="/login" className={classes.navbarStyles}>
                                    <Button color="inherit">Login</Button>
                                </Link>
                            </Fragment>
                        }
                    </Toolbar>
                </AppBar>
                <NavDropdown
                    drawerOpen={this.state.drawerOpen}
                    toggleDrawer={this.toggleDrawer}
                    parks={this.props.parks}
                    history={this.props.history}
                    handleParkClick={this.props.handleParkClick}
                />
            </Fragment>
        </div>
    ); 
    }
}

export default withStyles(styles)(Navbar)