
const URLLISTADO = 'https://listado.mercadolibre.com.mx/'
/**
 * 
 * @param {*} busqueda El campo de texto a buscar
 * @returns La url a buscar en ML
 */
const URLBusqueda = busqueda => URLLISTADO + busqueda.replace(/ /g,'-')

module.exports.URLLISTADO = URLLISTADO
module.exports.URLBusqueda = URLBusqueda