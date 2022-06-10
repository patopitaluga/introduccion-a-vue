# Y Vue... ¯\\\_(ツ)\_/¯ (introducción a Vue)

Introducción a Vue

------

## Contenidos

- Intro
  * [Requisitos](#requisitos)
  * [Presentación](#intro)
  * [Setup de entorno](#setup)
- Features de Vue
  * [Essentials](#essentials)
  * [Hello World (render de variables)](#helloworld)
  * [Conditional rendering (v-if)](#conditional-rendering)
  * [List rendering](#list-renderig)
  * [Attributes dinámicos](#attributes)
  * [Classes / Styles](#classes-y-styles)
  * [v-model](#v-model)
  * [Methods](#methods)
  * [v-cloak](#vcloak)
  * [Ciclo de vida](#ciclo-de-vida)
- Composition api
  * [Setup](#composition-api)
- Arquitectura de componentes
  * [Componentes](#components)
  * [Definir props](#definir-props)
  * [Componentes como archivos .vue](#archivos-vue)
  * [Comunicación entre componentes](#comunicacion)
- Aplicando todo
  * [Ejemplo utilizando lo visto](#ejemplo-completo)
- Otros
  * [Webpack](#webpack)
  * [Para seguir aprendiendo](#mas)

------

## <a name="requisitos"></a> Requisitos

### Conocimientos previos necesarios:
Un poco de *html*, un poco de *css* y un poco de *javascript*

### Software necesario:
- Cualquier IDE
- Node para el ejemplo con bundler

------

## <a name="intro"></a> ¿Qué es Vue?

Es un framework de JavaScript para construir interfaces

### ¿Cómo se pronuncia?

Se pronuncia /vjuː/, como *view* (viú)

## ¿Cómo se siente Vue?

Si React se parece a usar javascript con html adentro, Vue se parece a usar html con javascript adentro.

------

## ¿Por qué Vue y no React/Svelte/jQuery/Vanilla Js?

- **vs. javascript Vanilla**: <ins>algunos</ins> scripts pueden quedar más comprensibles, sencillos, fáciles de mantener y reutilizables.
- **vs. jQuery**: Porque no es 2013
- **vs. React**: Porque no pertenece a Facebook :D además es un poco más sencillo de implementar y toda la lógica de funcionamiento es más (en mi opinión)
- **vs. Svelte/Otros**: ?

En definitiva: la performance es tan buena o mejor que React, el ingreso a Vue es más sencillo, el ecosistema es enorme y es robusto, hay muchísimas librerías de mucha calidad, la documentación y los tutoriales son muy buenos. La comunidad de Vue es súper friendly.

------

## <a name="setup"></a> ¿Cómo usarlo desde un cdn?

Así lo van a encontrar en la documentación oficial de Vue:

```html
<script src="https://unpkg.com/vue@3"></script>
```

Todos los ejemplos que voy a mostrar son de la versión 3 de Vue

### ¿Se puede usar así de un cdn para producción?
Ni.

Se supone que para un entorno productivo tendremos más control y mejor performance si lo instalamos como node_module y incorporamos en el bundle. La realidad es que incluso desde un cdn performa lo suficientemente bien.

Todos los ejemplos que veremos aquí funcionan tanto usandolos directamente con un cdn como armando todo el build con webpack o similar. Pasarlo de una manera a la otra es bastante sencillo.

------

## <a name="essentials"></a> Essentials

### Directivas en el html:
- v-if
- v-for
- @events
- :attributes
- style/class
- v-model
- v-cloak

### Propiedades de createApp:
#### Options api:
- props
- data
- mounted
- methods
#### Composition Api:
- Setup

------

## <a name="helloworld"></a> Hello World (render de variables)

```html
<div id="contenedor-de-mi-app">
  {{ miVariable }}
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        miVariable: 'Hola ' + (5 + 5)
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Esto lo pueden copiar y pegar en un archivo index.html y verlo en un browser y funciona.

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-1-hello-world.html

**¿Qué está haciendo?**
- Crea un elemento de html &lt;div&gt; con el id "contenedor-de-mi-app". Este id puede ser cualquiera, solo se usa para que Vue pueda identificar dónde vivirá la app Vue.
- unpkg es un cdn para librerías de npmjs. Es el cdn recomendado por la documentación oficial de Vue. Al ponerle @3 va a revisar cuál es la última que tiene de la versión 3 y va a redireccionar a la url de la versión específica. Para hacer más rápido el download se puede especificar esa versión directamente. Si se pone la .prod.js viene minificado y pesa menos, pero no se puede debugear con el plugin para Chrome. Para producción se recomienda la minificada.
- ¿Dónde poner ese tag script? Estratégicamente considerando que es render blocking. Si nos sirve que detenga el rendering hasta que se ejecute todo Vue, usarlo allí. Ante la duda: antes de cerrar el body o con **defer**.
- El tag script puede contener la propiedad integrity con un hash, con eso si se sospecha que alguien pudo haber ingresado scripts maliciosos en el cdn y no coincidirá el hash y el browser no lo va a ejecutar
- Vue declarará un objeto que se llama Vue.
- Usando las llaves {{ }} indica donde se mostrará el valor de la variable miVariable. El nombre miVariable (y todos los que estén en español en esta charla) lo inventé yo para el ejemplo. No es obligatorio que el caracter de render sea la doble llave. Si se va a usar junto con algún sistema de template (Mustache por ej.) y coincide que también usa la doble llave, se puede setear Vue para que use otros caracteres.
- Usa el método createApp que es una función recibe un único parámetro que es un objeto.
- La propiedad "data" del objeto que es parámetro de createApp contendrá una función que devuelve un objeto con las variables reactivas y su valor inicial.
- Usa la función mount de la app declarada para indicar en qué elemento contenedor funcionará la app de Vue.

------

## <a name="conditional-rendering"></a> Conditional rendering (v-if)

```html
<div id="contenedor-de-mi-app">
  <p v-if="contenidoDisponible">
    Hola
  </p>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        contenidoDisponible: true
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-2-conditional-rendering.html

Dentro del v-if se ejecuta una condición, puede ser una variable, una comparación o una función.

Cuando es **false**, el elemento del v-if **no está para nada**. No es que está con display none, sino que no está en el DOM directamente.

------

## <a name="list-renderig"></a> List Rendering / Cómo hacer loops de array

```html
<div id="contenedor-de-mi-app">
  <ul>
    <li v-for="cadaElemento in miLista">{{ cadaElemento.name }}</li>
  <ul>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
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
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-3-list-rendering.html

Puede traer el índice del loop haciendo (cadaElemento, indice) in miLista

------

## <a name="events"></a> Escuchando Events

El equivalente en vanilla a .on... / addEventListener

Se hacen poniendo un @ delante del envento. Tengan en cuenta que dentro de los "" del listener del evento se está ejecutando javascript, así que se pueden leer/escribir variables o correr funciones.

```html
<div id="contenedor-de-mi-app">
  <div>{{ seClickeo }}</div>

  <button @click="seClickeo = 'sí'">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        seClickeo: 'no'
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-4-events.html

------

## <a name="attributes"></a> Attributes dinámicos / Attribute binding

Dentro de las "" de cualquier attribute de un elemento html o componente vue se puede correr javascript. Generalmente se usa para usar variables reactivas de data. En este ejemplo lo uso para setear el attributo disabled de un &lt;input&gt;

```html
<div id="contenedor-de-mi-app">
  <input :disabled="estaDeshabilitado"/>

  <button @click="estaDeshabilitado = true">Toca</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        estaDeshabilitado: false
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-5-attribs.html

------

## <a name="classes-y-styles"></a> Classes y styles

### Style

Cuando la propiedad **style** de un elemento se escribe con : el contenido debe ser un objeto con el nombre de las propiedades de css como string como key. Aquí el ejemplo atando el border-color de un &lt;input&gt; a una variable reactiva.

```html
<div id="contenedor-de-mi-app">
  <input :style="{ 'border-color': colorBorde }"/>

  <button @click="colorBorde = 'red'">Tocá</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        colorBorde: 'blue'
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-6-style.html

A dferencia de React, Vue conserva el mismo casing de las propiedades de css.

Si el elemento tiene la propiedad style con y sin :, primero considerará las propiedades del style estático y luego el :style dinámico, de manera que puede usarse para sobreescribir propiedades.

### Class

```html
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
  Vue.createApp({
    data: function() {
      return {
        miInputDestacado: false
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-7-class.html

------

## <a name="v-model"></a> v-model

v-model es una manera corta de especificar que una variable se insertará siempre como propiedad y al mismo tiempo se actualizará con un event si cambia dentro del componente. Se suele usar con los elementos de html interactivos pero se puede usar en un componente Vue creado por nosotros.

```html
<div id="contenedor-de-mi-app">
  {{ miVariable }}

  <input type="text" v-model="miVariable" />

  <button @click="miVariable = 'Buen día'">Cambiar</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        miVariable: 'Hola'
      };
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-8-v-model.html

------

## <a name="methods"></a> Methods

Vimos que Vue puede escuchar el evento @click que emite un &lt;button&gt; por ejemplo:
```html
<button @click="miVariable++">Aquí</button>
```

Si una función es más compleja en vez de hacerla inline se puede declarar un method. Por ejemplo:

```html
<button @click="miMetodo">Aquí</button>
```

o

```html
<form @submit.prevent="miMetodoDeSubmit">
  <input type="text">
  <button type="submit">Enviar</button>
</form>
```

El .prevent aplica automáticamente preventDefault, en este caso detiene el submit real del &lt;form&gt; y en su lugar corre un método.

Para definirlo se declara en el objeto que es parámetro de **createApp**

```javascript
Vue.createApp({
  methods: {
    miMetodo: function() {
      alert('Se ha ejecutado')
    },
  },
});
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-9-methods.html

Es práctico que se use **function** y no arrow functions =&gt; porque así se dispone del this para acceder a las variables de **data**.

```html
<div id="contenedor-de-mi-app">
  {{ miSaludo }}

  <button @click="miMetodo('noche')">Es noche</button>
  <button @click="miMetodo('dia')">Es dia</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data: function() {
      return {
        miSaludo: 'Hola'
      };
    },
    methods: {
      miMetodo: function(queMomento) {
        if (queMomento === 'noche')
          this.miSaludo = 'buenas noches';
        if (queMomento === 'dia')
          this.miSaludo = 'buen dia';
      },
    },
  })
    .mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-10-vars-en-methods.html

------

## <a name="vcloak"></a> v-cloak: ocultar el html previo a que cargue Vue

Ya que el html se puede renderear antes de que Vue termine cargar, aunque sea unos milisegundos, pueden mostrarse al usuario los {{  }} con el nombre de la variable. Para evitar eso Vue quitará la propiedad v-cloak al terminar de cargar, esa propiedad se puede usar para ocultar los elementos que muestran contenido reactivo.

En el head
```html
<style>
[v-cloak] {
  display: none !important
}
/* Hide Vue while loading */
</style>
```
En el elemento o componente que se quiere ocultar
```html
<div v-cloak>
  {{ theContentFlashing }}
</div>
```

------

## <a name="ciclo-de-vida"></a> Ciclo de vida de las apps/componentes de Vue

En el 90% de los casos solo será necesario **mounted**. Un componente de Vue va a disparar mounted cuando termine de renderearse así que ahí disponemos de todos los métodos del DOM y de Vue.

Pueden investigar otros en la documentación de Vue.

**mounted** es una función que se declara en el objeto que es parámetro de **createApp**

```javascript
  Vue.createApp({
    data: function() {
      return {
        miVariable: {
          valor1: 'Hola'
        }
      };
    },
    mounted: function() {
      fetch('https://demo.com')
        .then(async(res) => {
          const miObjeto = await res.json();
          this.valor1 = miObjeto.valor1;
        });
    },
  })
    .mount('#contenedor-de-mi-app');
```

Es práctico usar **function** allí y no **() =>** para disponer de todo Vue y de todo el componente con **this**.

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-11-lifecycle-mounted.html

------

## <a name="ciclo-de-vida"></a> Setup de composition api

Como alternativa, Vue 3 tiene un esquema similar a los hooks de react. Con el uso de los "essentials" son los mismos conceptos de "data", "methods", "props" y "events" pero seteados en una única prop de createApp que se llama **setup**. En un uso más complejo tiene más opciones. Solucionan el problema de tener muchos componentes que comparten las mismas variables reactivas y funciones porque se pueden importar.

```html
<div id="contenedor-de-mi-app">
  <h1>{{ count }}</h1>  <!-- Sin .value -->
  <button @click="increment">Increment</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    setup: function() { // setup es una prop nueva
      const count = Vue.ref(0); // con .ref se declaran las variables reactivas

      // Los métodos ahora son simplemente funciones
      const increment = () => {
        count.value++; // se modifican con la prop .value
      }

      Vue.onMounted(() => {
        console.log(`The initial count is ${count.value}.`) // en las funciones se leen con .value
      })

      return {
        count, // devuelve un objeto con las variables reactivas y los "métodos"
        increment
      }
    }
  }).mount('#contenedor-de-mi-app');
</script>
```

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-12-composition-api.html

------

## <a name="components"></a> Crear un componente

La mayoría de las veces, cuando se habla de una *aplicación de Vue* o de un *componente de Vue*, se habla de la misma cosa.

Si se va a usar sin bundler, con módulos nativos de javascript, en el archivo del layout html principal, cargar el js principal de la app de vue con la prop type="module" y los módulos que se importen en ese archivo deben ser **.mjs** y no **.js**

Por eso estoy usando un string como template. Si se hace el bundle con webpack se puede usar html y css/scss en el mismo archivo pero la extensión será **.vue**

En index.html

```html
<div id="contenedor-de-mi-app">
  <micomponenteheader>
  </micomponenteheader>

  <h1>Título</h1>
</div>

<script src="https://unpkg.com/vue@3"></script>

<script type="module" src="mi-app.js"></script>
```

En **mi-app.js**:

```javascript
import { miComponenteHeader } from './componentes/mi-componente-header.mjs';

Vue.createApp({
  components: {
    'micomponenteheader': miComponenteHeader,
  },
  data: function() {
    return {
      unaVariableCualquiera: true,
    };
  },
})
  .mount('#contenedor-de-mi-app');
```

En **componentes/mi-componente-header.mjs**

```javascript
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

Si se va a usar con webpack u otro bundler que cree un archivo js único, no es necesario cargarlo con type="module", el resto del js es igual, de modo que es muy fácil pasar de una arquitectura a la otra.

Vivo: https://patopitaluga.github.io/introduccion-a-vue/ejemplo-import-in-browser/index.html

------

## <a name="definir-props"></a> Definir props

Se declaran en el objeto que es parámetro de **createApp**

```javascript
const miComponente = {
  template: `
  <div>
    Hello world {{ miProp }}
  </div>
`,
  props: {
    miProp: {
      type: Number,
      required: true
    }
  }
};
```

Allí se declaran en camel case pero al definir el argumento en el html se hará con kebab-case. Ejemplo:
&lt;micomponenteheader :mi-prop="unaVariable" &gt; en este caso estoy usando los : porque quiero ingresar el valor que tenga unaVariable como Number, si no hubiera puesto los dos puntos estaría ingresando el string "unaVariable" literalmente.

Las props pueden o no ser tipadas. Se recomienda que sí lo sean. Pueden tener una función customizada que valide el formato. En tu cara typescript.

------

## <a name="archivos-vue"></a> Componentes como archivos .vue

Solo si se buildea con vite / webpack / otro builder.

```html
<template>
  <header class="header">
    Este es el header {{ miVariable }}
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      miVariable: 'hola',
    };
  },
};
</script>


<style lang="scss">
// Also can use @import './mi-componente-header.scss';

.header {
  border: 1px #666 solid;
}
</style>
```

------

## <a name="comunicacion"></a> Insertar información a un componente

La manera más elegante de incorporar información del padre al componente es a través de una prop. Por ejemplo &lt;micomponente **:prop-que-necesita="unaVariable"**&gt;&lt;/micomponente&gt;

Otra puede ser a través del #ref de esa instancia del componente pero esto hace a todos los componentes menos independientes. Ejemplo: this.$ref.elnombre.laVariable = 'hola';

Para obtener información del componente hacia el padre se usa **$emit**

Otra opción es insertar **una función como una prop**, similar a React, pero suele ser más confuso, en cambio **los events que se emiten siempre son para comunicarse con el componente padre**.

https://vuejs.org/guide/components/events.html

Ejemplo: de la misma manera que Vue escuchaba **@click** en el ejemplo anterior, puede escuchar el emit que haga ese componente: &lt;micomponente @algo="unMethod"&gt;&lt;/micomponente&gt;

Dentro de ese componente puedo tener un evento cualquiera por ejemplo **@click** o dentro de un **method** **$emit('algo')**

------

## <a name="ejemplo-completo"></a> Ejemplo live coding utilizando todo lo que vimos

Aquí improvisaremos 🙏.

------

## <a name="webpack"></a> Build con webpack

Ejemplo en: https://github.com/patopitaluga/introduccion-a-vue/tree/master/ejemplo-build-con-webpack

------

## <a name="mas"></a> ¿Cómo seguir?

### Seguir aprendiendo de Vue

- computed
- filters
- &lt;slot&gt;
- ciclo de vida de la app
- composition api

### Otras tecnologías del ecosistema Vue a investigar:

Librerías del ecosistema Vue

- vue-router
- Vuex / Pinia: equivalente a redux
- Nuxt: equivalente a Next
- Vuetify: librería de componentes Vue
