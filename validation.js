(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecafed: function(strinValue, IntValue) {
            if (strinValue == 'decaf' && IntValue > 20) {
                return false;
            } else {
                return true;
            }
        }
      //  doesOrderExist: function (email, cb) {
        //    this.get(email, function (serverResponse) {
          //      if(serverResponse != null) {
            //        cb(true);
              //  } else {
                //    cb(false);
    //            }
      //      });
      //  }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
