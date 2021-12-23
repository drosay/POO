const CommonUberCar = require("./commonUberCar").CommonUberCar;

class UberPool extends CommonUberCar{
    constructor(license,driver,brand,model){
        super(license,driver,brand,model);
    }
}

exports.UberPool = UberPool;