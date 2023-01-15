import styled from 'styled-components'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.png",
    sunrise: "/icons/temp.png",
    humidity: "/icons/humidity.png",
    wind: "/icons/wind.png",
    pressure: "/icons/pressure.png"
}
const WeatherCondition = styled.div `
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 25px auto;
`;

const Condition = styled.span `
margin: 20px auto;
font-size: 15px;

& span{
    font-size: 30px;
}

`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;

`
const Location = styled.span `
font-size: 30px;
font-weight: bold;

`

const WeatherInfoLabel = styled.span `
font-size: 14spx;
font-weight: bold;
margin: 20px 25px 10px;
text-align: start;
width: 90%;
`

const WeatherInfoContainer = styled.div`
display:flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align items: center;
`
const InfoIcon = styled.img`
width: 35px;
height: 35px;
`

const InfoLabel = styled.span`
display:flex;
flex-direction: column;
font-size: 15px;
margin: 15px;
& span{
    font-size: 12px;
    text-transform: capitalize;
}
`
const WeatherInfoComponent = (props) =>{
    const{name, value} = props;

    return(
        <InfoContainer>
            <InfoIcon src ={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
            <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}
const WeatherComponent = () =>{
    return <>
    <WeatherCondition>
        <Condition><span>30 C</span> | Cloudy</Condition>
        <WeatherLogo src = "/icons/WeatherLogo.png"/>
    </WeatherCondition>
    <Location>Edmonton, AB</Location>
    <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    <WeatherInfoContainer>
        <WeatherInfoComponent name = "sunrise" value= ""/>
        <WeatherInfoComponent name = "humidity" value= ""/>
        <WeatherInfoComponent name = "wind" value= ""/>
        <WeatherInfoComponent name = "pressure" value= ""/>
    </WeatherInfoContainer>

    </>
};
export default WeatherComponent;