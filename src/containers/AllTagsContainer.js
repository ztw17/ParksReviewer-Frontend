import React from 'react';
import AllTag from '../components/AllTag';
import AllTagSearch from '../components/AllTagSearch';
import { withStyles, Grid, Container } from '@material-ui/core';

const styles = theme => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "#dee0e3",
        width: "100%",
        height: "100%"
    },
    container: {
        alignItem: "center",
        maxWidth: "1100px"
    },
})

function AllTagsContainer(props) {
    const {classes} = props

    const renderTags = () => {
        return props.tags.map(tag => <AllTag isClickable={true} tagInfo={tag} tags={props.tags} handleTagClick={props.handleTagClick} history={props.history} />)
    }
    
    return (
        <Grid container className={classes.root}>
            <AllTagSearch handleSearchChange={props.handleSearchChange} searchTerm={props.searchTerm}/>
            <Container className={classes.container}>{renderTags()}</Container>
        </Grid>
    )
}

export default withStyles(styles)(AllTagsContainer)