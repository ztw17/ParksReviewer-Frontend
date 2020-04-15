import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Button, Card, Typography } from '@material-ui/core';
import marker from '../images/marker.png';

const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';

export default class AllParksMap extends React.Component {
    constructor() {
        super()
        this.state = {
            viewport: {
                latitude: 39.8283,
                longitude: -98.5795,
                width: "100vw",
                height: "100vh",
                zoom: 2,
            },
            selectedPark: "",
        }
    }

    handleBoxClick = (id) => {
        const showPark = this.props.parks.find(park => park.id === id)
        this.props.handleParkClick(showPark)
        this.props.history.push(`/park/${id}`)
    }

    componentDidMount = () => {
        const listener = event => {
        if (event.key === "Escape") {
           this.setState({
            selectedPark: null
            })
            }
        };
        window.addEventListener("keydown", listener);
        return () => {
        window.removeEventListener("keydown", listener);
        };
    }

    componentDidUpdate = () => {
        if (document.getElementsByClassName("mapboxgl-popup-close-button").length > 0) {
            const x = document.getElementsByClassName("mapboxgl-popup-close-button")[0]
            x.addEventListener('click', this.handleClose)
        }
    }

    handleClose = () => {
        this.setState({
            selectedPark: null
        })
    }

    render() {
        return (
        <div>
        <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
            onViewportChange={viewport => {
                this.setState({
                    viewport: viewport
                })
            }}
        >
            {this.props.parks.map(park => (
            <Marker
                key={park.id}
                latitude={park.latitude}
                longitude={park.longitude}
            >
                <button
                class="marker-btn"
                onClick={event => {
                    event.preventDefault();
                    this.setState({
                        selectedPark: park
                    })
                }}
                >
                <img src={marker} height="30px" width="30px" alt="marker" />
                </button>
            </Marker>
            ))}

            {this.state.selectedPark ? (
                <Card>
            <Popup
                latitude={this.state.selectedPark.latitude}
                longitude={this.state.selectedPark.longitude}
                class="mapboxgl-popup"
            >
                <div>
                    <Typography align="center" variant="h5">{this.state.selectedPark.name}</Typography>
                    <Typography variant="h8">{this.state.selectedPark.description}</Typography>
                </div>
                <div align="center">
                <   Button onClick={() => this.handleBoxClick(this.state.selectedPark.id)}>Go to park!</Button>
                </div>
            </Popup>
            </Card>
            ) : null}
        </ReactMapGL>
        </div>
        )
    }
}