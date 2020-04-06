import React, { Fragment } from 'react'
import { withStyles, Paper, Typography, Divider, Card, CardContent, Grid, Box, Button } from '@material-ui/core';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';
// import Sidebar from '../components/Sidebar';
import ReviewContainer from './ReviewContainer';
import AddTag from '../components/AddTag'
// import AddReviewModal from '../components/AddReviewModal';

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
        alignItems: 'center'
    }
})

class ParkPage extends React.Component {
    
    renderTags = () => {
        // console.log(this.props.showPark.tags)
        return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} handleTagDelete={this.props.handleTagDelete} history={this.props.history}/>)
    }

    renderReviews = () => {
        // console.log(this.props.showPark)
        return this.props.showPark.reviews.map(review => <ReviewContainer reviewInfo={review} reviews={this.props.reviews}/>)
    }

    handleAddReviewClick = (id) => {
        console.log(id)
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
                                    <Typography variant="h6">
                                        PLACEHOLDER FOR MAP
                                    </Typography>
                                </Card>
                            </Grid>
                            <Divider/>
                        <Grid className={classes.mainGrid}>
                            <Card>
                                <Typography component="h3" variant="h4">
                                    User Reviews
                                </Typography>
                                <Button onClick={() => this.handleAddReviewClick(this.props.showPark.id)}>
                                    Add A Review
                                </Button>
                            </Card>
                            <Card className={classes.reviews}>
                                {this.renderReviews()}
                            </Card>
                        </Grid>
                    </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ParkPage)


            //     <React.Fragment>
            //         <main className={classes.root}>
            //             <ParkBanner showPark={this.props.showPark}/>
            //                     <Card>
            //                         <CardContent>
            //                             <Typography>
            //                                 {this.props.showPark.description}
            //                             </Typography>
            //                         </CardContent>
            //                     </Card>
            //                 <Grid container spacing={2} className={classes.mainGrid}>
            //                     <Grid item xs={2}>
            //                         <Card>
            //                             <CardContent>
            //                                 <Typography variant="h6">
            //                                     Location
            //                                 </Typography>
            //                                 <Divider />
            //                                 <Typography>
            //                                     {this.props.showPark.state}
            //                                 </Typography>
            //                             </CardContent>
            //                         </Card>
            //                     </Grid>
            //                     <Divider/>
            //                     <Grid item lg={10}>
            //                         <Card>
            //                             <CardContent>
            //                                 <Typography variant="h6">
            //                                     Weather
            //                                 </Typography>
            //                                 <Divider/>
            //                                 <Typography>
            //                                     {this.props.showPark.weather}
            //                                 </Typography>
            //                             </CardContent>
            //                         </Card>
            //                     </Grid>
            //                 </Grid>
            //                 <Grid container spacing={2} className={classes.mainGrid}>
            //                     <Grid item xs={3}>
            //                         <Card>
            //                             <Sidebar showPark={this.props.showPark} tags={this.props.tags} parks={this.props.parks} renderTags={this.renderTags}/>
            //                         </Card>
            //                     </Grid>
            //                     <Grid item={9}>
            //                         <Card>
            //                             <Typography variant="h6">
            //                                 PLACEHOLDER FOR MAP
            //                             </Typography>
            //                         </Card>
            //                     </Grid>
            //                 </Grid>
            //                 <Divider/>
            //             {/* <Card> */}
            //                 <Typography>User Reviews</Typography>
            //                 {this.renderReviews()}
            //             {/* </Card> */}
            //         </main>
            // </React.Fragment>



            // <div className={classes.root}>
            //     <Paper>
            //     <ParkBanner showPark={this.props.showPark}/>
            //         <Card>
            //             <CardContent>
            //                 <Typography>
            //                     {this.props.showPark.description}
            //                 </Typography>
            //             </CardContent>
            //         </Card>
            //         <Divider/>
                    // <Card>
                    //     <CardContent>
                    //         <Typography>
                    //             Tags for {this.props.showPark.name}:
                    //         </Typography>
                    //         <Typography>
                    //             {this.renderTags()}
                    //         </Typography>
                    //     </CardContent>
                    // </Card>
            //         <Divider/>
            //         <Grid container spacing={3}>
            //             <Grid item xs={4}>
            //                 <Card>
            //                     <CardContent>
            //                         <Typography>
            //                             Location:
            //                         </Typography>
            //                         <Typography>
            //                             {this.props.showPark.state}
            //                         </Typography>
            //                     </CardContent>
            //                 </Card>
            //             </Grid>
            //             <Divider/>
            //             <Grid item xs={8}>
            //                 <Card>
            //                     <CardContent>
            //                         <Typography>
            //                             Weather:
            //                         </Typography>
            //                         <Typography>
            //                             {this.props.showPark.weather}
            //                         </Typography>
            //                     </CardContent>
            //                 </Card>
            //             </Grid>
            //         </Grid>
            //     </Paper>
            // </div>