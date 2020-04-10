import React, { Fragment } from 'react';
import { withStyles, Paper, Typography, Divider, Card, CardContent, Grid, Box, Button } from '@material-ui/core';
import TagParkCard from '../components/TagParkCard';

const styles = theme => ({
    root: {
        padding: 10,
        backgroundColor: "#F2F2F2",
        width: '100%',
        margin: 5,
    },
    mainGrid: {
        marginTop: theme.spacing(2),
    },
    card: {
        // position: 'absolute', 
        // left: '50%',
        // transform: 'translate(-50%)',
    },
})

class TagPage extends React.Component {

    renderTagParks = () => {
        console.log(this.props.appState.showTag.parks)
        return this.props.appState.showTag.parks.map(park => <TagParkCard parkInfo={park} handleParkClick={this.props.handleTagClick} history={this.props.history}/>)
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
                            <Typography variant="h2">
                                {this.titleCase(this.props.appState.showTag.name)}
                            </Typography>
                            <Divider/>
                            <Grid className={classes.card}>
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