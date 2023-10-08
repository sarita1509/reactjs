// SetUnits Component
import React from "react";

const setUnits = ({selectUnit}) =>
{
    return (<div className="set-units">
        <label>UNITS</label>
        <select onChange={e => selectUnit(e.target.value)}>
            <option>celsius</option>
            <option>fehrenheit</option>
        </select>
    </div>);
};

export default SetUnits;
