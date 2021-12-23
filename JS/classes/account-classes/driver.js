const Account = require("./account").Account;

class Driver extends Account{
    constructor(name,document){
        super(name,document);
    }
}

exports.Driver = Driver;