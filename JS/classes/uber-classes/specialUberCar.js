const UberCar = require("./uberCar").UberCar;

class SpecialUberCar extends UberCar{
    constructor(license,driver,typeCarAccepted,seatsMaterial){
        super(license,driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}

exports.SpecialUberCar = SpecialUberCar;