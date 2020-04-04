import React from 'react'
import { withStyles, Paper, Typography, Divider, Card, CardContent, Grid } from '@material-ui/core';
import ParkBanner from '../components/ParkBanner';
import Tag from '../components/Tag';

const styles = theme => ({
    root: {
        margin: "12px",
        padding: "12px",
    },
    card: {
        display: 'flex',
        margin: "4px"
    },
    cardDetails: {
        flex: 1,
    },
    //   cardMedia: {
    //     width: 160,
    // },
})

class ParkPage extends React.Component {
    
    renderTags = () => {
        return this.props.showPark.tags.map(tag => <Tag tagInfo={tag} tags={this.props.tags} handleTagClick={this.props.handleTagClick} history={this.props.history}/>)
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.root}>
                <Paper>
                <ParkBanner showPark={this.props.showPark}/>
                    <Card>
                        <CardContent>
                            <Typography>
                                {this.props.showPark.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Divider/>
                    <Card>
                        <CardContent>
                            <Typography>
                                Tags for {this.props.showPark.name}:
                            </Typography>
                            <Typography>
                                {this.renderTags()}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography>
                                        Location:
                                    </Typography>
                                    <Typography>
                                        {this.props.showPark.state}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Divider/>
                        <Grid item xs={8}>
                            <Card>
                                <CardContent>
                                    <Typography>
                                        Weather:
                                    </Typography>
                                    <Typography>
                                        {this.props.showPark.weather}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(ParkPage)