# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

# Sección 2: Clean Code y Deuda técnica

## Temas puntuales de la sección

En esta sección estaremos hablando y haciendo ejercicios sobre:

¿Qué es la deuda técnica?

¿Cómo se paga la deuda técnica?

Refactorización

Nombres de variables

Nombres para funciones

Ejercicios de refactorización

Principio DRY

Esta sección procura que empecemos a escribir código que sea fácil de leer por nosotros y otros desarrolladores.

### Principio DRY - Dont Repeat Yourself

#### "Si quieres ser un programador productivo esfuérzate en escribir código legible"

- Simplemente es evitar tener duplicidad de código
- Simplifica las pruebas
- Ayuda a centralizar procesos
- Aplicar principio DRY, usualmente lleva a refactorizar

# Sección 3: Clean Code - Clases y comentarios

## Temas puntuales de la sección

En esta sección hablaremos principalmente sobre clases y conceptos generales para escribir un mejor código.

Es importante tener presente que así como todo, hay excepciones a cada regla, pero esto debería ser un caso aislado y no el estándar. Tratemos de escribir un mejor código y dejar de lado la comodidad de hacer las cosas como se han venido haciendo, especialmente si esas cosas traen muchos problemas.

# Sección 4: Acrónimo STUPID

## Temas puntuales de la sección

Esta es una sección corta y mayormente explicativa, en donde hablaremos sobre varios "code smells".

La idea es evitar a toda costa estos puntos que hacen que nuestro código pierda calidad.

## CodeSmells - STUPID

* Singleton -> patrón Singleton
* Tight Coupling -> alto acoplamiento
* Unestability -> código no probable
* Premature optimization -> optimizaciones prematuras
* Indescriptive Naming -> nombres poco descriptivos
* Duplication -> duplicaidad de código, no aplicar principio DRY

### Singleton

Pros: 
- Garantiza una única instancia de la clase a lo largo de toda la aplicación

Contra:
- Vive en el contexto global
- Puede ser modificado por cualquiera y en cualquier monento
- No es rastreable
- Dificil de testear debido a su ubicación

### Acomploamiento
Lo ideal es tener bajo acoplamiento y buena cohesión  

Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.

- En bajo acoplamiento, cambiar algo importante en una clase no deberia afectar a la otra.
- En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

 #### Alto acomplomiento

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos
- El ensamblaje de módulos puede requerir más esfuerzo o tiempo debido a la mayor dependencia de módulos
- Un módulo en particular puede ser más difícil de reutilizar o probar porque se deben incluir módulos dependientes  

#### "Un buen diseño de software tiene alta cohesión y bajo acoplamiento"

#### "Queremos diseñar componentes que sean auto contenidos , auto suficientes e independientes. Con un objetivo y un propósito bien definido."

#### Cohesión

- La cohesión se refiere a lo que la clase (o módulo) puede hacer.
- La baja cohesión significaría qie la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
. alta cohesión significa que la clase de enfoca en lo que de bevería estar  haciendo , es decir, solo métodos relacionados con la intención de la clase.

### Código no probable  
Código dificilmente testeable
- Código con alto acoplamiento
- Código con muchas ddependencias no inyectadas.
- Dependencias en el contexto global(Tipo Singleton)

#### Debemos tener en mente las pruebas desde la creación del código

### Optimizaciones prematuras

- Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a los que es más importante en una aplicación.

- No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental

#### Complejidad escencial

La complejidad es inherente al problema.
Cuando implementamos una solución compleja a la mínima indispensable. 

### Nombres poco descriptivos

- Nombres de variables mal nombradas
- Nombres de clases genéricas
- Nombres de funciones mal nombradas
- Ser muy especifico o demasiado genérico

### Duplicidad de código
No aplicar principio DRY

#### Real
- Código es idéntico y cumple la misma función.
- Un cambio implicaría actualizar todo el código idéntico en varios luagres.
- Incrementa posibilidades de error humano al olvidar una parte para actualizar.
- Mayor cantidad de pruebas innecesarias

#### Accidental
- Código luce similar pero cumple funciones distintas.
- Cuando hay un cambio. sólo hay que modificar un solo lugar.
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

### Otros olores honoríficos - Code smells
Que merecen tener su mención especial

Funciones sobre cargadas: destructurar la función en otras funciones para cada tarea en especifico.  
Clases demasiado extendidas: destructurar la clase en otras clases para cada tarea en especifico.  

# Sección 5: Principios SOLID

## Temas puntuales de la sección

En esta sección hablaremos al fin sobre los principios S.O.L.I.D.

Cada principio básicamente cuenta de 3 partes, una exposición, un ejercicio y cómo detectar violaciones al principio, algunos son bastante obvios y otros tienen un poco más de complejidad, pero no dejen que los nombres los asusten, son fáciles de comprender con la práctica.

### SOLID

- Single Responsability: Responsabilidad única
- Open and Close: Abierto y cerrado
- Liskov Substitution: Sustitución de Liskov
- Interface Integration: Segregación de interfaz
- Dependency inversión: Inversión de dependencias

## SRP - Responsabilidad única

**"Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo. Robert C. Martin"**  
**"tener una única clase !== hacer una única cosa"**  

### SRP - Detectar violaciones

- Nombres de clases y módulos demasiado genéricos.
- Cambios en el código suelen afectar la clase o módulo.
- La clase involucra múltiplea capas.
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Exceso nṕumero de líneas de código.

## OCP - Principio de abierto y cerrado
Es un principio que depende mucho del contexto.

**Establece que las entidades de software (clases, módulos, métodos, etc) deben estar abiertas para la extensión, pero cerradas para la modificación**

### OCP - Detectar violaciones

- Cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc)

## Substitución de Liskov

**Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo. Robert C.Martin**    
**Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alteras las propiedades del sistema**





# Wiki

* [Refactoring Gurú](https://refactoring.guru/)