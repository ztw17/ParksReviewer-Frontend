import React from 'react';

function TagPage(props) {
    return (
        <div>
            <h3>Hello from the tag page for:</h3>
            <h1>{props.appState.showTag}</h1>
        </div>
    )
}

export default TagPage