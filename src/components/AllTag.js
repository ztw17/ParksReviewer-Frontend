import React from 'react';
import { withStyles, CssBaseline, Chip } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5,
        background: 'linear-gradient(to right bottom, #3399ff, #ff9966)'
    }
})

function AllTag(props) {

    const clickedTag = (id) => {
        props.history.push(`/tag/${id}`)
        const clickedTagObj = props.tags.find(tag => tag.id === id)
        props.handleTagClick(clickedTagObj)
    }

    const {classes} = props

    return (
        <React.Fragment>
        <CssBaseline />
            <Chip 
                label={props.tagInfo.name}
                onClick={() => clickedTag(props.tagInfo.id)}
                clickable
                color="primary"
                className={classes.tag}
            />
        </React.Fragment>
    )
}

export default withStyles(styles)(AllTag)