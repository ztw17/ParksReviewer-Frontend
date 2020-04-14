import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Button, withStyles, Tooltip } from '@material-ui/core';
import NavDropdown from '../components/NavDropdown'
import logo from '../images/logo.png';
import pin from '../images/pin.png';
import tag from '../images/tag.png';
import account from '../images/account.png';
import us_map from '../images/us_map.png';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'white',
      maxHeight: 60,
    //   backgroundColor: '#DEE0E3',
    },
    menuButton: {
    //   marginRight: theme.spacing(2),
      color: '#434C5C',
      upperCase: false,
    },
    title: {
      flexGrow: 1,
      transform: "scale(.2)",
      position: 'relative',
      top: 0,
      bottom: 0,
      right: 50,
      left: -40,
    //   textAlign: 'center',
    //   color: '#434C5C',
    },
    navbarStyles: {
        textDecoration: "none", 
        color: '#434C5C',
    },
    mapIcon: {
        height: "40px",
        width: "40px",
    },
    icon: {
        height: "30px",
        width: "30px",
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
    }

    routeToMap = () => {
        this.props.history.push('/map')
    }

    routeToTags = () => {
        this.props.history.push('/tags')
    }

    render() {
        const {classes} = this.props

        return (
        <div className={classes.root}>
            <Fragment>
                <AppBar className={classes.root} position="fixed">
                    <Toolbar>
                        <Tooltip title="Find a park by state name">
                            <IconButton onClick={this.toggleDrawer} className={classes.menuButton}>
                                <img className={classes.mapIcon} alt="us_map" src={us_map}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Find a park by map">
                            <IconButton onClick={this.routeToMap} className={classes.menuButton}>
                                <img className={classes.icon} alt="pin" src={pin}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Find a park by tag name">
                            <IconButton onClick={this.routeToTags} className={classes.menuButton}>
                                <img className={classes.icon} alt="tag" src={tag}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Home">
                            <IconButton onClick={this.props.handleLogoClick} className={classes.title}>
                                <img src={logo} alt="logo"/>
                            </IconButton>
                        </Tooltip>
                        {
                            this.props.loggedIn ?
                            <Fragment>
                                <Tooltip title="Profile">
                                    <Link to="/profile" className={classes.navbarStyles}>
                                        <img className={classes.icon} alt="profile" src={account}/>
                                    </Link>
                                </Tooltip>
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