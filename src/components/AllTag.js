import React from 'react';
import { withStyles, CssBaseline, Chip } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5,
        color: "white",
        // width: 200,
        // height: 60,
        // background: 'linear-gradient(to right bottom, #113649, #669D7A, #FCBD62)',
    }
})

function AllTag(props) {
    const {classes} = props

    const clickedTag = (id) => {
        props.history.push(`/tags/${id}`)
        const clickedTagObj = props.tags.find(tag => tag.id === id)
        props.handleTagClick(clickedTagObj)
    }

    return (
        <React.Fragment>
        <CssBaseline />
        { props.isClickable ?
            <Chip
                key={props.tagInfo.id}
                label={props.tagInfo.name}
                onClick={() => clickedTag(props.tagInfo.id)}
                clickable
                className={classes.tag}
            />
            :
            <Chip
                key={props.tagInfo.id}
                label={props.tagInfo.name}
                className={classes.tag}
            />
        }
        </React.Fragment>
    )
}

export default withStyles(styles)(AllTag)