const axios = require('axios');

const getClima = async (lat, lng) => {
    // let apiKey = 'd65a4c5dcd7d01f79f18de7f38fa7e4b';
    let apiKey = '7dc3807ca398822fa2f95a4697dd7718';

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiKey }`;

    let resp = await axios.get(url);
    if (resp.status !== 200) {
        throw new Error('No se ha encontrado la temperatura');
    }

    return resp.data.main.temp;
};

module.exports = {
    getClima
};