import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import NavbarContainer from './containers/NavbarContainer';
import ParkContainer from './containers/ParkContainer';
import ProfileContainer from './containers/ProfileContainer';
import TagPageContainer from './containers/TagPageContainer';
import AddReviewForm from './components/AddReviewForm';
import EditReviewForm from './components/EditReviewForm';
import AllParksMap from './components/AllParksMap';
import AllTagsContainer from './containers/AllTagsContainer';
import AddParkForm from './components/AddParkForm';
import EditParkForm from './components/EditParkForm';

const font =  "'Quicksand', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    },
  },
});

class App extends React.Component {
  constructor() {
    super()
    let appState;
    localStorage.appState !== undefined ? appState = JSON.parse(localStorage.getItem('appState')) : appState = localStorage
    this.state = {
      firstName: appState.firstName || "",
      lastName: appState.lastName || "",
      username: appState.username || "",
      email: appState.email || "",
      userId: appState.userId || "",
      createdAtDate: appState.createdAtDate || "",
      userReviews: appState.userReviews || [],
      userFavorites: appState.userFavorites || [],
      loggedIn: appState.loggedIn || false,
      loginEmail: appState.loginEmail || "zweb@email.com",
      loginPassword: appState.loginPassword || "password",
      signUpFirstName: appState.signUpFirstName || "",
      signUpLastName: appState.signUpLastName || "",
      signUpUsername: appState.signUpUsername || "",
      signUpEmail: appState.signUpEmail || "",
      signUpPassword: appState.signUpPassword || "",
      signUpDate: appState.signUpDate || "",
      reviewContent: appState.reviewContent || "",
      reviewRating: appState.reviewRating || "",
      reviewVisitDate: appState.reviewVisitDate || "",
      viewport: appState.viewport || {},
      parks: appState.parks || [],
      tags: appState.tags || [],
      users: appState.users || [],
      reviews: appState.reviews || [],
      favorites: appState.favorites || [],
      showPark: appState.showPark || {},
      showUser: appState.showUser || {},
      showTag: appState || {},
      editReview: appState.editReview || {},
      editPark: appState.editPark || {},
      // selectedFile: appState.selectedFile || null,
      searchTerm: appState.searchTerm || "",
    }
  }

  componentDidMount() {
    this.getParks()
    this.getTags()
    this.getReviews()
    this.getUsers()
    this.getFavorites()
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

  getReviews = () => {
    fetch("http://localhost:3000/reviews")
      .then( resp => resp.json() )
      .then( reviewsData => this.setState({
        reviews: reviewsData
    }))
  }
  
  getUsers = () => {
    fetch("http://localhost:3000/users")
      .then( resp => resp.json() )
      .then( usersData => this.setState({
        users: usersData
    }))
  }

  getFavorites = () => {
    fetch("http://localhost:3000/favorites")
      .then( resp => resp.json() )
      .then( favoritesData => this.setState({
        favorites: favoritesData
    }))
  }

  handleAddReview = (newReview) => {
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newReview)
    })
    .then( resp => resp.json() )
    .then( newReview => {
      const newShowPark = this.state.showPark
      newShowPark.reviews = [...newShowPark.reviews, newReview]
      if (newReview.error) {
        alert(newReview.error)
    } else {
      this.setState({
        reviews: [...this.state.reviews, newReview],
        showPark: newShowPark,
        userReviews: [...this.state.userReviews, newReview]
        })
      }
    })
  }

  handleEditReviewClick = (review) => {
    this.setState({
      editReview: review
    })
  }

  handleEditedReview = (editedReview) => {
    fetch(`http://localhost:3000/reviews/${editedReview.review_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(editedReview)
    })
    .then( resp => resp.json() )
    .then( editedReview => {
      const newReviews = this.state.reviews.map(review => {
        if (review.id !== editedReview.id) {
          return review 
        } else {
          return editedReview }
        }
      )
      const newShowPark = this.state.showPark
      if ( this.state.showPark.reviews ) {
        newShowPark.reviews = newShowPark.reviews.map(review => {
          if (review.id !== editedReview.id) {
            return review
          } else {
            return editedReview }
        }
      )}  
      const newUserReviews = this.state.userReviews.map(review => {
        if (review.id !== editedReview.id) {
          return review
        } else {
          return editedReview }
        }
      )
      if (editedReview.error) {
        alert(editedReview.error)
      } else {
      this.setState({
        reviews: newReviews,
        showPark: newShowPark,
        userReviews: newUserReviews
        })
      }
    })
  }

  handleDeleteReview = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    .then( resp => resp.json() )
    .then( deletedReview => {
      const newReviews = this.state.reviews.filter(review => review.id !== deletedReview.id)
      const newShowPark = this.state.showPark
      if ( this.state.showPark.reviews ) {
        newShowPark.reviews = newShowPark.reviews.filter(review => review.id !== deletedReview.id) 
      } 
      const newUserReviews = this.state.userReviews.filter(review => review.id !== deletedReview.id)
      this.setState({
        reviews: newReviews,
        showPark: newShowPark,
        userReviews: newUserReviews
      })
    })
  }

  handleInputChange = (input, value) => {
    console.log(input, value) 
    this.setState({
      [input]: value
    })
  }

  handleParkClick = (park) => {
    this.setState({
      showPark: park,
      viewport: {
        latitude: park.latitude,
        longitude: park.longitude,
        zoom: 10,
        bearing: 0,
        pitch: 0,
      }
    })
  }

  handleTagClick = (tag) => {
    this.setState({
      showTag: tag
    })
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
      var newTags = this.state.tags
      const foundTag = newTags.find(tag => tag.id === newTag.id)
      if (foundTag) {
        foundTag.parks = newTag.parks
      } else {
        newTags = [...newTags, newTag]
      }
      this.setState({
        tags: newTags, 
        showPark: newShowPark
      })
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

  handleFavoritesClick = (id) => {
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        park_id: this.state.showPark.id
      })
    })
    .then( resp => resp.json() )
    .then( newFavorite => {
      this.setState({
        favorites: [...this.state.favorites, newFavorite],
        userFavorites: [...this.state.userFavorites, newFavorite]
      })
    })
  }

  handleFavoriteDelete = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE"
    })
    .then( resp => resp.json() )
    .then( deletedFavorite => {
      const newFavorites = this.state.favorites.filter(favorite => favorite.id !== deletedFavorite.id)
      const newUserFavorites = this.state.userFavorites.filter(favorite => favorite.id !== deletedFavorite.id)

      this.setState({
        favorites: newFavorites,
        userFavorites: newUserFavorites
      })
    })
  }

  handleAddPark = (newPark) => {
    fetch("http://localhost:3000/parks",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newPark)
    })
    .then( resp => resp.json() )
    .then( newPark => {
      if (newPark.error) {
        alert (newPark.error)
      } else {
        this.setState({
          parks: [...this.state.parks, newPark],
          showPark: newPark,
          viewport: {
            latitude: newPark.latitude,
            longitude: newPark.longitude,
            zoom: 10,
            bearing: 0,
            pitch: 0
          }
        })
      }
    })
  }

  editPark = (park) => {
    this.setState({
      editPark: park
    })
  }

  handleEditedPark = (editedPark) => {
    fetch(`http://localhost:3000/parks/${editedPark.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(editedPark)
    })
    .then( resp => resp.json() )
    .then( editedPark => {
      const newParks = this.state.parks.map(park => {
        if (park.id !== editedPark.id) {
          return park
        } else {
          return editedPark }
        }
      )
      if (editedPark.error) {
        alert(editedPark.error)
      } else {
      this.setState({
        parks: newParks,
        showPark: editedPark,
        viewport: {
          latitude: editedPark.latitude,
          longitude: editedPark.longitude,
          zoom: 10,
          bearing: 0,
          pitch: 0
        }
        })
      }
    })
  }

  handleParkDelete = (id) => {
    fetch(`http://localhost:3000/parks/${id}`, {
      method: "DELETE"
    })
    .then( resp => resp.json() )
    .then( deletedPark => {
      const newParks = this.state.parks.filter(park => park.id !== deletedPark.id)
      this.setState({
        parks: newParks
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
      if (resp.error === "Invalid credentials, please try again") {
        alert(resp.error)
      } else {
        this.setState({
          loggedIn: true,
          firstName: resp.first_name,
          lastName: resp.last_name,
          username: resp.username,
          userId: resp.id,
          email: resp.email,
          userReviews: resp.reviews,
          userFavorites: resp.favorites,
          createdAtDate: resp.created_at
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
        signUpDate: "",
        loginEmail: "",
        loginPassword: "",
      })
      this.props.history.push('/')
    })
  }

  // fileSelectedHandler = (event) => {
    // this.setState({
    //   selectedFile: event.target.files[0]
    // })
    // console.log(event.target.files[0])
  // }

  // fileUploadHandler = () => {
  // }

  handleLogout = () => {
    this.resetUserObj()
    this.props.history.push('/')
    window.location.reload()
  }

  resetUserObj = () => {
    localStorage.clear()
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      userId: "",
      createdAtDate: "",
      userReviews: [],
      userFavorites: [],
      loggedIn: false,
      loginEmail: "zweb@email.com",
      loginPassword: "password",
      signUpFirstName: "",
      signUpLastName: "",
      signUpUsername: "",
      signUpEmail: "",
      signUpDate: "",
      signUpPassword: "",
      reviewContent: "",
      reviewRating: "",
      reviewVisitDate: "",
      viewport: {},
      parks: [],
      tags: [],
      users: [],
      reviews: [],
      favorites: [],
      showPark: {},
      showUser: {},
      showTag: {},
      editReview: {},
      editPark: {},
      // selectedFile: null,
      searchTerm: ""
    })
  }

  handleLogoClick = () => {
    this.props.history.push('/')
  }

  updateViewport = (viewport) => {
    this.setState({
      viewport: viewport
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredSearch = () => {
    return this.state.tags.filter(tag => {
      return tag.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavbarContainer loggedIn={this.state.loggedIn} history={this.props.history} parks={this.state.parks} handleLogout={this.handleLogout} handleParkClick={this.handleParkClick} handleLogoClick={this.handleLogoClick}/>
            <Switch>
              <Route path='/login' render={() => <Login appState={this.state} handleInputChange={this.handleInputChange} validateUserLogin={this.validateUserLogin}/>}/>
              <Route path='/signup' render={() => <SignUp appState={this.state} handleInputChange={this.handleInputChange} validateSignUpUser={this.validateSignUpUser} fileSelectedHandler={this.fileSelectedHandler}/>}/>
              <Route path='/profile' render={() => <ProfileContainer appState={this.state} userReviews={this.state.userReviews} parks={this.state.parks} handleEditReviewClick={this.handleEditReviewClick} handleDeleteReview={this.handleDeleteReview} handleParkClick={this.handleParkClick} handleFavoriteDelete={this.handleFavoriteDelete} history={this.props.history}/>}/>
              <Route path='/park/new' render={() => <AddParkForm appState={this.state} history={this.props.history} handleAddPark={this.handleAddPark}/>}/>
              <Route path='/park/:id/edit' render={() => <EditParkForm appState={this.state} editPark={this.state.editPark} parks={this.state.parks} handleEditedPark={this.handleEditedPark} handleParkClick={this.handleParkClick} showPark={this.state.showPark} history={this.props.history} />}/>         
              <Route path='/park/:id' render={() => <ParkContainer appState={this.state} showPark={this.state.showPark} updateViewport={this.updateViewport} handleFavoritesClick={this.handleFavoritesClick} handleTagClick={this.handleTagClick} handleTagAdd={this.handleTagAdd} handleTagDelete={this.handleTagDelete} handleEditReviewClick={this.handleEditReviewClick} handleDeleteReview={this.handleDeleteReview} editPark={this.editPark} handleParkDelete={this.handleParkDelete} viewport={this.state.viewport} tags={this.state.tags} parks={this.state.parks} reviews={this.state.reviews} users={this.state.users} history={this.props.history}/>}/>
              <Route path='/tag/:id' render={() => <TagPageContainer appState={this.state} showTag={this.state.showTag} handleParkClick={this.handleParkClick} parks={this.state.parks} history={this.props.history}/>}/>
              <Route path='/review/park/:id' render={() => <AddReviewForm appState={this.state} showPark={this.state.showPark} history={this.props.history} handleAddReview={this.handleAddReview} fileSelectedHandler={this.fileSelectedHandler}/>}/>
              <Route path='/review/:id/edit' render={() => <EditReviewForm appState={this.state} editReview={this.state.editReview} handleEditedReview={this.handleEditedReview} showPark={this.state.showPark} handleParkClick={this.handleParkClick} reviewInfo={this.state.reviewInfo} parks={this.state.parks} history={this.props.history}/>}/>
              <Route path='/map' render={() => <AllParksMap parks={this.state.parks} history={this.props.history} handleParkClick={this.handleParkClick}/>}/>
              <Route path='/tags' render={() => <AllTagsContainer tags={this.filteredSearch()} searchTerm={this.state.searchTerm} history={this.props.history} handleTagClick={this.handleTagClick} handleSearchChange={this.handleSearchChange} />}/>
              <Route path='/' render={() => <LandingPage appState={this.state} parks={this.state.parks} showPark={this.state.showpark} history={this.props.history} handleParkClick={this.handleParkClick}/>}/>
            </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(App)