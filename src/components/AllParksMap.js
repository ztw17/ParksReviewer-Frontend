// import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import { Button } from '@material-ui/core';
// import marker from '../images/marker.png';
// import marker2 from '../images/marker2.png';

// const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';

// export default class AllParksMap extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//                 viewport: {
//                 latitude: 39.8283,
//                 longitude: -98.5795,
//                 width: "100vw",
//                 height: "100vh",
//                 zoom: 3,
//             },
//             selectedPark: "",
//         }
//     }

//     handleBoxClick = (id) => {
//         console.log("CCCLLIICCCKKKEEDDD")
//         console.log(id)
//     }

    // const [viewport, setViewport] = useState({
    //     latitude: 39.8283,
    //     longitude: -98.5795,
    //     width: "100vw",
    //     height: "100vh",
    //     zoom: 3,
    // });
    // const [selectedPark, setSelectedPark] = useState(null);

//     useEffect(() => {
//         const listener = event => {
//         if (event.key === "Escape") {
//             setSelectedPark(null);
//             }
//         };
//         window.addEventListener("keydown", listener);
//         return () => {
//         window.removeEventListener("keydown", listener);

//         };
//     }, []);

//     const componentDidUpdate = () => {
//         if (document.getElementsByClassName("mapboxgl-popup-close-button").length > 0) {
//             const x = document.getElementsByClassName("mapboxgl-popup-close-button")[0]
//             x.addEventListener('click', handleClose)
//         }
//     }

//     const handleClose = () => {
//         setSelectedPark(null)
//     }

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={TOKEN}
//         mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
//         onViewportChange={viewport => {
//           setViewport(viewport);
//         }}
//       >
//         {props.parks.map(park => (
//           <Marker
//             key={park.id}
//             latitude={parseFloat(park.latitude)}
//             longitude={parseFloat(park.longitude)}
//           >
//             <button
//               class="marker-btn"
//               onClick={event => {
//                 event.preventDefault();
//                 setSelectedPark(park);
//               }}
//             >
//               <img src={marker2} height="30px" width="30px" alt="marker" />
//             </button>
//           </Marker>
//         ))}

//         {selectedPark ? (
//           <Popup
//             latitude={parseFloat(selectedPark.latitude)}
//             longitude={parseFloat(selectedPark.longitude)}
//             class="mapboxgl-popup"
//             // onClose={() => {
//             //   setSelectedPark(null);
//             // }}
//           >
//             <div>
//               <h2 onClick={handleBoxClick(selectedPark.id)}>{selectedPark.name}</h2>
//               <p onClick={handleBoxClick}>{selectedPark.description}</p>
//             </div>
//             <div>
//                 <Button onClick={handleBoxClick(selectedPark.id)}>Go to park!</Button>
//             </div>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Button } from '@material-ui/core';
import marker from '../images/marker.png';
import marker2 from '../images/marker2.png';

const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';

export default function AllParksMap(props) {

    const handleBoxClick = (id) => {
        console.log("CCCLLIICCCKKKEEDDD")
        console.log(id)
    }

    const [viewport, setViewport] = useState({
        latitude: 39.8283,
        longitude: -98.5795,
        width: "100vw",
        height: "100vh",
        zoom: 3,
    });
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = event => {
        if (event.key === "Escape") {
            setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);
        return () => {
        window.removeEventListener("keydown", listener);

        };
    }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {props.parks.map(park => (
          <Marker
            key={park.id}
            latitude={parseFloat(park.latitude)}
            longitude={parseFloat(park.longitude)}
          >
            <button
              class="marker-btn"
              onClick={event => {
                event.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={marker2} height="30px" width="30px" alt="marker" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.latitude)}
            longitude={parseFloat(selectedPark.longitude)}
            class="mapboxgl-popup"
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2 onClick={handleBoxClick(selectedPark.id)}>{selectedPark.name}</h2>
              <p onClick={handleBoxClick}>{selectedPark.description}</p>
            </div>
            <div>
                <Button onClick={handleBoxClick(selectedPark.id)}>Go to park!</Button>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}