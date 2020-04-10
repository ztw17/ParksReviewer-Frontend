import React from 'react'

export default function SearchSuggestions(props) {
  const options = props.results.map(result => (
    <li key={result.id}>
      {result.name}
    </li>
  ))
  return <ul>{options}</ul>
}

// const PARKS = "http://localhost:3000/parks"

// // variant="h6" className={classes.title}
// class LandingPage extends React.Component {
//   state = {
//     query: "",
//     results: [],
//   }

//   getInfo = () => {
//     fetch(PARKS)
//       .then( resp => resp.json() )
//       .then( data => {
//         this.setState({
//           results: data                        
//         })
//       })
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       query: event.target.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//       }
//     })
//   }

//   render() {
//     const {classes} = this.props

//     return (
//       <Paper className={classes.paperContainer}>
//         <Grid>
//           <Typography style={{textAlign: "center"}} variant="h2">
//             Find your next adventure
//           </Typography >
//         </Grid>
//           <Grid container justify = "center"> 
//               <form className={classes.root} noValidate autoComplete="off">
//                   <TextField 
//                     InputProps={{className: classes.input}} 
//                     InputLabelProps={{className: classes.floatingLabelFocusStyle}}
//                     id="filled-basic" 
//                     label="Enter a park, location, or tag name" 
//                     variant="filled" 
//                     ref={input => this.search = input}
//                     onChange={this.handleInputChange}
//                   />
//                   <SearchSuggestions results={this.state.results} />
//               </form>
//               <Button variant="contained">Search</Button>
//           </Grid>
//       </Paper>
//     )
//   }
// }

// export default withStyles(styles)(LandingPage)