import java.util.ArrayList;
import java.util.Map;

class UberBlack extends SpecialUberCar{

    public UberBlack(String license, Account driver,Map<String, Map<String,Integer>> typeCarAccepted,ArrayList<String> seatsMaterial){
        super(license, driver, typeCarAccepted, seatsMaterial);
    }
}