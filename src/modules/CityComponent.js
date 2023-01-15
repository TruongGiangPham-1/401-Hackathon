import styled from 'styled-components'

const WeatherLogo = styled.img`
width: 150px;
height: 150px;
margin: 50px auto;

`

const ChooseCityLabel = styled.span`
color: black;
font-size: 20px;
font-weight: bold;
margin: 10px auto;

`
const SearchBox = styled.form`
display: flex;
flex-direction: row;
//border: grey solid 1.5px;
box-shadow: 0 3px 6px 0 #555;
border-radius: 2px;
font-size: 20px;
font-weight: bold;
margin: 10px auto;

& input{
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
}

& button{
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color:black;
    color:white;
    cursor: pointer;
}

`
const CityComponent = (props) =>{
    const {updateCity, fetchWeather} = props;
    return (
        <>
        <WeatherLogo src = "/icons/WeatherLogo.png"/>
        <ChooseCityLabel>Enter a city to display the weather</ChooseCityLabel>
        <SearchBox onSubmit = {fetchWeather}>
            <input placeholder = "City Name" onChange = {(event) => updateCity(event.target.value)}/>
            <button type = "submit">Search</button>
        </SearchBox>
        </>
    )
};
export default CityComponent;