class CommonUberCar extends UberCar{
    
    String brand;
    String model;

    public CommonUberCar(String license, Account driver, String brand, String model){
        super(license, driver);
        this.brand = brand;
        this.model = model;
    }
}