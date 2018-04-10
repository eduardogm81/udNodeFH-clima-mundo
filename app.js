const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyASPiaw4FAKInDRrhGA33Ei6FmS4-4YQ9s`)
    .then( resp => {
        // console.log( JSON.stringify(resp.data, null, 2));
        // console.log(resp.status);
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        console.log('Direccion:', location.formatted_address);
        console.log('Latitud:', coors.lat);
        console.log('Longitud:', coors.lng);
    } )
    .catch( e => console.log('ERROR!!!', e) );