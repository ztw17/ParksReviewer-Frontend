import React from 'react';
import ReviewContainer from './ReviewContainer';
import { Typography, withStyles, Paper, Card, Grid, ButtonBase, Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';
import FavoritesParkCard from '../components/FavoritesParkCard';

const styles = theme => ({
    root: {
        height: "100%",
        padding: "50px",
        spacing: "25px",
        backgroundColor: "#F2F2F2",
    },
    reviews: {
        direction: "column",
        justify: "center",
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
    },
    paper2: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 800,
        backgroundColor: '#434C5C',
        color: "white",
    },
    sectionHeader: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 600,
        backgroundColor: '#434C5C',
        color: "white",
    },
    teal: {
        color: theme.palette.getContrastText(teal[300]),
        backgroundColor: teal[300],
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
})

class UserProfile extends React.Component {

    renderUserReviews = () => {
        // console.log(this.props.userReviews)
        return this.props.userReviews.map(review => <ReviewContainer handleEditReviewClick={this.props.handleEditReviewClick} handleDeleteReview={this.props.handleDeleteReview} appState={this.props.appState} history={this.props.history} reviewInfo={review} reviews={this.props.reviews}/>)
    }

    renderFavorites = () => {
        return this.props.appState.userFavorites.map(favorite => <FavoritesParkCard favoriteInfo={favorite} parks={this.props.parks} handleParkClick={this.props.handleParkClick} handleFavoriteDelete={this.props.handleFavoriteDelete} history={this.props.history}/>)
    }

    
    render() {
        const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' }
        const createdAtDate = new Date(this.props.appState.createdAtDate).toLocaleDateString('en-US', DATE_OPTIONS)

        const {classes} = this.props

        return (
            <Grid className={classes.root}>
                <Paper variant="subtitle1" className={classes.paper2}>
                    Profile
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                    <Grid item>
                            <Avatar className={classes.teal}>{this.props.appState.firstName[0]}</Avatar>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {this.props.appState.firstName} {this.props.appState.lastName}
                            </Typography>
                            <Divider/>
                            <Typography variant="body2" color="textSecondary">
                                {this.props.appState.username}
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" gutterBottom>
                                Member since
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {createdAtDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Paper>
                <Paper variant="subtitle1" className={classes.sectionHeader}>
                    Your Favorited Parks
                </Paper>
                <Grid item align="center" className={classes.reviews}>
                        {this.renderFavorites()}
                </Grid>
                <Paper variant="subtitle1" className={classes.sectionHeader}>
                    Your Reviews
                </Paper>
                <Grid item align="center" className={classes.reviews}>
                        {this.renderUserReviews()}
                </Grid>
            </Grid>
        )
    }
}

export default  withStyles(styles)(UserProfile)