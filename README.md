# Programación oriendada a objetos *(conceptos básicos)*

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
Utilizamos **Account cuenta1** para declarar la variable cuenta1 de tipo Account y luego la inicializamos como una instancia de la clase Account con **new Account();**.

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

## Constructor

---

## Herencia

*Abstracción muy general para crear clases a partir de otras clases, es importante para mantener el principio de DRY*

- La herencia nos permite generalizar las clases y crear subclases que hereden los atributos y comportamientos de la clase mayor, así no redundamos código.
- A la clase de la cual se hereda se le llama Súperclase y las que heredan se llaman subclases, o clase padre y clase hijo respectivamente.
- Se identifica analizando varias clases con atributos y comportamientos similares.

*Cuando detecto características y comportamientos similares debo realizar una abstracción*

Otra forma de analizar herencia es partiendo de los elementos en común, la lógica de negocio puede decirte que algunos elementos se deben agrupar en una clase más general . . .

---