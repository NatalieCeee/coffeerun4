(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://localhost:3002/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    //var webshim = window.webshim;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
      return myTruck.createOrder.call(myTruck, data)
      .then(function () {
        checkList.addRow.call(checkList, data);
      });
    });
    //console.log(formHandler);
    formHandler.addInputHandler(Validation.isCompanyEmail);
    myTruck.printOrders(checkList.addRow.bind(checkList));

    //webshim.polyfill('forms forms-ext');
    //webshim.setOptions('forms', {
      //  addValidators: true,
        //lazyCustomMessages: true
  //  })

})(window);
