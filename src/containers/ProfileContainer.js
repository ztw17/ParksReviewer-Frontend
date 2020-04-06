import React from 'react';
import ReviewContainer from './ReviewContainer';

class UserProfile extends React.Component {

    renderUserReviews = () => {
        console.log(this.props.userReviews)
        return this.props.userReviews.map(review => <ReviewContainer reviewInfo={review} reviews={this.props.reviews}/>)
    }

    render() {
        return (
            <div>
                <h1>Hi, {this.props.appState.firstName}!</h1>
                <h3>{this.renderUserReviews()}</h3>
            </div>
        )
    }
}

export default UserProfile