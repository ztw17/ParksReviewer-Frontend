import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    let appState;
    localStorage.appState !== undefined ? appState = JSON.parse(localStorage.getItem('appState')) : appState = localStorage
    this.state = {
      user: appState.user || "",
      firstName: appState.firstName || "",
      lastName: appState.lastName || "",
      username: appState.username || "",
      email: appState.email || "",
      userId: appState.userId || "",
      loggedIn: appState.loggedIn || false,
      loginEmail: appState.loginEmail || "zweb@email.com",
      loginPassword: appState.loginPassword || "password",
      signUpFirstName: appState.signUpFirstName || "",
      signUpLastName: appState.signUpLastName || "",
      signUpUsername: appState.signUpUsername || "",
      signUpEmail: appState.signUpEmail || "",
      signUpPassword: appState.signUpPassword || "",
      userReviews: appState.userReviews || ""
    }
  }

  handleInputChange = (input, value) => {
    console.log(input, value) 
    this.setState({
      [input]: value
    })
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
        // console.log(resp)
        this.setState({
          loggedIn: true,
          user: resp.first_name,
          userId: resp.id,
          email: resp.email,
          userReviews: resp.reviews
        })
        this.props.history.push('/')
      }
    })
  }

  validateUserLogin = (event) => {
    event.preventDefault()
    if (this.state.loginEmail && this.state.loginPassword) {
      this.loginUser()
    } else {
      alert("Please complete both the email and password login fields")
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
        firstName: this.state.signUpFirstName,
        lastName: this.state.signUpLastName,
        username: this.state.signUpUsername,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword
      })
    })
    .then( resp => resp.json() )
    .then( resp => {
      if (resp.errors) {
        alert(resp.errors.join("\n"))
      }
      this.setState({
        loggedIn: true,
        user: resp.first_name,
        userId: resp.id,
        email: resp.email,
        userReviews: resp.reviews,
        signUpFirstName: "",
        signUpLastName: "",
        signUpUsername: "",
        signUpEmail: "",
        signUpPassword: "",
        loginEmail: "",
        loginPassword: ""
      })
    })
  }

  resetUserObj = () => {
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

  render() {
    console.log(this.state)
    return (
      <div>
        <Route render={(props) => <Navbar {...props} appState={this.state}/>}/>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} handleInputChange={this.handleInputChange} validateUserLogin={this.validateUserLogin} appState={this.state}/>}/>
            <Route path='/signup' render={(props) => <SignUp {...props} handleInputChange={this.handleInputChange} />}/>
            <Route path='/' render={() => <LandingPage />}/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)
