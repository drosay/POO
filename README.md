# Programación oriendada a objetos *(conceptos básicos)*

## Concepto

La programación orientada a objetos, con las siglas POO o en ingles OOP (Object Oriented Programming), básicamente viene de una forma de pensar de digamos la orientación a objeto y pues es un paradigma de programación que si no sabes que es esto es una teoría que nos da un modelo para resolver un problema.

Surge de los problemas que tenemos y necesitamos plasmar en código, necesitamos observar los problemas, analizarlos y visualizarlos en forma de objetos para luego codificarlo en una solución.

**BIEN!...** la programación orientada a objetos se compone de cuatro elementos fundamentales:

- Clases
- Propiedades
- Métodos
- Objetos

*Eh. . . vale, osea como te explico. . .*

La programación orientada a objetos va a tener **Clases** y ellas se van a componer de **Propiedades** y a la vez, van a tener **Métodos** y todas estas en conjunto van a dar un **Objeto**. . . bueno, igual lo vamos a ver a detalle más adelante.

*Sigamos*

Además de estos 4 pilares vamos a ver conceptos importantes como:

- Abstracción
- Herencia
- Encapsulamiento
- Polimorfismo

y si, suenan un poco intimidantes, pero son más sencillas de lo que parecen, por ahora: 

> Palabras más, palabra menos, la programación orientada a objetos es una forma de pensar para resolver problemas que tiene esos 4 pilares que vimos y que tiene esos 4 elementos y. . . y. . ., y ya. Sigamos. . .

---

## Objeto

- Los objetos siempre van a tener comportamientos y propiedades (o atributos).
- Además los objetos son sustantivos.
- Los objetos pueden ser físicos o conceptuales, físicos como una persona (User) o conceptual como una sesión (Session).
- Los atributos serán sustantivos y son las propiedades que componen al objeto.
- Los comportamientos son las acciones que el objeto pueda realizar y serán verbos o sustantivos o ambos.

*Recordar siempre tomar los propiedades (o atributos) y comportamientos sobre el CONTEXTO del objeto como en este ejemplo:*

Imaginemos que hacer un analisis de la cuenta de un usuario, en este caso sabemos que para tener una cuenta necesitamos los siguientes datos:
``` Java
    //ATRIBUTOS
    Integer id; //Un id único para cada cuenta
    String name; //El nombre del usuario
    String document; //El documento del usuario
    String email; //El email del usuario
    String password; //La contraseña del usuario

    //COMPORTAMIENTOS Ó MÉTODOS

    hacerLogin(){ //El comportamiento de iniciar sesion
        System.out.print("Ingrese!");
    }
```
>*Como podemos ver a partir de la idea de la cuenta de un usuario podemos extraer ciertos atributos y métodos relacionados a ella.*
---


## Abstracción

- Al traer todos los componentes o datos de un objeto que hemos identificado y convertirlo en clases se le llama abstracción.
- Es el analisis que hacemos sobre los objetos idenfificados.

>*Presta atención a esto de abstracción ya que es muy importante a la hora de crear las clases ya que como verás las clases son la forma más general del objeto*

---

## Clases

- Las clases se usan para generar objetos.
- Es el modelo por el cual nuestros objetos se construirán.
- En las clases se define la forma más general del objeto.
- Analizamos los objetos para crear clases.

Las clases son la forma más general de un objeto, por eso debemos analizarlos muy bien, como vimos en el ejemplo anterior de account podiamos tener los atributos y propiedades del objeto Account perfectamente, pero este era un único objeto y no podiamos hacer varios de estos todo el rato.

Es por esto que hacemos la abstracción del objeto a una forma más general en la cual podamos crear muchos objetos de esta.

*En Java podemos definir la clase Account de este modo*
``` Java
    class Account {

        Integer id;
        String name;
        String document;
        String email;
        String password;

        public void hacerLogin(){
            System.out.print("Ingrese!");
        }
        
    }
```
Excelente! ya con la clase Account podemos hacer una instancia de clase y crear nuestro primer objeto a partir de una clase.

*Para hacerlo nos valemos de la palabra reservada new y en Java su sintaxis es de esta forma*

``` Java
    Account cuenta1 = new Account();
```
Utilizamos **Account cuenta1** para declarar el objeto cuenta1 de tipo Account y luego lo inicializamos en memoria como una instancia de la clase Account con **new Account();**.

> **Esto en escencia es una objeto, ya que un objeto es la instancia de una clase.**

De esta forma podemos utilizar todos sus atributos y propiedades, por ejemplo si queremos que el **nombre de la cuenta1 sea "Dylan"** y el **documento sea "2345ABC"** podemos hacerlo de esta forma:

```Java
    cuenta1.name = "Dylan";
    cuenta1.document = "2345ABC";
```

y si queremos utilizar el método de **hacerLogin()** ó imprimir alguno de sus atributos podemos hacer esto:

```Java
    cuenta1.hacerLogin(); //Invocamos el método de login
    System.out.println("\nSoy el usuario: " + cuenta1.name + " con el documento: " + cuenta1.document);

    /*
    EN LA SALIDA TENDRÍAMOS
        Ingrese!
        Soy el usuario: Dylan con el documento: 2345ABC
    */
```

>*Como este podemos crear cuantos objetos querramos solo valiendonos creando nuevas instancias con nombres diferentes como la de cuenta1*

---

## Constructor

Como vimos en el ejemplo anterior creamos el objeto **cuenta1** como instancia de la clase **Account**, y aquí hay algo que aclarar, vimos que inicializamos el objeto en memoria con la linea **new Account();**, pues bueno a esto lo llamamos método constructor del objeto.

Si nos damos cuenta utilizamos unos parensetis **"()"**, estos parentesis nos indican que es un método, una acción; en este caso estos métodos se escriben en mayusculas y tiene el mismo nombre de la clase **Account();**, entonces el método constructor cumple las siguientes funciones:

- Da un estado inicial al objeto
- Te espesifica los parametros mínimos para que el objeto pueda construirse

es decir, cuando invocamos el método constructor este crea el estado inicial del objeto en memoria, y los parametros que este te pida son los mínimos necesarios para que el objeto pueda vivir, sin estos no te permite instanciar tu objeto.

En el caso anterior nuestro método no esperaba ningún parametro porque era el método constructor por defecto que te crea internamente Java de esta forma para la clase account:

```Java
    public Account(){

    }
```

Pero, si queremos sobreescribir nuestro método constructor esta vez espesificandole parametros podemos hacerlo de esta manera:

```Java
    public Account(String name, String document){
        this.name = name;
        this.document = document;
    }
```

Excelente! de esta manera cuando debamos instanciar un objeto de la clase Account si o si debemos hacerlo con los parametros que espera, en este caso el nombre y el documento:

```Java

    Account cuenta1 = new Account("Dylan","2345ABC");

```
> A partir de aquí podemos modificar sus otros atributos y usar sus métodos, pero esto es lo mínimo que necesita para crearse, de otro modo nos dará un error.

---

## Modularidad

- La modularidad viene de la arquitectura y el diseño "per sé" y es subdividir un sistema en parte más pequeñas.
- Cada una de esas partes se llamarán módulos y cada uno funciona de manera independiente.

*En si modularidad significa dividir nuestro sistema en varios trozos de código* 

- ### **La modularidad lleva consigo:**
    - **Reutilizar** código en diferentes partes de nuestro sistema.
    - **Evitar colapsos** en suestro sistema ya que al momento de que falle un módulo los demás que son independientes no sufrirán.
    - **Mantenibilidad** porque fácilita hacer cámbios y al momento de incluir un nuevo módulo se va a acoplar fácilmente a los demás.
    - **Legibilidad** ya que nuestro software estará dividido en trozos de código y será más sencillo de leer y comprender.
    - **Resolución rápida de problemas** porque al estár separado en módulos esto facilita la detección y solución de errores.

>Más que imaginar un fragmento de código gigantesco, es mejor imaginar y empezar a pensar que debemos programar en pequeños trozos - Anahí Salgado Díaz de la Vega

Las clases son precisamente las que provocan la módularidad ya que cada módulo es una clase y cada clase irá en un archivo diferente así como en la siguiente imagen

<img src="https://i.postimg.cc/5yPgzBNY/modulos.png" width="300"/>

tenemos el código dividido en fragmentos, cada módulo por separado y cada archivo corresponde a una clase, cada una independiente (Esa es la idea).

---

## DRY: *Don´t repeat yourself*

Es una filosofía que promueve que toda pieza de información **nunca debería ser duplicada** debido a que la duplicación **incrementa la dificultad** en los cambios y evolución.

*Porque esto dificulta la manutención del código y la evolución del código, será más dificil de leer y dificil de incluir nuevos módulos.*

---

*Cuando detecto características y comportamientos similares debo realizar una abstracción*

Vamos a verlo con un ejemplo. . ., el mismo ejemplo de  **Account**:

- Recordemos que tenemos la clase *Account* y que esta tiene sus caracteristicas y comportamientos:

```Java
    class Account {

        Integer id;
        String name;
        String document;
        String email;
        String password;

        public void hacerLogin(){
            System.out.print("Ingrese!");
        }
        
    }
```
bien entonces, que pasa si necesitamos crear algunos objetos similares que utilicen esas mismas caracteristicas y comportamientos, objetos que sean **Accounts (cuentas)** pero que además de ser cuentas tengan contextos diferentes como por ejemplo la cuenta de un **usuario** ó la cuenta de un **conductor**.

Tendríamos que escribir todos esos comportamientos y caracteristicas de nuevo ¿cierto?, pero eso es muy tedioso y es redundante, eso viola el principio de DRY(Dont Repeat Yourself).

Por esto existe la **HERENCIA**.


## Herencia

*Esta es una abstracción muy general para crear clases a partir de otras clases y es importante para mantener el principio de DRY*

- La herencia nos permite generalizar las clases y crear subclases que hereden los atributos y comportamientos de la clase mayor, así no redundamos código.
- A la clase de la cual se hereda se le llama Súperclase y las que heredan se llaman subclases, o clase padre y clase hijo respectivamente.
- Se identifica analizando varias clases con atributos y comportamientos similares.

**ENTONCES** pues como habíamos planteado antes, tenemos la clase **Account** y queremos crear una clase para **usuario** y otra para **conductor** que tengan esas mismas propiedades, bien entonces nos valemos de la herencia.

En Java utilizamos la palabra reservada **extends** para representar herencia en código quedaría así:

```Java
    class User extends Account{ //Clase USUARIO extiende de ACCOUNT

    }
```
```Java
    class Driver extends Account{ //Clase CONDUCTOR extiende de ACCOUNT

    }
```

ya con esto, estamos diciendo que **User** y **Driver** son clases hijas de **Account** y por lo tanto deberían poder utilizar sus propiedades y métodos, pero. . ., nos valta algo importante. . . a ver te explico, recuerda que hablamos antes de los **constructores** y que estos lo que hacían era dar un estado inicial del objeto.

Bien pues estas dos clases que heredan necesitan tambien un constructor y que este constructor instancie de alguna manera la clase padre para poder utilizar todo lo que esta nos está permitiendo heredar, para esto utilizamos el método ***super*** dentro de nuestro constructor, de esta manera:

```Java
    class User extends Account{
        public User(String name, String document){
            super(name, document);//método super que instancia la clase padre
        }
    }
```

si nos damos cuenta el método ***super*** lleva dos parametros, el **name** y el **document** esto es porque la clase **Account** para vivir necesita esos dos parametros y por tanto extender una clase de otra necesitamos pasarle esos parametros tambien.

Hagamoslo tambien con la clase **Driver**

```Java
    class Driver extends Account{
        public Driver(String name, String document){
            super(name, document);
        }
    }
```

**BIEN!** ya con esto tenemos dos clases nuevas **User** y **Driver** que pueden usar todas las caracteristicas y comportamientos que utiliza la clase **Account**, dos clases que comparten similitudes porque son de una misma familia pero que en esencia son diferentes.

***Eso es la herencia.***

Vamos a analizar la herencia desde otro punto de vista, recuerda que al principio hablamos de contexto para definir objetos y es que la lógica de negocio puede decirte que algunos elementos se deben agrupar en una clase más general . . .

Imaginemos que queremos implementar las clases en un modelo de pagos, que aceptemos distintos **tipos de pago**, sabemos que pueden pagarnos con **tarjeta**, con **paypal**, y hasta con **efectivo** pero, no podemos agrupar todo eso en una clase general sencillamente porque cada una de ellas tiene caracteristicas y comportamientos muy diferentes.

Sin embargo hay que agruparlas puesto que sabemos que todos son métodos de pago y pertenecen a una misma familia, bien, vamos a abordar este caso.

**NO TE LO DIJE** pero por más que tengan caracteristicas y comportamientos distintos siempre hay algo que tienen en común estas tres clases, esto es el **id**, un identificador único que diferencia un pago de otro, bien creemos entonces una clase muy general de la que extiendan todas:

```Java
    class Payment{
        Integer id;
        public Payment(Integer id){
            this.id = id;
        }
    }
```

bien, a partir de aquí tenemos una clase **Payment** que se refiere al pago y que tiene como caracteristica un único identificador que es el **id** y que diferencia un pago del otro, entonces podemos extender de ella para crear diferentes métodos de pago con caracteristicas diferentes:

```Java
    class Paypal{//METODO DE PAGO POR PAYPAL
        String email;  
        public Payment(Integer id,String email){
            super(id);
            this.email = email;
        }
    }
```
```Java
    class Card{//METODO DE PAGO POR TARJETA
        Integer cardNumber;
        String date;
        String cvv;
        public Card(Integer id,Integer cardNumber,String date,String cvv){
            super(id);
            this.cardNumber = cardNumber;
            this.date = date;
            this.cvv = cvv;
        }
    }
```
```Java
    class Cash{//METODO DE PAGO EN EFECTIVO  
        public Cash(Integer id){
            super(id);
        }
    }
```

**LO VES??** tres métodos de pago muy diferentes pero que son de la misma familia y que debido eso hay que agruparlos en una clase más general!

---