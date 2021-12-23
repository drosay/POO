const UberCar = require("./uberCar").UberCar;

class CommonUberCar extends UberCar{
    constructor(license,driver,brand,model){
        super(license,driver);
        this.brand = brand;
        this.model = model;
    }
}

exports.CommonUberCar = CommonUberCar;