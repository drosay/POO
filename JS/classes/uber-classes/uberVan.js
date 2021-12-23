const SpecialUberCar = require("./specialUberCar").SpecialUberCar;

class UberVan extends SpecialUberCar{
    constructor(license,driver,typeCarAccepted,seatsMaterial){
        super(license,driver,typeCarAccepted,seatsMaterial);
    }
}

exports.UberVan = UberVan;