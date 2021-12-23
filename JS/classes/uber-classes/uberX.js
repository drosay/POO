const CommonUberCar = require("./commonUberCar").CommonUberCar;

class UberX extends CommonUberCar{
    constructor(license,driver,brand,model){
        super(license,driver,brand,model);
    }
}

exports.UberX = UberX;