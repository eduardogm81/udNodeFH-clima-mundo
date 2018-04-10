const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

lugar.getLugarLatLng(argv.direccion)
    .then( resp => {
        console.log(JSON.stringify(resp, undefined, 2));
    } )
    .catch(e => console.log('ERROR!!!', e));
