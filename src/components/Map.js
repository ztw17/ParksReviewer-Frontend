import React from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';

export default function Map(props) {
    const {viewport} = props;

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            width="92vw"
            height="60vh"
            mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
            onViewportChange={viewport => props.updateViewport(viewport)}
            >
        </ReactMapGL>
    );
}