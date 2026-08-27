import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi" ,
        feelsLike : 36.01 ,
        humidity : 74 ,
        temp : 29.99 ,
        tempMax : 31.07 ,
        tempMin : 29.99 ,
        weather : "overcast clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h1>Weather App</h1>

            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}