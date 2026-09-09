import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

    let[city , setCity] = useState("");

    //to handle errors
    let[error , setError] = useState(false);

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let lat = jsonResponse[0].lat;
            let lon = jsonResponse[0].lon;

            let weatherResponse = await fetch(
            `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );

            let weatherData = await weatherResponse.json();
            console.log(weatherData);

            let result = {
                city : city,
                temp : weatherData.main.temp,
                tempMin : weatherData.main.temp_min,
                tempMax : weatherData.main.temp_max,
                humidity : weatherData.main.humidity,
                feelsLike : weatherData.main.feels_like,
                weather : weatherData.weather[0].description
            }

            console.log(result);
            return result;
        }

        catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }

        catch(err){
            setError(true);
        }
    }

    return(
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
            <TextField id="city" 
            label="City name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}/>

            <br></br><br></br>

            <Button variant="contained" type='submit'>
                Search
            </Button>

            {error && <p style={{color : "red"}}>No such place exists in the API.</p>}

            </form>
        </div>
    )
}