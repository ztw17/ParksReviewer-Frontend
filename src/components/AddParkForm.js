import React from 'react';
import { Button, Card, Paper, CssBaseline, TextField, Grid, Typography, withStyles, Container, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import Image from '../images/Sequoia.jpg';

const styles = theme => ({
    paper: {
        margin: "auto",
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "#434C5C",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#B1C958"
    },
    backGroundImg: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: 80,
    },
    inputLabel: {
        left: 20
    },
    heading: {
        fontFamily: font
    }
});

const font =  "'Amatic SC', cursive";

class AddParkForm extends React.Component {
    constructor() {
        super()
        this.state = {
            parkName: "",
            parkState: "",
            parkDescription: "",
            parkWeather: "",
            parkLongitude: "",
            parkLatitude: "",
            parkImage: "",
        }
    }

    handleInputChange = (event) => {
        // console.log(event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    createNewPark = (event) => {
        event.preventDefault()
        const newPark = {
            name: this.state.parkName,
            state: this.state.parkState,
            description: this.state.parkDescription,
            weather: this.state.parkWeather,
            longitude: this.state.parkLongitude,
            latitude: this.state.parkLatitude,
            image: this.state.parkImage,
            creator_id: this.props.appState.userId,
        }
        this.props.handleAddPark(newPark)
        this.setState({
            parkName: "",
            parkState: "",
            parkDescription: "",
            parkWeather: "",
            parkLongitude: "",
            parkLatitude: "",
            parkImage: "",
        })
    };

    render() {
        const { classes } = this.props
    
        return (
          <Paper className={classes.backGroundImg}>
                <Container component="main" maxWidth="sm">
                    <Card className={classes.paper}>
                    <CssBaseline />
                        <div>
                        <Grid align="center">
                            <Typography className={classes.heading} component="h1" variant="h3">
                            Add A New Park
                            </Typography>
                        </Grid>
                            <form className={classes.form} onSubmit={this.createNewPark}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            onChange={this.handleInputChange}
                                            id="outlined-static"
                                            label="Park Name"
                                            name="parkName"
                                            fullWidth
                                            variant="outlined"
                                            // autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth required>
                                            <InputLabel className={classes.inputLabel}>Location</InputLabel>
                                                <Select
                                                    variant="outlined" 
                                                    id="parkstate"
                                                    name="parkState"
                                                    value={this.state.parkState}
                                                    label="Park Location"
                                                    onChange={this.handleInputChange}
            
                                                >
                                                    <MenuItem value="Alabama">Alabama</MenuItem>
                                                    <MenuItem value="Alaska">Alaska</MenuItem>
                                                    <MenuItem value="Arizona">Arizona</MenuItem>
                                                    <MenuItem value="Arkansas">Arkansas</MenuItem>
                                                    <MenuItem value="California">California</MenuItem>
                                                    <MenuItem value="Colorado">Colorado</MenuItem>
                                                    <MenuItem value="Connecticut">Connecticut</MenuItem>
                                                    <MenuItem value="Delaware">Delaware</MenuItem>
                                                    <MenuItem value="Florida">Florida</MenuItem>
                                                    <MenuItem value="Georgia">Georgia</MenuItem>
                                                    <MenuItem value="Hawaii">Hawaii</MenuItem>
                                                    <MenuItem value="Idaho">Idaho</MenuItem>
                                                    <MenuItem value="Illinois">Illinois</MenuItem>
                                                    <MenuItem value="Indiana">Indiana</MenuItem>
                                                    <MenuItem value="Iowa">Iowa</MenuItem>
                                                    <MenuItem value="Kansas">Kansas</MenuItem>
                                                    <MenuItem value="Kentucky">Kentucky</MenuItem>
                                                    <MenuItem value="Louisiana">Louisiana</MenuItem>
                                                    <MenuItem value="Maine">Maine</MenuItem>
                                                    <MenuItem value="Maryland">Maryland</MenuItem>
                                                    <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                                                    <MenuItem value="Michigan">Michigan</MenuItem>
                                                    <MenuItem value="Minnesota">Minnesota</MenuItem>
                                                    <MenuItem value="Mississippi">Mississippi</MenuItem>
                                                    <MenuItem value="Missouri">Missouri</MenuItem>
                                                    <MenuItem value="Montana">Montana</MenuItem>
                                                    <MenuItem value="Nebraska">Nebraska</MenuItem>
                                                    <MenuItem value="Nevada">Nevada</MenuItem>
                                                    <MenuItem value="New Hampshire">New Hampshire</MenuItem>
                                                    <MenuItem value="New Jersey">New Jersey</MenuItem>
                                                    <MenuItem value="New Mexico">New Mexico</MenuItem>
                                                    <MenuItem value="New York">New York</MenuItem>
                                                    <MenuItem value="North Carolina">North Carolina</MenuItem>
                                                    <MenuItem value="North Dakota">North Dakota</MenuItem>
                                                    <MenuItem value="Ohio">Ohio</MenuItem>
                                                    <MenuItem value="Oklahoma">Oklahoma</MenuItem>
                                                    <MenuItem value="Oregon">Oregon</MenuItem>
                                                    <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                                                    <MenuItem value="Rhode Island">Rhode Island</MenuItem>
                                                    <MenuItem value="South Carolina">South Carolina</MenuItem>
                                                    <MenuItem value="South Dakota">South Dakota</MenuItem>
                                                    <MenuItem value="Tennessee">Tennessee</MenuItem>
                                                    <MenuItem value="Texas">Texas</MenuItem>
                                                    <MenuItem value="Utah">Utah</MenuItem>
                                                    <MenuItem value="Vermont">Vermont</MenuItem>
                                                    <MenuItem value="Virginia">Virginia</MenuItem>
                                                    <MenuItem value="Washington">Washington</MenuItem>
                                                    <MenuItem value="West Virginia">West Virginia</MenuItem>
                                                    <MenuItem value="Wisconsin">Wisconsin</MenuItem>
                                                    <MenuItem value="Wyoming">Wyoming</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                onChange={this.handleInputChange}
                                                id="outlined-multiline-static"
                                                label="Write a description of the park"
                                                name="parkDescription"
                                                multiline
                                                fullWidth
                                                rows="3"
                                                variant="outlined"
                                                required
                                                />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                onChange={this.handleInputChange}
                                                id="outlined-multiline-static"
                                                label="Write an overview of the park's weather"
                                                name="parkWeather"
                                                multiline
                                                fullWidth
                                                rows="3"
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                onChange={this.handleInputChange}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="parkLatitude"
                                                id="latitude"
                                                label="Latitude"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                onChange={this.handleInputChange}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="parkLongitude"
                                                id="longitude"
                                                label="Longitude"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                onChange={this.handleInputChange}
                                                name="parkImage"
                                                id="outlined-static"
                                                label="Image URL"
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Card>
                </Container>
          </Paper>
        )
    }
}

export default withStyles(styles)(AddParkForm)