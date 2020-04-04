import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListSubheader } from '@material-ui/core/';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import NavDropdownCard from './NavDropdownCard';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class NavDropdown extends React.Component {
    state = {
      open: false
    }

  getStates = () => {
    const uniqueStates = []
    this.props.parks.forEach((park, index) => {
      if (uniqueStates.indexOf(park.state) === -1)
      uniqueStates.push(park.state)
    })
    let uniqStateObjArr = uniqueStates.map( uniqState => {
      return {state: uniqState, parks: []}
    })
    this.props.parks.forEach( (park) => {
      uniqStateObjArr.forEach( (uniquePark) => {
        if (uniquePark.state === park.state){
        uniquePark.parks.push({id: park.id, name: park.name})
        } 
      })
    })
    return uniqStateObjArr
  }

  alphabetizeStates = () => {
    const alphaStates = this.getStates()
    const sortedStates = alphaStates.sort( (stateA, stateB) => stateA.state > stateB.state ? 1 : -1)
    return sortedStates
  }

  listedStates = () => {
    const statesArr = this.alphabetizeStates()
    const {classes} = this.props
    return statesArr.map(stateObj => {
      return <NavDropdownCard stateObj={stateObj} handleParkClick={this.props.handleParkClick} parks={this.props.parks} classes={classes} history={this.props.history} key={Math.random()}/>
    })
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor="left"
            open={this.props.drawerOpen}
            onClose={this.props.toggleDrawer}
            onOpen={this.props.toggleDrawer}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  States and their Parks
                </ListSubheader>
                }
                className={classes.root}
            >
              {this.listedStates()}
            </List>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(NavDropdown)