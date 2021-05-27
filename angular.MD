## Angular

2009 querian crear herramienta para que personas que no sabian programar
pero que si sabian html lo usaran, un super HTML.

2010 se volvio open source y google.

2012 y 2014 se volvio muy popular

## Como funciona y cual es su arquitectura.

- Creacion de componentes con ngModule.
- mgModules son contenedores que agrupan componentes y servicios.
- Servicios son agrupaciones de codigo, agrupaciones de logica que podemos reutilizar
- Estos servicios se inyectan usando inyeccion de dependencia.

## Como se utiliza

- Angular Ivy para renderizar la WEB (como React DOM)
  - Usa estrategia llamada Incremental DOM
  - Angular ivy traduce el html en instrucciones de JS para renderizar componentes en el DOM
- Utiliza el incremental DOM, no crea copia del DOM lo que ahorra memoria.

(What changes are the tags)

## Componentes

### Links

- https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36
- https://blog.ninja-squad.com/2019/05/07/what-is-angular-ivy/
- https://dev.to/eugeniolentini/an-introduction-to-angular-9-ivy-compiler-177n
- https://platzi.com/blog/inyeccion-de-dependencias-el-camino-de-las-buenas-practicas/
- https://platzi.com/clases/2239-frameworks-javascript/36161-que-es-angular-y-como-se-construyo/
