class Account{
    Integer id;
    String name;
    String document;
    String email;
    String password;

    public Account(String name, String document){
        this.name = name;
        this.document = document;
    }

    public void hacerLogin(){
        System.out.print("Ingrese!");
    }
}