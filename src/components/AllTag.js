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
        props.history.push(`/tag/${id}`)
        const clickedTagObj = props.tags.find(tag => tag.id === id)
        props.handleTagClick(clickedTagObj)
    }

    // { props.renderParkName ?
    //     <Grid item xs={2} container direction="column">
    //       { props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleEditClick(props.reviewInfo.id)}>Edit</Button> : null}
    //       { props.reviewInfo.user.id === props.appState.userId ? <Button onClick={() => handleDeleteClick(props.reviewInfo.id)}>Delete</Button> : null}
    //     </Grid>
    //     : null }

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
                // onClick={() => clickedTag(props.tagInfo.id)}
                // clickable
                className={classes.tag}
            />
        }
        </React.Fragment>
    )
}

export default withStyles(styles)(AllTag)