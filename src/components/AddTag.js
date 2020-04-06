import React from 'react';
import TextField from '@material-ui/core/TextField';

class AddTag extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
        }
    }

    handleInputChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    createNewTag = (event) => {
        event.preventDefault()
        this.props.handleTagAdd(this.state.name)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
            <form onChange={this.handleInputChange} onSubmit={this.createNewTag}>
                <TextField name="tag" id="" label="Add a tag!" value={this.state.name} />
            </form>
        )
    }
}

export default AddTag