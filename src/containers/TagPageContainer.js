import React from 'react';
import { withStyles, Typography, Divider, Grid } from '@material-ui/core';
import TagParkCard from '../components/TagParkCard';

const styles = theme => ({
    root: {
        padding: 60,
        backgroundColor: "#dee0e3",
        // width: '100%',
        // margin: 40,
    },
    mainGrid: {
        marginTop: theme.spacing(2),
        direction: "column",
        justify: "center",
        alignItems: "center",
        color: "#434C5C"
    },
    cards: {
        direction: "column",
        justify: "center",
        alignItems: "center",
    },
})

class TagPage extends React.Component {

    renderTagParks = () => {
        return this.props.appState.showTag.parks.map(park => <TagParkCard parkInfo={park} handleParkClick={this.props.handleParkClick} parks={this.props.parks} history={this.props.history}/>)
    }

    titleCase(tagName) {
        tagName = tagName.toLowerCase().split(' ');
        for (var i = 0; i < tagName.length; i++) {
            tagName[i] = tagName[i].charAt(0).toUpperCase() + tagName[i].slice(1); 
        }
        return tagName.join(' ');
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
                <main className={classes.root}>
                    <Grid className={classes.mainGrid}>
                        <Grid>
                            <Typography align="center" variant="h5">
                                Parks with the tag of
                            </Typography>
                            <Typography align="center" variant="h2">
                                {this.titleCase(this.props.appState.showTag.name)}
                            </Typography>
                            <Divider/>
                            <Grid item className={classes.cards} align="center">
                                {this.renderTagParks()}
                            </Grid>
                        </Grid>
                    </Grid>
                </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(TagPage)