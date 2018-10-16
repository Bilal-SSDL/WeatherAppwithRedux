import rootReducer from "../reducers";
import axios from "axios";

// const abc= 'http://api.openweathermap.org/data/2.5/forecast?appid=3052cb2d904dd928cc9729337df0de43&q=Islamabad'


const API_KEYS = '3052cb2d904dd928cc9729337df0de43';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEYS}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}