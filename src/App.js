import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import NavbarContainer from './containers/NavbarContainer';
import ParkContainer from './containers/ParkContainer';
import ProfileContainer from './containers/ProfileContainer';
import TagPageContainer from './containers/TagPageContainer';
import AddReivewForm from './components/AddReviewForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    let appState;
    localStorage.appState !== undefined ? appState = JSON.parse(localStorage.getItem('appState')) : appState = localStorage
    this.state = {
      // user: appState.user || "",
      firstName: appState.firstName || "",
      lastName: appState.lastName || "",
      username: appState.username || "",
      email: appState.email || "",
      userId: appState.userId || "",
      userReviews: appState.userReviews || "",
      loggedIn: appState.loggedIn || false,
      loginEmail: appState.loginEmail || "zweb@email.com",
      loginPassword: appState.loginPassword || "password",
      signUpFirstName: appState.signUpFirstName || "",
      signUpLastName: appState.signUpLastName || "",
      signUpUsername: appState.signUpUsername || "",
      signUpEmail: appState.signUpEmail || "",
      signUpPassword: appState.signUpPassword || "",
      // signUpAvatar: appState.signUpAvatar || "",
      parks: [],
      tags: [],
      showPark: {},
      showUser: {},
      showTag: {},
    }
  }

  componentDidMount() {
    this.getParks()
    this.getTags()
  }
  
  getParks = () => {
    fetch("http://localhost:3000/parks")
      .then( resp => resp.json() )
      .then( parksData => this.setState({
        parks: parksData
    }))
  }

  getTags = () => {
    fetch("http://localhost:3000/tags")
      .then( resp => resp.json() )
      .then( tagsData => this.setState({
        tags: tagsData
    }))
  }

  handleInputChange = (input, value) => {
    // console.log(input, value) 
    this.setState({
      [input]: value
    })
  }

  handleParkClick = (park) => {
    // console.log(park)
    this.setState({
      showPark: park
    })
  }

  handleTagClick = (tag) => {
    // console.info('You clicked the Chip.');
    // console.log(tag)
    this.setState({
      showTag: tag
    })
    // console.log(showTag)
  };

  handleTagAdd = (name) => {
    fetch("http://localhost:3000/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify({
            name: name,
            park_id: this.state.showPark.id
        })
    })
    .then( resp => resp.json() )
    .then( newTag => {
        const newShowPark = this.state.showPark
        newShowPark.tags = [...newShowPark.tags, newTag]
        
        this.setState({
          tags: [...this.state.tags, newTag], 
          showPark: newShowPark
        })
    // .catch(error => {
    //     console.log("Error:", error)
    //   })
    })
  }

  handleTagDelete = (id) => {
    fetch(`http://localhost:3000/tags/${id}`, {
      method: "DELETE"
    })
    .then( resp => resp.json())
    .then( deletedTag => {
      const newTags = this.state.tags.filter(tag => tag.id !== deletedTag.id)
      const newShowPark = this.state.showPark
      newShowPark.tags = newShowPark.tags.filter(tag => tag.id !== deletedTag.id)

      this.setState({
        tags: newTags,
        showPark: newShowPark
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      const json = JSON.stringify(this.state);
      localStorage.setItem("appState", json);
    }
  }

  validateUserLogin = (event) => {
    event.preventDefault()
    if (this.state.loginEmail && this.state.loginPassword) {
      this.loginUser()
    } else {
      alert("Please complete both the email and password login fields")
    }
  }

  loginUser = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword
      })
    })
    .then( resp => resp.json() )
    .then( resp => {
      if (resp[0] === "Invalid credentials, please try again") {
        alert(resp[0])
      } else {
        this.setState({
          loggedIn: true,
          firstName: resp.first_name,
          lastName: resp.last_name,
          username: resp.username,
          userId: resp.id,
          email: resp.email,
          userReviews: resp.reviews
        })
        this.props.history.push('/')
      }
    })
  }

  validateSignUpUser = (event) => {
    event.preventDefault()
    if (this.state.signUpFirstName && this.state.signUpLastName && this.state.signUpUsername && this.state.signUpEmail && this.state.signUpPassword) {
      if (this.state.signUpEmail)
      this.signUpUser()
    } else {
      alert("Please fill out all fields of the sign up form!")
    }
  }

  signUpUser = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.signUpFirstName,
        last_name: this.state.signUpLastName,
        username: this.state.signUpUsername,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        image: this.state.signUpAvatar
      })
    })
    .then( resp => resp.json() )
    .then( resp => {
      if (resp.errors) {
        alert(resp.errors.join("\n"))
      }
      this.setState({
        loggedIn: true,
        firstName: resp.user.first_name,
        lastName: resp.user.last_name,
        username: resp.user.username,
        userId: resp.user.id,
        email: resp.user.email,
        signUpFirstName: "",
        signUpLastName: "",
        signUpUsername: "",
        signUpEmail: "",
        signUpPassword: "",
        // signUpAvatar: "",
        loginEmail: "",
        loginPassword: "",
      })
      this.props.history.push('/')
    })
  }

  // fileSelectedHandler = (event) => {
  //   console.log(event.target.files[0])

  // }

  handleLogout = () => {
    this.resetUserObj()
    this.props.history.push('/')
  }

  resetUserObj = () => {
    localStorage.clear()
    this.setState({
      user: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      userId: "",
      loggedIn: false,
      userReviews: ""
    })
  }

  handleLogoClick = () => {
    this.props.history.push('/')
  }

  render() {
    // console.log(this.state.userReviews)
    // console.log(this.state.tags)

    return (
      <div>
        <NavbarContainer loggedIn={this.state.loggedIn} history={this.props.history} parks={this.state.parks} handleLogout={this.handleLogout} handleParkClick={this.handleParkClick} handleLogoClick={this.handleLogoClick}/>
          <Switch>
            <Route path='/login' render={() => <Login appState={this.state} handleInputChange={this.handleInputChange} validateUserLogin={this.validateUserLogin}/>}/>
            <Route path='/signup' render={() => <SignUp appState={this.state} handleInputChange={this.handleInputChange} validateSignUpUser={this.validateSignUpUser} fileSelectedHandler={this.fileSelectedHandler}/>}/>
            <Route path='/profile' render={() => <ProfileContainer appState={this.state} userReviews={this.state.userReviews}/>}/>
            <Route path='/park/:id' render={() => <ParkContainer appState={this.state} showPark={this.state.showPark} handleTagClick={this.handleTagClick} handleTagAdd={this.handleTagAdd} handleTagDelete={this.handleTagDelete} tags={this.state.tags} parks={this.state.parks} history={this.props.history}/>}/>
            <Route path='/tag/:id' render={() => <TagPageContainer appState={this.state} showTag={this.state.showTag}/>}/>
            <Route path='/review/park/:id' render={() => <AddReivewForm appState={this.state} showPark={this.state.showPark}/>}/>
            <Route path='/' render={() => <LandingPage appState={this.state} />}/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)
