'use strict';

angular.module('Asesor', [])

/**
	Servicio donde se va a almacenar la informacion del Asesor
*/
.service('AsesorService', function () {

	var nombreAsesor = 'Pablo';

	var tipoDocumento = 'CC';

	var numDocumento = '468431568';

  var correo  = 'jdavidhc94@gmail.com';

  var celular = '3205090227';
  
  var direccion = 'Calle x';

  var direccionGeografica = 'Cualquier cosa';

  var fotoAsesor = '';

  var myLatLng= {lat: 6.2675767, lng: -75.5689946};


  function getMyLatLng() {
    return myLatLng;
  }

  function setNombreAsesor(nombre) {
    nombreAsesor = nombre;
  }

  function getNombreAsesor() {
    return nombreAsesor;
  }

  function setTipoDocumento(tipo) {
    tipoDocumento = tipo;
  }

  function getTipoDocumento() {
    return tipoDocumento;
  }

  function setNumDocumento(numero) {
    numDocumento = numero;
  }

  function getNumDocumento() {
    return numDocumento;
  }

  function setCorreo(cor) {
    correo = cor;
  }

  function getCorreo() {
    return correo;
  }

  function setCelular(cel) {
    celular = cel;
  }

  function getCelular() {
    return celular;
  }

  function setDireccion(dir) {
    direccion = dir;
  }

  function getDireccion() {
    return direccion;
  }

  function setDireccionGeografica(dir) {
    direccionGeografica = dir;
  }

  function getDireccionGeografica() {
    return direccionGeografica;
  }

  function setFotoAsesor(f) {
    fotoAsesor = f;
  }

  function getFotoAsesor() {
    return fotoAsesor;
  }
 

  return{
  	setNombreAsesor : setNombreAsesor,
  	getNombreAsesor : getNombreAsesor,
  	setTipoDocumento : setTipoDocumento,
  	getTipoDocumento : getTipoDocumento,
  	setNumDocumento : setNumDocumento,
  	getNumDocumento : getNumDocumento,
    getMyLatLng : getMyLatLng,
    setCorreo : setCorreo,
    getCorreo : getCorreo,
    setCelular : setCelular,
    getCelular : getCelular,
    setDireccion : setDireccion,
    getDireccion : getDireccion,
    setFotoAsesor : setFotoAsesor,
    getFotoAsesor : getFotoAsesor,
    setDireccionGeografica : setDireccionGeografica,
    getDireccionGeografica : getDireccionGeografica
    
  };

});