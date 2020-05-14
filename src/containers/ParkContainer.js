import React from 'react'
import { withStyles, Typography, Divider, Card, CardContent, Grid, Box, Fab, Tooltip, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';
import ReviewContainer from './ReviewContainer';
import AddTag from '../components/AddTag';
import Map from '../components/Map';

const styles = theme => ({
    root: {
        padding: "10%",
        backgroundColor: "#dee0e3",
        fontColor: "#434C5C",
        // marginTop: 10,
    },
    cardDetails: {
        flex: 1,
        height: 170,
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
        top: 'auto',
        right: 'auto',
        bottom: '28px',
        left: '60px',
        position: 'relative',
    },
    sectionHeader: {
        backgroundColor: '#434C5C',
        color: "white",
        padding: 8
    },
    content: {
        padding: 8
    },
    bold: {
        fontWeight: "bold"
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

    handleParkEditClick = (id) => {
        this.props.history.push(`/park/${id}/edit`)
        const clickedParkObj = this.props.showPark
        this.props.editPark(clickedParkObj)
    }

    handleParkDeleteClick = (id) => {
        console.log(id)
        this.props.history.push('/')
        this.props.handleParkDelete(id)
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
                <main className={classes.root}>
                    <ParkBanner showPark={this.props.showPark} appState={this.props.appState} handleFavoritesClick={this.props.handleFavoritesClick} parks={this.props.parks} />
                        <Grid container spacing={2} className={classes.mainGrid}>
                            <Grid item lg={10}>
                                <Card className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            Overview <Button onClick={() => this.handleParkEditClick(this.props.showPark.id)}></Button>
                                        </Typography>
                                        <Divider/>
                                        <Typography varient="h6">
                                            {this.props.showPark.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            Location
                                        </Typography>
                                        <Divider />
                                            <Typography>
                                                {this.props.showPark.state}
                                            </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid className={classes.mainGrid}>
                            <Grid>
                                <Card>
                                    <CardContent>
                                        <Typography className={classes.bold} variant="h6">
                                            Weather <Button onClick={() => this.handleParkDeleteClick(this.props.showPark.id)}></Button>
                                        </Typography>
                                    <Divider/>
                                    <Typography>
                                        {this.props.showPark.weather}
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
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
                                    {this.props.showPark.reviews.length ? this.renderReviews() : <Typography>No reviews for {this.props.showPark.name} yet. Write one today!</Typography>}
                                </Grid>
                        </Grid>
                    </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ParkContainer)