import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListSubheader } from '@material-ui/core/';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';

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

class NavDropdownCard extends React.Component {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {open: !prevState.open} 
        })
    };

    clickedPark = (id) => {
        this.props.history.push(`/park/${id}`)
        const clickedParkObj = this.props.parks.find(park => park.id === id)
        this.props.handleParkClick(clickedParkObj)
    }

    render() {
        return (
            <Fragment> 
                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary={this.props.stateObj.state} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.props.stateObj.parks.map(park => {
                        return <ListItem button className={this.props.classes.nested}>
                            <ListItemText onClick={() => this.clickedPark(park.id)} primary={park.name} />
                        </ListItem>
                        })}
                    </List>
                </Collapse>
          </Fragment>
        )
    }
}

export default withStyles(styles)(NavDropdownCard)