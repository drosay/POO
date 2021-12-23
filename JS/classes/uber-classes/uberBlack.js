const SpecialUberCar = require("./specialUberCar").SpecialUberCar;

class UberBlack extends SpecialUberCar{
    constructor(license,driver,typeCarAccepted,seatsMaterial){
        super(license,driver,typeCarAccepted,seatsMaterial);
    }
}

exports.UberBlack = UberBlack;