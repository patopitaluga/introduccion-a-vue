# Y Vue... ¯\\\_(ツ)\_/¯ (introducción a Vue)

Introducción a Vue

------

## Contenidos

1. [Requisitos](#requisitos)
2. [Presentación](#intro)
3. [Instalación](#instalacion)
4. [Hello World](#helloworld)
5. [List rendering](#list-renderig)
6. [Events](#events)
7. [Props dinámicas en elementos](#props)
8. [Classes / Styles](#classes-y-styles)
9. [Componentes](#components)
10. [Props de componentes](#props-de-componentes)
11. [v-model](#v-model)
12. [Methods](#methods)
13. [Ciclo de vida](#ciclo-de-vida)
14. [Comunicación entre componentes](#comunicacion)
15. [Ejemplo utilizando lo visto](#ejemplo-completo)
16. [Webpack](#webpack)
17. [Trucos](#trucos)
18. [Para seguir aprendiendo](#mas)

------

## Requisitos

### Conocimientos previos necesarios:
Un poco de *html*, un poco de *css* y un poco de *javascript*

### Software necesario:
- Cualquier IDE (yo voy a usar VSCode)
- Node puede ser útil

------

## ¿Qué es Vue?
Es un framework de JavaScript para construir interfaces

### ¿Cómo se pronuncia?

Se pronuncia /vjuː/, como *view* (viú)

## ¿Cómo se siente Vue?

Si React se parece a usar javascript con html adentro, Vue se parece a usar html con javascript adentro.

------

https://vuejs.org/guide/introduction.html

## ¿Por qué Vue y no React/Svelte/jQuery/Vanilla Js?

- **vs. javascript Vanilla**: <ins>algunos</ins> scripts pueden quedar más comprensibles, sencillos, fáciles de mantener y reutilizables.
- **vs. jQuery**: Porque no es 2013
- **vs. React**: Porque no pertenece a Facebook :D además es un poco más sencillo de implementar y toda la lógica de funcionamiento es más (en mi opinión)
- **vs. Svelte/Otros**: ?

En definitiva: la performance es tan buena o mejor que React (fuente?) el ingreso a Vue es más sencillo, el ecosistema es enorme y es robusto, hay muchísimas librerías de mucha calidad, la documentación y los tutoriales son muy buenos. La comunidad de Vue es súper friendly.

------

## ¿Cómo usarlo desde un cdn?

Así lo van a encontrar en la documentación oficial de Vue:

```
<script src="https://unpkg.com/vue@3"></script>
```

Todos los ejemplos que voy a mostrar son de la versión 3 de Vue

### ¿Se puede usar así de un cdn para producción?
Ni.

Se supone que para un entorno productivo tendremos más control y mejor performance si lo instalamos como node_module y incorporamos en el bundle. La realidad es que incluso desde un cdn performa lo suficientemente bien.

Todos los ejemplos que veremos aquí funcionan tanto usandolos directamente con un cdn como armando todo el build con webpack o similar. Pasarlo de una manera a la otra es bastante sencillo.

------

### En la escena after credits veremos cómo usarlo con webpack o vue create

------

## Hello World Vue 3

```
<div id="contenedor-de-mi-app">
  {{ miVariable }}
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        miVariable: 'Hola ' + (5 + 5)
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

Esto lo pueden copiar y pegar en un archivo index.html y verlo en un browser y funciona.

¿Qué está haciendo?
- Crea un elemento de html &lt;div&gt; con el id "contenedor-de-mi-app". Este id puede ser cualquiera, solo se usa para que Vue pueda identificar dónde vivirá la app Vue.
- Usando las llaves {{ }} indica donde se mostrará el valor de la variable miVariable. Este nombre lo he inventado para el ejemplo.
- Carga Vue de un cdn unpkg según indica la documentación oficial de Vue. Esto declarará un objeto que se llama Vue que contiene todas las propiedades y métodos.
- Usa el método createApp de Vue y se lo asigna a una variable. El nombre miApp lo he inventado para este ejemplo. createApp recibe un único parámetro que es un objeto.
- La propiedad "data" del objeto que es parámetro de createApp contendrá una función que devuelve un objeto con las variables reactivas y su valor inicial.
- Usa la función mount de la app declarada para indicar en qué elemento contenedor funcionará la app de Vue.

------

## List Rendering / Cómo hacer loops de array

```
<div id="contenedor-de-mi-app">
  <ul v-for="cadaElemento in miLista">
    <li>{{ cadaElemento.name }}</li>
  <ul>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        miLista: [
          {
            name: 'Primer elemento'
          },
          {
            name: 'Segundo elemento'
          }
        ],
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

## Listening to Events

```
<div id="contenedor-de-mi-app">
  <div>{{ seClickeo }}</div>

  <button @click="seClickeo = 'sí'">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        seClickeo: 'no'
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

## Props dinámicas
Dentro de las "" de cualquier prop de un elemento html o componente vue se puede correr javascript. Generalmente se usa para usar variables reactivas de data. En este ejemplo lo uso para setear la propiedad disabled de un &lt;input&gt;

```
<div id="contenedor-de-mi-app">
  <input :disabled="estaDeshabilitado"/>

  <button @click="estaDeshabilitado = true">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        estaDeshabilitado: false
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

## Classes y styles

### Style

Cuando la propiedad **style** de un elemento se escribe con : el contenido debe ser un objeto con el nombre de las propiedades de css como string como key. Aquí el ejemplo atando el border-color de un &lt;input&gt; a una variable reactiva.

```
<div id="contenedor-de-mi-app">
  <input :style="{ 'border-color': colorBorde }"/>

  <button @click="colorBorde = 'red'">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        colorBorde: 'blue'
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

A dferencia de React, Vue conserva el mismo casing de las propiedades de css.

Si el elemento tiene la propiedad style con y sin :, primero considerará las propiedades del style estático y luego el :style dinámico, de manera que puede usarse para sobreescribir propiedades.

### Class

```
<style>
  .mi-input {
    border: 1px blue solid;
  }
  .mi-input.mi-input-destacado {
    border: 1px red solid;
  }
</style>
<div id="contenedor-de-mi-app">
  <input class="mi-input" :class="{ 'mi-input-destacado': miInputDestacado }"/>

  <button @click="miInputDestacado = true">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        miInputDestacado: false
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

## Crear un componente

En **componentes/mi-componente-header.mjs**

```
const miComponenteHeader = {
  template: `
  <div>
    Hello world {{ miVariable }}
  </div>
`
  data: function() {
    return {
      miVariable: 'hola',
    };
  },
};

export { miComponenteHeader };
```

Si se va a usar sin bundler, con módulos nativos de javascript, en el archivo del layout html principal, cargar el js principal de la app de vue con la prop type="module" y los módulos que se importen en ese archivo deben ser **.mjs** y no **.js**

Por eso estoy usando un string como template. Si se hace el bundle con webpack se puede usar html y css/scss en el mismo archivo pero la extensión será **.vue**

```
<div id="contenedor-de-mi-app">
  <micomponenteheader>
  </micomponenteheader>

  <h1>Título</h1>
</div>

<script src="https://unpkg.com/vue@3"></script>

<script type="module" src="mi-app.js"></script>
```

En **mi-app.js**:

```
import { miComponenteHeader } from './componentes/mi-componente-header.mjs';

const miApp = Vue.createApp({
  data: function() {
    return {
      unaVariableCualquiera: true,
    };
  },
})

miApp.component('micomponenteheader', miComponenteHeader);

miApp.mount('#contenedor-de-mi-app');
```

Si se va a usar con webpack u otro bundler que cree un archivo js único, no es necesario cargarlo con type="module", el resto del js es igual, de modo que es muy fácil pasar de una arquitectura a la otra.

------

## Props

Se declaran en el objeto que es parámetro de **createApp**

```
  props: {
    miProp: {
      type: Number,
      required: true,
    },
  },
```

Allí se declaran en camel case pero al definir el argumento en el html se hará con kebab-case. Ejemplo:
&lt;micomponenteheader :mi-prop="unaVariable" &gt; en este caso estoy usando los : porque quiero ingresar el valor que tenga unaVariable como Number, si no hubiera puesto los dos puntos estaría ingresando el string "unaVariable" literalmente.

Las props pueden o no ser tipadas. Se recomienda que sí lo sean. Pueden tener una función customizada que valide el formato. En tu cara typescript.

## v-model

v-model es una manera corta de especificar que una variable se insertará siempre como propiedad y al mismo tiempo se actualizará con un event si cambia dentro del componente. Se suele usar con los elementos de html interactivos pero se puede usar en un componente Vue creado por nosotros.

```
<div id="contenedor-de-mi-app">
  {{ miVariable }}

  <input type="text" v-model="miVariable" />

  <button @click="miVariable = 'Buen día'">Cambiar</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  const miApp = Vue.createApp({
    data: function() {
      return {
        miVariable: 'Hola'
      };
    },
  });

  miApp.mount('#contenedor-de-mi-app');
</script>
```

## Methods

Vimos que Vue puede escuchar el evento @click que emite un &lt;button&gt; por ejemplo:
```
<button @click="miVariable++">Aquí</button>
```

Si una función es más compleja en vez de hacerla inline se puede declarar un method. Por ejemplo:

<form @submit.prevent="miMetodoDeSubmit">
  <input type="text">
</form>


## Ciclo de vida de los componentes de Vue

En el 90% de los casos solo será necesario **mounted**. Un componente de Vue va a disparar mounted cuando termine de renderearse así que ahí disponemos de todos los métodos del DOM y de Vue.

Pueden investigar otros en la documentación de Vue.

**mounted** es una función que se declara en el objeto que es parámetro de **createApp**

```
const miApp = Vue.createApp({
  data: function() {
    return {
      miVariable: {
        valor1: 'Hola'
      },
    };
  },
  mounted: function() {
    fetch('https://demo.com')
      .then((res) => this.valor = res.json());
  },
})

miApp.mount('#contenedor-de-mi-app');
```

Es práctico usar **function** allí y no **() =>** para disponer de todo Vue y de todo el componente con **this**.

## Insertar información a un componente

La manera más elegante de incorporar información del padre al componente es a través de una prop. Por ejemplo &lt;micomponente :prop-que-necesita="unaVariable"&gt;&lt;/micomponente&gt;

Otra puede ser a través del #ref de esa instancia del componente pero esto hace a todos los componentes menos independientes. Ejemplo: this.$ref.elnombre.laVariable = 'hola';

Para obtener información del componente hacia el padre se usa $emit

Otra opción es insertar una función como una prop, similar a React, pero suele ser más confusa, en cambio los events que se emiten siempre son para esto.

https://vuejs.org/guide/components/events.html

Ejemplo: de la misma manera que Vue escuchaba @click en el ejemplo anterior, puede escuchar el emit que haga ese componente: &lt;micomponente @algo="unMethod"&gt;&lt;/micomponente&gt;

------

## Ejemplo live coding utilizando todo lo que vimos

Una webapp con un sidebar desplegable. Si la pantalla es pequeña, el sidebar se plagará. El estado del sidebar se guardará en localstorage. La webapp leerá de una api el estado del clima y mostrará un emoji si va a llover y otro si estará soleado. Tendrá un widget para suscribirte a un newsletter.


------

## Un trick útil: ocultar el html previo a que cargue Vue

Ya que el html se puede renderear antes de que Vue termine cargar, aunque sea unos milisegundos, pueden mostrarse al usuario los {{  }} con el nombre de la variable. Para evitar eso Vue quitará la propiedad v-cloak al terminar de cargar, esa propiedad se puede usar para ocultar los elementos que muestran contenido reactivo.

En el head
```
<style>
[v-cloak] {
  display: none !important
}
/* Hide Vue while loading */
</style>
```
En el elemento o componente que se quiere ocultar
```
<div v-cloak>
  {{ theContentFlashing }}
</div>
```

## Tarea para el hogar

# Seguir aprendiendo de Vue

- computed
- filters
- ciclo de vida de la app

### Otras tecnologías del ecosistema Vue a investigar:

Librerías del ecosistema Vue

- vue-router
- Vuex: is a state management pattern + library for Vue.js applications. Equivalente a
- Nuxt: equivalente a Next
- Vuetify: librería de componentes Vue
