'use strict';
describe('Service: ApiProductos', function () {
  var ApiProductos,
      httpBackend;

  beforeEach(function (){

    // load the module.
    beforeEach(module('spinnerBankAngularApp'));
    beforeEach(module('productos.controllers'));
    beforeEach(module('productos.services'));

    // get your service, also get $httpBackend
    // $httpBackend will be a mock, thanks to angular-mocks.js
    inject(function($httpBackend, _ApiProductos_) {
      ApiProductos = _ApiProductos_;
      httpBackend = $httpBackend;
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('Consumir ApiProductos para saber los productos de un cliente', function (){
    // set up some data for the http call to return and test later.
    var returnData = { excited: true };

    // expectGET to make sure this is called once.
    httpBackend.expectGET('https://spinnerbank-api-external.herokuapp.com/v1/products/1936941186/CC').respond(returnData);

    // make the call.
    var returnedPromise = ApiProductos.obtenerProductos(1936941186);

    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();

    // check the result.
    // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
    // as the object will be a copy and not the same instance.)
    expect(result.data).toEqual(returnData);
  });


});
