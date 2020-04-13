import React from 'react';
import AllTag from './AllTag';
import { withStyles, Card } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5
    },
    card: {
        margin: 200,
        alignItem: "center"
    }
})

function AllTagsPage(props) {

    const {classes} = props

    const renderTags = () => {
        return props.tags.map(tag => <AllTag tagInfo={tag} tags={props.tags} handleTagClick={props.handleTagClick} history={props.history} />)
    }

    return (
        <Card className={classes.card}>{renderTags()}</Card>
    )
}

export default withStyles(styles)(AllTagsPage)