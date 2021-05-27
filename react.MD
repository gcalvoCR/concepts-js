## Ecmascript

Standard for JS, especificacion que cada browser implementa.

## Objetivos

- `Declarativo`
  - Facil de leer
- `Basado en componentes`
  - QUe utilicemos componentes
- `Multiplataforma`
  - Learn once, write everywhere

## Como se utiliza

Juntar React con:

- React DOM se utiliza para hacer el render en WEB
- React Native para moviles
- React VR para aplicaciones en realidad virtual

(What changes are the tags)

## Componentes

2 formas:

- Usando clases
  '''
  class Welcome extends React.Component {
  render() {
  return <h1>Hello, {this.props.name}</h1>;
  }
  }
  '''

- Usando funciones (React hooks)
  """
  function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  }
  """

Vue 💚:
https://es.vuejs.org/v2/guide/instance.html#Diagrama-del-Ciclo-de-vida

Svelte 🧡:
https://svelte.dev/docs#Run_time

Angular 💓:
https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688

React 💙:
https://es.reactjs.org/docs/state-and-lifecycle.html

Notas:

- Estamos escribiendo HTML dentro de JS
- La transformacion a JS la realiza Babel
- JS y HTML es lo que llamamos JSX

## State

- State --> nos permite cambiar el cotenido de una variable respecto a las interacciones del usuario

## Lifecycle

- Componentes
- Montaje
- Actualizacion --> genera nuevo render()
- componentDidUpdate()
-

Que es?
https://www.youtube.com/watch?v=PBpl04hW-Ew

Historia
https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/

Links
https://www.youtube.com/watch?v=O1CLgdMF45A

### Tips

¿Cómo evitar que todos los componentes vayan envueltos en etiquetas <div> y por ende el DOM se llene de divs innecesarios?
En vez de envolver todo el componente entre etiquetas <div> se puede usar la etiqueta de JSX <React.Fragment> (o su “shorthand”… <>):

'''
<React.Fragment>

<h2>Titulo</h2>
<form>...</form>
</React.Fragment>

<>

<h2>Titulo</h2>
<form>...</form>
</>
'''

¿Cómo hacer que la página no se recargue?
Se puede asociar una función que se ejecute onclick en cada botón, o como submit del form, cuya primera línea sea event.preventDefault()
