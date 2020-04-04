import React from 'react';

function UserProfile(props) {
    return (
        <h1>Hi, {props.appState.firstName}!</h1>
    )
}

export default UserProfile