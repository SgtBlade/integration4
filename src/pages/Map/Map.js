import React from "react";
import { renderToString } from 'react-dom/server'
import { useObserver } from "mobx-react-lite";
import style from "./Map.module.css";
import { useStores } from "../../hooks/useStores";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import COLORS from "../globalStyles/colors";
import MARKERS from "./Markers.js";

import ReactLogo from './Itally.svg';

const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const Map = () => {
  const { uiStore } = useStores();



  const markers = MARKERS;
  const handleClick = (e, geo) => {
    console.log(e.currentTarget);
    //e.currentTarget.style.fill = "black";
    console.log(geo.properties.NAME)
  };

  return useObserver(() => (
    <div className={style.content}>
      <div className={style.map}>
                <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                  rotate: [-20.0, -52.0, 0],
                  scale: 700
                }} >
                  <ZoomableGroup zoom={1}>
                  <Geographies
                    geography={geoUrl}
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5} >
                    {({ geographies }) =>
                      geographies.map(geo => (
                        <Geography
                          onClick={e => {handleClick(e, geo);}}
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              
                              borderRadius:"12px", 
                              outline: COLORS.blue,strokeWidth: 1, 
                              stroke: COLORS.blue, 
                              fill: geo.properties.NAME === 'France' ? COLORS.green : geo.properties.NAME === 'Spain' ? COLORS.red :geo.properties.NAME === 'Italy' ? COLORS.yellow :  COLORS.blueDark},
                            hover: {
                              fill: geo.properties.NAME === 'France' ? COLORS.green : geo.properties.NAME === 'Spain' ? COLORS.red :geo.properties.NAME === 'Italy' ? COLORS.yellow :  COLORS.blueDark,
                              outline: "none",
                              opacity: 0.7

                            },
                            pressed: {
                              fill: geo.properties.NAME === 'France' ? COLORS.green : geo.properties.NAME === 'Spain' ? COLORS.red :geo.properties.NAME === 'Italy' ? COLORS.yellow :  COLORS.blueDark,
                              outline: "none",
                              opacity: 0.7
                            }}}/>
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates, icon }) => (
                    <Marker key={name} coordinates={coordinates}>
                                <g
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(-15, -50)"
                              >
                      {icon.map(ic => {return ic})}
                      </g>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
      
      </div>

      <img src={`./assets/illustraties/markers/Itally.svg`} alt={`Itally marker`}/>
    </div>
  ));
};

export default Map;


/*



                      <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g>
                      <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                      >
                        {name}
                      </text>


const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];


{markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
*/