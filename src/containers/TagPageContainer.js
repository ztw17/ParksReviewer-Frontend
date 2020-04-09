import React, { Fragment } from 'react';
import TagParkCard from '../components/TagParkCard';

class TagPage extends React.Component {
    // console.log(props.appState.showTag.parks)

    renderTagParks = () => {
        console.log(this.props.appState.showTag.parks)
        return this.props.appState.showTag.parks.map(park => <TagParkCard parkInfo={park} handleParkClick={this.props.handleTagClick} history={this.props.history}/>)
    }

    handleParkClick = () => {
        console.log("Park Clicked")
    }

    titleCase(tagName) {
        tagName = tagName.toLowerCase().split(' ');
        for (var i = 0; i < tagName.length; i++) {
            tagName[i] = tagName[i].charAt(0).toUpperCase() + tagName[i].slice(1); 
        }
        return tagName.join(' ');
    }

    render() {
        return (
            <div>
                <h1>{this.titleCase(this.props.appState.showTag.name)}</h1>
                <p>{this.renderTagParks()}</p>
            </div>
        )
    }
}

export default TagPage