import React from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {}
        };
    }

    componentDidMount() {
        const latitude = parseFloat(this.props.showPark.latitude)
        const longitude = parseFloat(this.props.showPark.longitude)

        this.setState({
            viewport: {
                latitude: latitude,
                longitude: longitude,
                zoom: 10,
                bearing: 0,
                pitch: 0,
            }
        })
    }

    // componentWillReceiveProps() {
    //     const latitude = parseFloat(this.props.showPark.latitude)
    //     const longitude = parseFloat(this.props.showPark.longitude)

    //     this.setState({
    //         viewport: {
    //             latitude: latitude,
    //             longitude: longitude,
    //             zoom: 10,
    //             bearing: 0,
    //             pitch: 0,
    //         }
    //     })
    // }

    render() {
        const {viewport} = this.state;

        return (
            <ReactMapGL
                {...viewport}
                width="92vw"
                height="60vh"
                mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
                mapboxApiAccessToken={TOKEN}>
                <div className="nav" style={navStyle}>
                <NavigationControl/>
                </div>
            </ReactMapGL>
        );
    }
}