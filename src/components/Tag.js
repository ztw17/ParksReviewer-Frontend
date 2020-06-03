import React from 'react';
import { withStyles, CssBaseline, Chip } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5,
        color: "white"
    }
})

function Tag(props) {

    const clickedTag = (id) => {
        props.history.push(`/tags/${id}`)
        const clickedTagObj = props.tags.find(tag => tag.id === id)
        props.handleTagClick(clickedTagObj)
    }

    const deleteTag = (id) => {
        props.handleTagDelete(id)
    }

    const {classes} = props

    return (
        <React.Fragment>
        <CssBaseline />
            <Chip 
                key={props.tagInfo.id}
                label={props.tagInfo.name}
                onClick={() => clickedTag(props.tagInfo.id)}
                onDelete={() => deleteTag(props.tagInfo.id)}
                // color="primary" 
                // variant="outlined" 
                className={classes.tag}
            />
        </React.Fragment>
    )
}

export default withStyles(styles)(Tag)