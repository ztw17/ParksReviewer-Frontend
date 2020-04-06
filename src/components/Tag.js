import React from 'react';
import { withStyles, CssBaseline, Chip } from '@material-ui/core';

const styles = theme => ({
    tag: {
        margin: 5
    }
})

class Tag extends React.Component {

    clickedTag = (id) => {
        this.props.history.push(`/tag/${id}`)
        const clickedTagObj = this.props.tags.find(tag => tag.id === id)
        this.props.handleTagClick(clickedTagObj)
    }

    deleteTag = (id) => {
        this.props.handleTagDelete(id)
    }

    render() {
        const {classes} = this.props

        return (
            <React.Fragment>
            <CssBaseline />
                <Chip 
                    label={this.props.tagInfo.name}
                    onClick={() => this.clickedTag(this.props.tagInfo.id)}
                    onDelete={() => this.deleteTag(this.props.tagInfo.id)}
                    color="primary" 
                    variant="outlined" 
                    className={classes.tag}
                />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Tag)