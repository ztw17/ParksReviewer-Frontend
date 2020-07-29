import React from 'react'
import { withStyles, Typography, Divider, Card, CardContent, Grid, Box, Fab, Tooltip, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
// import { makeStyles, Paper, Typography, Fab, Tooltip } from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';
import ReviewContainer from './ReviewContainer';
import AddTag from '../components/AddTag';
import Map from '../components/Map';

const styles = theme => ({
    root: {
        paddingTop: "5%",
        paddingBottom: "10%",
        paddingRight: "10%",
        paddingLeft:  "10%",
        backgroundColor: "#dee0e3",
        fontColor: "#434C5C",
    },
    cardDetails: {
        flex: 1,
    },
    weatherAndRating: {
        flex: 1,
        height: 110
    },
    mainGrid: {
        marginTop: theme.spacing(2),
        padding: 2
    },
    tagBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        flexWrap: "wrap",
    },
    reviewTitle: {
        textAlign: 'center',
        backgroundColor: '#434C5C',
        color: "white",
        spacing: "10px",
    },
    addReviewBtn: {
        margin: 0,
        // top: 'auto',
        // right: 'auto',
        bottom: '28px',
        left: '60px',
        position: 'relative',
    },
    sectionHeader: {
        backgroundColor: '#434C5C',
        color: "white",
        padding: 8
    },
    // buttonOverlay: {
    //     position: 'relative',
    //     top: 140,
    //     bottom: 0,
    //     right: 20,
    //     left: 800,
    // },
    content: {
        padding: 8
    },
    bold: {
        fontWeight: "bold"
    },
    starRating: {
        justifyContent: "center",
        alignItems: "center"
    },
})

class ParkContainer extends React.Component {

    getParkRating = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.props.showPark.reviews.map(reviewObj => reviewObj.rating)
            return ratingsArr.reduce(sum) / ratingsArr.length
    }
    
    renderTags = () => {
        return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} handleTagDelete={this.props.handleTagDelete} history={this.props.history}/>)
    }

    renderReviews = () => {
        return this.props.showPark.reviews.map(review => <ReviewContainer reviewInfo={review} reviews={this.props.reviews} appState={this.props.appState} history={this.props.history} users={this.props.users} handleEditReviewClick={this.props.handleEditReviewClick} handleDeleteReview={this.props.handleDeleteReview} />)
    }

    handleAddReviewClick = () => {
        this.props.history.push(`/review/new`)
    }

    handleParkEditClick = (id) => {
        this.props.history.push(`/parks/${id}/edit`)
        const clickedParkObj = this.props.showPark
        this.props.editPark(clickedParkObj)
    }

    handleParkDeleteClick = (id) => {
        this.props.history.push('/')
        this.props.handleParkDelete(id)
    }

    reviewMessage = () => {
        if (this.props.showPark.reviews.length) {
            return this.renderReviews()
        } else if (this.props.reviews.length && this.props.appState.loggedIn) {
            return <Typography>No reviews for {this.props.showPark.name} yet. Write one today!</Typography>
        } else {
            return <Typography>No reviews for {this.props.showPark.name} yet. Log in or create an account to write one today!</Typography> 
        }
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
                <main className={classes.root}>
                    <ParkBanner showPark={this.props.showPark} appState={this.props.appState} handleFavoritesClick={this.props.handleFavoritesClick} parks={this.props.parks} />
                        <Grid container spacing={2} className={classes.mainGrid}>
                            <Grid item xs={6}>
                                <Card className={classes.weatherAndRating}>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            Location
                                            <Button onClick={() => this.handleParkEditClick(this.props.showPark.id)}></Button>
                                            <Button onClick={() => this.handleParkDeleteClick(this.props.showPark.id)}></Button>
                                        </Typography>
                                        <Divider />
                                            <Typography variant="h6" align="center">
                                                {this.props.showPark.state}
                                            </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.weatherAndRating}>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            User Rating
                                        </Typography>
                                        <Divider />
                                            <Grid container className={classes.starRating}>
                                                <Rating
                                                    value={ this.props.showPark.reviews.length >= 1 ? this.getParkRating() : 4.5 } 
                                                    name="rating"
                                                    size="large"
                                                    precision={0.5}
                                                    readOnly="true"
                                                />
                                            </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Card>
                                <CardContent>
                                    <Typography className={classes.bold} variant="h6">
                                        Overview
                                    </Typography>
                                    <Divider/>
                                    <Typography varient="h6">
                                        {this.props.showPark.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Card>
                                <CardContent>
                                    <Typography className={classes.bold} variant="h6">
                                        Weather
                                    </Typography>
                                <Divider/>
                                <Typography>
                                    {this.props.showPark.weather}
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Grid>
                                <Card className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            Tags
                                        </Typography>
                                        <Divider/>
                                        <Box className={classes.tagBox}>
                                            {this.renderTags()}
                                        </Box>
                                        <AddTag handleTagAdd={this.props.handleTagAdd} tags={this.props.tags} parks={this.props.parks}/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Card>
                                <Map showPark={this.props.showPark} viewport={this.props.viewport} updateViewport={this.props.updateViewport} />
                            </Card>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Card>
                                <Typography component="h3" variant="h4" className={classes.reviewTitle}>
                                    User Reviews
                                </Typography>
                            </Card>
                                { this.props.appState.loggedIn ? 
                                <Tooltip title="Write a review">
                                    <Fab color="secondary" className={classes.addReviewBtn}>
                                        <EditIcon onClick={() => this.handleAddReviewClick(this.props.showPark.id)}/>
                                    </Fab> 
                                </Tooltip> : null }
                                <Grid item align="center" className={classes.reviews}>
                                    {this.reviewMessage()}
                                </Grid>
                        </Grid>
                    </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ParkContainer)