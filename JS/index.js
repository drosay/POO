const UberCar = require("./uberCar").UberCar;
const Account = require("./account").Account;

const driver = new Account("dylan","abc243453");
const car = new UberCar("ABC123", driver);
car.id = 1234;
car.passengers = 3;
driver.id = 4353445;
driver.email = "dylandaniel1007@guam.com";
driver.password = "********";

console.log(car);