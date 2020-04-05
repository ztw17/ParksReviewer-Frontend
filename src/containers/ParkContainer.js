import React, { Fragment } from 'react'
import { withStyles, Paper, Typography, Divider, Card, CardContent, Grid, CssBaseline, Container } from '@material-ui/core';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';
import Sidebar from '../components/Sidebar';
import ReviewContainer from './ReviewContainer';

const styles = theme => ({
    root: {
        // margin: "20px",
        padding: "40px",
        backgroundColor: "#dfe1e6",
    },
    card: {
        display: 'flex',
        margin: "2px"
    },
    cardDetails: {
        flex: 1,
    },
    mainGrid: {
        marginTop: theme.spacing(2),
    },
})

class ParkPage extends React.Component {
    
    renderTags = () => {
        // console.log(this.props.showPark.tags)
        return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} history={this.props.history}/>)
    }

    renderReviews = () => {
        console.log(this.props.showPark.reviews)
        return this.props.showPark.reviews.map(review => <ReviewContainer reviewInfo={review} reviews={this.props.reviews}/>)
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
                    <main className={classes.root}>
                        <ParkBanner showPark={this.props.showPark}/>
                                <Card>
                                    <CardContent>
                                        <Typography>
                                            {this.props.showPark.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            <Grid container spacing={2} className={classes.mainGrid}>
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6">
                                                Location:
                                            </Typography>
                                            <Divider />
                                            <Typography>
                                                {this.props.showPark.state}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Divider/>
                                <Grid item xs={9}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6">
                                                Weather:
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
                                <Grid item={9}>
                                    <Card>
                                        <Typography variant="h6">
                                            PLACEHOLDER FOR MAP
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card>
                                        <Sidebar showPark={this.props.showPark} renderTags={this.renderTags}/>
                                    </Card>
                                </Grid>
                            </Grid>
                        {/* <Card> */}
                            <Typography>User Reviews</Typography>
                            {this.renderReviews()}
                        {/* </Card> */}
                    </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ParkPage)



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