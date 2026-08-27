import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">

            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 70 
                    ? RAIN_URL 
                    : info.temp > 15 
                    ? HOT_URL 
                    : COLD_URL
                }
               
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}&nbsp;{
                    info.humidity > 70 
                    ?<ThunderstormIcon/> 
                    : info.temp > 15 
                    ? <SunnyIcon/>
                    : <AcUnitIcon/>
                }
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature : {info.temp}&deg;C</p>

                <p>Humidity : {info.humidity}</p>

                <p>Minimum Temperature : {info.tempMin}&deg;C</p>

                <p>Maximum Temperature : {info.tempMax}&deg;C</p>

                <p>Feels like : {info.feelsLike}&deg;C</p>

                <p>Weather : {info.weather}</p>
                </Typography>

                </CardContent>
                </Card>
            </div>
        </div>
    )
}