import React from 'react';
import { Typography, withStyles, Paper, Card, Grid, Divider, Tooltip, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';
import ReviewContainer from './ReviewContainer';
import FavoritesParkCard from '../components/FavoritesParkCard';

const styles = theme => ({
    root: {
        paddingTop: "4%",
        paddingBottom: "9%",
        paddingRight: "9%",
        paddingLeft:  "9%",
        height: "100%",
        spacing: "25px",
        backgroundColor: "#DEE0E3",
        color: "#434C5C",
    },
    headerCard: {
        margin: "25px"
    },
    favorites: {
        flexWrap:"wrap",
        direction: "column",
        margin: "auto",
        justify: "center",
        alignItems: "center",
        paddingRight: "3%",
        paddingLeft:  "1%",
    },
    reviews: {
        direction: "column",
        margin: "auto",
        justify: "center",
        alignItems: "center",
    },
    paper: {
        padding: 20,
        margin: 'auto',
        // maxWidth: 1200,
    },
    paper2: {
        padding: theme.spacing(2),
        margin: "auto",
        // maxWidth: 1200,
        backgroundColor: '#434C5C',
        color: "white",
        fontWeight: "bold",
    },
    sectionHeader: {
        padding: theme.spacing(2),
        margin: "25px",
        // maxWidth: 1100,
        backgroundColor: '#434C5C',
        color: "white",
        fontWeight: "bold",
    },
    teal: {
        color: theme.palette.getContrastText(teal[300]),
        backgroundColor: teal[300],
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    text: {
        padding: "20px"
    }
})

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    renderUserReviews = () => {
        return this.props.userReviews.map(review => <ReviewContainer renderParkName={true} handleEditReviewClick={this.props.handleEditReviewClick} handleDeleteReview={this.props.handleDeleteReview} appState={this.props.appState} history={this.props.history} reviewInfo={review} reviews={this.props.reviews}/>)
    }

    renderFavorites = () => {
        return this.props.appState.userFavorites.map(favorite => <FavoritesParkCard favoriteInfo={favorite} parks={this.props.parks} handleParkClick={this.props.handleParkClick} handleFavoriteDelete={this.props.handleFavoriteDelete} history={this.props.history}/>)
    }

    routeToProfileEdit = (id) => {
        this.props.history.push(`users/${id}/edit`)
        const clickedParkObj = this.props.users.find(user => user.id === this.props.appState.userId)
        console.log(clickedParkObj)
        this.props.editUser(clickedParkObj)
    }

    render() {
        const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' }
        const createdAtDate = new Date(this.props.appState.createdAtDate).toLocaleDateString('en-US', DATE_OPTIONS)

        const {classes} = this.props

        return (
            <React.Fragment>
                <Grid className={classes.root}>
                    <Card className={classes.headerCard}>
                        <Paper className={classes.paper2}>
                            Profile
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item>
                                <Tooltip title="Edit Profile">
                                    <IconButton onClick={() => this.routeToProfileEdit(this.props.appState.userId)}>
                                        <Avatar className={classes.teal}>{this.props.appState.firstName[0]}{this.props.appState.lastName[0]}</Avatar>
                                    </IconButton>
                                </Tooltip>
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
                                    {this.props.appState.createdAtDate ? createdAtDate : <Typography>Today</Typography>}
                                </Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Paper>
                    </Card>
                    <Paper variant="subtitle1" className={classes.sectionHeader}>
                        Your Favorited Parks
                    </Paper>
                    <Grid item align="center" className={classes.reviews}>
                        {this.props.appState.userFavorites.length ? null : <Typography className={classes.text}>You haven't favorited any parks yet. Favorite one today!</Typography>}
                    </Grid>
                    <Grid container spacing={2} className={classes.favorites}>
                        {this.props.appState.userFavorites.length ? this.renderFavorites() : null }
                    </Grid>
                    <Paper variant="subtitle1" className={classes.sectionHeader}>
                        Your Reviews
                    </Paper>
                    <Grid item align="center" className={classes.reviews}>
                        {this.props.userReviews.length ? this.renderUserReviews() : <Typography className={classes.text}>You haven't written any reviews yet. Write one today!</Typography>}
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default  withStyles(styles)(UserProfile)

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* <div className={classes.root}>
    <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={() => this.handleChange('panel1')}>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
        <Typography className={classes.heading}>Your Favorited Parks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid item align="center" className={classes.reviews}>
                {this.renderFavorites()}
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={() => this.handleChange('panel2')}>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        >
        <Typography className={classes.heading}>Your Reviews</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid item align="center" className={classes.reviews}>
                {this.renderUserReviews()}
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>
</div> */

// handleChange = (panel) => {
//     this.setState ({
//         expanded: panel
//     })
// }

// heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
// },
// secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
// },