// WeatherReport Component
import React from "react";

const WeatherReport = ({data, unit}) =>
{
    return (<div className="weather-report">
            <h2 className="big">{data.location} </h2>
            <h3 className="condition">{data.condition} | FEELS LIKE {data.feels_like}</h3>
            <img alt="weather" src={data.icon}></img>
            <div>
                <p>CURRENT TEMPRATURE</p>
            <h2>{data.temp}°{unit}</h2>
            </div>
            <div>
                <p>MAXIMUM TEMPRATURE</p>
            <h2>{data.temp_max}°{unit}</h2>
            </div>
            <div>
                <p>MINIMUM TEMPRATURE</p>
            <h2>{data.temp_min}°{unit}</h2>
            </div>
            <div className="wind">
                <div>
                    <p>WIND SPEED</p>
                    <h2>{data.wind_speed}meter/selectedCity</h2>
                </div>
                <div>
                    <p>WIND DIRECTION</p>
                    <h2>{data.wind_direction}degrees</h2>
                </div>
            </div>
            <div className="pressure">
                <div>
                    <p>pressure</p>
                    <h2>{data.pressure}hpa</h2>
                </div>
                <div>
                    <p>HUMIDITY</p>
                    <h2>{data.humidity}%</h2>
                </div>
            </div>;
            </div>
            );
           }; 

export default WeatherReport;
