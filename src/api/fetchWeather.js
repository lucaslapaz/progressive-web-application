import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'be31bccdc8a45aa306779d7e9aa7091a';

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            lang: 'pt_br',
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}