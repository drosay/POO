import java.util.ArrayList;
import java.util.Map;

class UberVan extends SpecialUberCar{

    public UberVan(String license, Account driver,Map<String, Map<String,Integer>> typeCarAccepted,ArrayList<String> seatsMaterial){
        super(license, driver, typeCarAccepted, seatsMaterial);
    }
}