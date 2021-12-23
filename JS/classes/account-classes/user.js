const Account = require("./account").Account;

class User extends Account{
    constructor(name,document){
        super(name,document);
    }
}

exports.User = User;