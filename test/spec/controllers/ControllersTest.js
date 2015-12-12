
'use strict';

describe('Controller: prodControler', function () {

  // load the controller's module
  beforeEach(module('spinnerBankAngularApp'));
  beforeEach(module('productos.controllers'));
  beforeEach(module('productos.services'));

  var prodControler,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    prodControler = $controller('prodControler', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verifica que el parámetro id del scope se haya instanciado correctamente', function () {
    expect(scope.id).toBe(54896257);
  });
});