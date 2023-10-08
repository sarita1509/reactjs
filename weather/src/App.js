import React,{useState, Component } from "react";
import _ from "lodash.";
import Input from " ./components/Input";
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport";
import SearchResult from "./components/SearchResult";
import { useState } from "react";


class App extends Component {
    state = {
        location: "",
        searchData: [],
        cityId: 1277333,
        unit: "c",
        weather: {},
      }
      searchLocations = debounce(async(loc) =>
  {
    const getLoction = await fetch(`https://api.weatherserver.com/weather/cities/${loc}`);
    const JsonData = await getLoction.json();
    const data = JsonData.results;
    console.log(data);
    return this.setState({ searchData: data });
  }, 500)
  getweather = async (cityId, unit) =>
  {
    const getweather = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${unit}`);
    const JsonWeather = await getweather.Json();
    this.setState({
      weather: JsonWeather,
    })
    console.log(this.state.weather);
    return null;

  }

  componentDidMount = () =>
  {
    this.getweather(this.state.cityId, this.state.unit)
  }
  componentDidUpdate = () =>
  {
    if (prevState.location !== this.state.location)
    {
      this.searchLocation(this.state.location);
    }
    if (PrevState.cityId !== this.state.cityId)
    {
      this.setState({ location: "" })
      this.getWeather(this.state.cityId, this.state.unit)
    }
    if (PrevState.unit !== this.state.unit)
    {
      this.getWeather(this.state.cityId, this.state.setUnits)
    }
  }
  render() {
    return (
        <div className="weather-app">
        <h1>WeatherWatch</h1>
        <input selectLocation={loc => this.setState({ location: loc })} location={this.state.location} />
        {this.state.location === "" ? null : <SearchResult data={this.state.searchdata} selectedCity={cityId => this.setState({ cityId: cityId })} />}
        <setUnits selectUnit={unit => this.setState({ unit: this.state.unit === "c" ? "f" : "c" })} />
        <weatherReport data={this.state.weather} unit={this.state.unit} />
      </div>
    );
  }
}

export default App;
