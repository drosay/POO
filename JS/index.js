const UberX = require("./classes/uber-classes/uberX").UberX;
const Driver = require("./classes/account-classes/driver").Driver;

const driver = new Driver("dylan","abc243453");
const car = new UberX("1143403864",driver,"Tesla","Electron 2021");
car.id = 1234;
car.passengers = 3;
driver.id = 4353445;
driver.email = "dylandaniel1007@guam.com";
driver.password = "********";

console.table(car);