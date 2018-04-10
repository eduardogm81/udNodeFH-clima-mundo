const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async ( direccion ) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje) )
    .catch( e => console.log(e) );


/*lugar.getLugarLatLng(argv.direccion)
    .then( resp => {
        console.log(JSON.stringify(resp, undefined, 2));
        clima.getClima(resp.lat, resp.lng)
            .then(temp => {
                console.log('Temperatura:', temp);
            })
            .catch(e => console.log('ERROR!', e));
    } )
    .catch(e => console.log('ERROR!!!', e));*/
