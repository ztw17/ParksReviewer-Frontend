import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

class Tag extends React.Component {

    clickedTag = (id) => {
        console.log(id)
        this.props.history.push(`/tag/${id}`)
        const clickedTagObj = this.props.tags.find(tag => tag.id === id)
        this.props.handleTagClick(clickedTagObj)
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Chip 
                        label={this.props.tagInfo.name}
                        onClick={() => this.clickedTag(this.props.tagInfo.id)}
                        color="primary" 
                        variant="outlined" 
                    />
                </Container>
            </React.Fragment>
        )
    }
}

export default Tag

{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '15vh' }} /> */}