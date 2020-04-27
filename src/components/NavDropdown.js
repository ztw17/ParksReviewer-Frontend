import React from 'react';
import { ListSubheader, withStyles, SwipeableDrawer, List } from '@material-ui/core/';
import NavDropdownCard from './NavDropdownCard';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: "#434C5C",
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

  alphabetizeParks = () => {
    const parks = this.props.parks
    const alphabetizedParks = parks.sort( (parkA, parkB) => parkA.name > parkB.name ? 1 : -1)
    return alphabetizedParks
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
    this.alphabetizeParks().forEach( (park) => {
      uniqStateObjArr.forEach( (uniquePark) => {
        if (uniquePark.state === park.state) {
        uniquePark.parks.push({id: park.id, name: park.name})
        } 
      })
    })
    return uniqStateObjArr
  }

  alphabetizeStates = () => {
    const sortedStates = this.getStates()
    const alphabetized = sortedStates.sort( (stateA, stateB) => stateA.state > stateB.state ? 1 : -1)
    return alphabetized
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