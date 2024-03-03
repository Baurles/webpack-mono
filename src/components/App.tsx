import React,{useState} from 'react';
import "./Reset.module.scss";
import "./App.module.scss";



export const App = () => {

    const [weather,setWeather] = useState(null) 

    const WEATHER_API_URL:string = 'https://api.weatherapi.com'
    const API_KEY = "5283ae9f408c4d84a6d135035242202"
    let city:string = "London"

//     const weatcherResponce = async function fetchWeather():Promise<any>{
//     const responce = await fetch(`${WEATHER_API_URL}/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`);
//     const body = await responce.json();
//     return body;
// }
    // setWeather(weatcherResponce);

    return(
        <div>
            
        </div>
    );
    
}