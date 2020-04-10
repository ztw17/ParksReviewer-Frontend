import React, { Fragment } from 'react'
import { withStyles, Paper, Typography, Divider, Card, CardContent, Grid, Box, Button } from '@material-ui/core';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';
import ReviewContainer from './ReviewContainer';
import AddTag from '../components/AddTag';
import Map from '../components/Map';
import Image from '../images/Map.png';

const styles = theme => ({
    root: {
        // margin: "20px",
        padding: "50px",
        backgroundColor: "#F2F2F2",
    },
    card: {
        display: 'flex',
        margin: "2px"
    },
    cardDetails: {
        flex: 1,
        height: 140,
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
        flexWrap: "nowrap",
    },
    location: {
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center'
    },
    reviews: {
        direction: "column",
        justify: "center",
        alignItems: "center",
    },
    img: {
        backgroundImage: `url(${Image})`,
        margin: 'auto',
        display: 'block',
        // width: "100%",
        // maxHeight: 150,
        // padding: 500,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: 300,
  },
})

class ParkContainer extends React.Component {
    
    renderTags = () => {
        return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} handleTagDelete={this.props.handleTagDelete} history={this.props.history}/>)
    }

    renderReviews = () => {
        return this.props.showPark.reviews.map(review => <ReviewContainer reviewInfo={review} reviews={this.props.reviews} appState={this.props.appState} history={this.props.history} users={this.props.users} handleEditReviewClick={this.props.handleEditReviewClick} handleDeleteReview={this.props.handleDeleteReview} />)
    }

    handleAddReviewClick = (id) => {
        this.props.history.push(`/review/park/${id}`)
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
                <main className={classes.root}>
                    <ParkBanner showPark={this.props.showPark}/>
                        <Grid className={classes.mainGrid}>
                            <Grid>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">
                                                Overview
                                            </Typography>
                                        <Divider/>
                                        <Typography varient="h6">
                                            {this.props.showPark.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Grid>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Weather
                                        </Typography>
                                    <Divider/>
                                    <Typography>
                                        {this.props.showPark.weather}
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className={classes.mainGrid}>
                            <Grid item xs={2}>
                                <Card className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Location
                                        </Typography>
                                        <Divider />
                                        <Typography className={classes.location}>
                                            {this.props.showPark.state}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={10}>
                                <Card className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Tags
                                        </Typography>
                                        <Divider/>
                                        <Box className={classes.tagBox}>
                                            {this.renderTags()}
                                        </Box>
                                        <AddTag handleTagAdd={this.props.handleTagAdd} tags={this.props.tags} parks={this.props.parks}/>
                                    {/* <Sidebar showPark={this.props.showPark} tags={this.props.tags} parks={this.props.parks} renderTags={this.renderTags}/> */}
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
                            <Card >
                                <Typography component="h3" variant="h4">
                                    User Reviews
                                </Typography>
                                { this.props.appState.loggedIn ? <Button onClick={() => this.handleAddReviewClick(this.props.showPark.id)}>Add A Review</Button> : null }
                            </Card>
                            <Card >
                                {this.renderReviews()}
                            </Card>
                        </Grid>
                    </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ParkContainer)