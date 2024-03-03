import React from "react";
import Style from "./Weather.module.scss"; 
import { useState } from "react";
import Partlycloudy from "../assets/cloud.png"
import  "../assets/cloudsmallsun.png";
import "../assets/cloudsun.png";
import "../assets/crazyrain.png";
import "../assets/fkntornado.png";
import "../assets/lilmorerain.png";
import Lightrain from "../assets/lilrain.png";
import "../assets/Morecloud.png";
import Lightsnow from "../assets/snow.png";
import "../assets/snowshit.png";
import Sunny from "../assets/sun.png";
import "../assets/wetsnow.png";
import "../assets/wind.png";

const weatherConditions = {
  Overcast:Sunny,
  Partlycloudy :Partlycloudy,
  cloudsmallsun:"../assets/cloudsmallsun.png",
  cloudsun:"../assets/cloudsun.png",
  crazyrain:"../assets/crazyrain.png",
  fkntornado:"../assets/fkntornado.png",
  lilmorerain:"../assets/lilmorerain.png",
  Clear:Sunny,
  Lightsnow:Lightsnow,
  Lightrain:Lightrain,
  morecloud:"../assets/morecloud.png",
  snow:"../assets/snow.png",
  snowshit:"../assets/snowshit.png",
  Sunny:Sunny,
  wetsnow:"../assets/wetsnow.png",
  wind:"../assets/wind.png"
}
export const Weather = () => {
      const [search,setSearch]=useState("");
      
      interface weatherDataProp{
        location:{
          name: string;
          country: string;
        },
        current: {
          condition:{
            icon: string;
            text:string;
          };
          cloud: string;
          humidity: number;
          temp_c: number;
          wind_kph: number;
          feelslike_c: number;
        }
      }

      const [weather,setWeather] = useState<weatherDataProp|null>(null); 

      const searchPressed = () => {
      

        

        const WEATHER_API_URL:string = 'https://api.weatherapi.com'
        const API_KEY = "5283ae9f408c4d84a6d135035242202"
        
        fetch(`${WEATHER_API_URL}/v1/current.json?key=${API_KEY}&q=${search}&aqi=yes`)
          .then(res =>res.json())
          .then(result =>{
            setWeather(result)
            console.log(result)
          })
          
          

      }

      return(
      <div className={Style.container}>
        <div className="search">
        <input type="text" placeholder = "Город" onChange={(e)=>setSearch(e.target.value)} 
        onKeyDown={(e)=>{
          if (e.key ==="Enter"){
            searchPressed()
        }}}/>
        {/* <button onClick={searchPressed}>Search</button> */}
        </div>


        {weather && (
        <div className={Style.weather}>
          <div className={Style.weathercity}>
            <h1 className={Style.weathercityname}>{weather.location.name}</h1>
          </div>
          <div className={Style.weathermain}>
            <p className={Style.weathermaintemp}>{Math.round(weather.current.temp_c)} °</p>
            <img src={weatherConditions[(weather.current.condition.text).replace(/\s+/g,'') as keyof typeof weatherConditions]} alt="" className={Style.weathermainimg} />
          </div>

          <div className={Style.weatherinfo}>
            <ul className={Style.weatherinfolist}>
              <li className={Style.weatherinfolisthummid}>
                <p>Влажность</p>
                <p>{Math.round(weather.current.humidity)} %</p>
              </li>  
              <li className={Style.weatherinfolisttempfeel}>
                <p>Ощущается как</p>
                <p>{Math.round(weather.current.feelslike_c)} °</p>
              </li>  
              <li className={Style.weatherinfolistwind}>
                <p>Ветер</p>
                <p>{Math.round(weather.current.wind_kph)} км/ч</p>
              </li>  
            </ul>  
          </div>    
        </div>)}
        
      </div>
    )
}