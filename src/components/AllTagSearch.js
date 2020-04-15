import React from "react";
import { withStyles, TextField } from '@material-ui/core';

const styles = theme => ({
    search: {
        '& > *': {
            // margin: theme.spacing(10),
            marginTop: 80,
            marginBttom: 20,
            width: '80ch',
        },
    },
})

function AllTagSearch(props) {
    const {classes} = props

    return (
        <form className={classes.search} noValidate autoComplete="off">
            <TextField 
                id="standard-basic" 
                label="Search a tag name" 
                onChange={props.handleSearchChange}
                value={props.searchTerm}
            />
        </form>
    )
}

export default withStyles(styles)(AllTagSearch)