import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const API_KEY = "92a0f75eb141ffb93ed3f8ddaac9abdf"
const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 15px;
border-radius: 4px;
width: 400px;
background: white;
`;


const AppLabel = styled.span`
color: black;
font-size: 20px;
font-weight: bold;

`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (event) => {
    event.preventDefault();
    const response =
    await axios.get('https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={92a0f75eb141ffb93ed3f8ddaac9abdf}');
    console.log(response)
  };
  return (
    <Container>
     <AppLabel>Weather App</AppLabel>
     <WeatherComponent updateCity = {updateCity} fetchWeather = {fetchWeather}/>
    </Container>
  );
}

export default App;
