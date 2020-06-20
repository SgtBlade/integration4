import React from "react";
import { useObserver } from "mobx-react-lite";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import COLORS from "../../globalStyles/colors.js"
import COUNTRYCOLORS from "../../A_userVariables/colorsPerCountry.js";
import MARKERS from "../../A_userVariables/Markers.js";

const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const FullMap = (props) => {

  const markers = MARKERS;

  return useObserver(() => (
                <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                  rotate: [-4.0, -42.0, 0],
                  scale: 1200
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
                          onClick={e => {props.function(e, geo);}}
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              
                              borderRadius:"12px", 
                              outline: COLORS.blue,strokeWidth: 1, 
                              stroke: COLORS.blue, 
                              fill: COUNTRYCOLORS[geo.properties.NAME] ? COUNTRYCOLORS[geo.properties.NAME] : COLORS.blueDark},
                            hover: {
                              fill: COUNTRYCOLORS[geo.properties.NAME] ? COUNTRYCOLORS[geo.properties.NAME] : COLORS.blueDark,
                              outline: "none",
                              opacity: 0.7

                            },
                            pressed: {
                              fill: COUNTRYCOLORS[geo.properties.NAME] ? COUNTRYCOLORS[geo.properties.NAME] : COLORS.blueDark,
                              outline: COLORS.yellowLight,
                              filter: "brightness(0%)"
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
  ));
};

export default FullMap;
