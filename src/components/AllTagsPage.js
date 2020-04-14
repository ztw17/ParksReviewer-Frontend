import React from 'react';
import AllTag from './AllTag';
import { withStyles, Card, Container } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5
    },
    card: {
        margin: 125,
        alignItem: "center",
        maxWidth: "1100px"
    }
})

function AllTagsPage(props) {

    const {classes} = props

    const renderTags = () => {
        return props.tags.map(tag => <AllTag tagInfo={tag} tags={props.tags} handleTagClick={props.handleTagClick} history={props.history} />)
    }

    return (
        <Container className={classes.card}>{renderTags()}</Container>
    )
}

export default withStyles(styles)(AllTagsPage)