// Input Component
import React from "react";
import WeatherReport from "./components/weatherReport"; 
const input = ({selectLocation, locations}) =>
{
    return (<span className="input-box">
        <label className="label">LOCATION</label>
        <input type="text" value={location} on Change={e => selectLocation(e.target.value)}></input>
    </span>
    )
};

export default Input;
