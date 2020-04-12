import React from 'react';
import ReviewContainer from './ReviewContainer';
import { Typography, withStyles, Paper, Card, Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        height: "100%",
        padding: "50px",
        backgroundColor: "#F2F2F2",
    },
    reviews: {
        direction: "column",
        justify: "center",
        alignItems: "center",
    },
})

class UserProfile extends React.Component {

    renderUserReviews = () => {
        // console.log(this.props.userReviews)
        return this.props.userReviews.map(review => <ReviewContainer handleEditReviewClick={this.props.handleEditReviewClick} handleDeleteReview={this.props.handleDeleteReview} appState={this.props.appState} history={this.props.history} reviewInfo={review} reviews={this.props.reviews}/>)
    }

    render() {
        const {classes} = this.props

        return (
            // <Paper className={classes.root}>
                <Grid className={classes.root}>
                    <Grid item>
                        <Typography variant="h4" className={classes.header}>
                            Hi there, {this.props.appState.firstName}!
                        </Typography>
                    </Grid>
                    <Grid item align="center" className={classes.reviews}>
                            {this.renderUserReviews()}
                    </Grid>
                </Grid>
            // </Paper>
        )
    }
}

export default  withStyles(styles)(UserProfile)