# Programación oriendada a objetos *(conceptos básicos)*

## Objeto

- Los objetos siempre van a tener comportamientos y propiedades (o atributos)
- Además los objetos son sustantivos
- Los objetos pueden ser físicos o conceptuales, físicos como una persona (User) o conceptual como una sesión (Session)
- Los atributos serán sustantivos y son las propiedades que componen al objeto
- Los comportamientos son las acciones que el objeto pueda realizar y serán verbos o sustantivos o ambos

*Recordar siempre tomar los propiedades (o atributos) y comportamientos sobre el CONTEXTO del objeto como en este ejemplo:*

<img src="https://i.postimg.cc/6QBWB5ns/arboles.png" alt="drawing" width="700"/>

>No es lo mismo definir un objeto arbol que un objeto arbol de navidad
---
## Clases

- Las clases se usan para generar objetos
- Es el modelo por el cual nuestros objetos se construirán
- En las clases se define la forma más general del objeto
- Analizamos los objetos para crear clases

## Abstracción

- Al traer todos los componentes o datos de un objeto que hemos identificado y convertirlo en clases se le llama abstracción
- Es el analisis que hacemos sobre los objetos idenfificados

---

## Modularidad

- La modularidad viene de la arquitectura y el diseño "per sé" y es subdividir un sistema en parte más pequeñas
- Cada una de esas partes se llamarán módulos y cada uno funciona de manera independiente

*En si modularidad significa dividir nuestro sistema en varios trozos de código* 

- ### **La modularidad lleva consigo:**
    - **Reutilizar** código en diferentes partes de nuestro sistema
    - **Evitar colapsos** en suestro sistema ya que al momento de que falle un módulo los demás que son independientes no sufrirán
    - **Mantenibilidad** porque fácilita hacer cámbios y al momento de incluir un nuevo módulo se va a acoplar fácilmente a los demás
    - **Legibilidad** ya que nuestro software estará dividido en trozos de código y será más sencillo de leer y comprender
    - **Resolución rápida de problemas** porque al estár separado en módulos esto facilita la detección y solución de errores

>Más que imaginar un fragmento de código gigantesco, es mejor imaginar y empezar a pensar que debemos programar en pequeños trozos - Anahí Salgado Díaz de la Vega

Las clases son precisamente las que provocan la módularidad ya que cada módulo es una clase y cada clase irá en un archivo diferente (Esa es la idea)
