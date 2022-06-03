# Bullets de charla

Útil:
- Quitar bookmarks del browser
- Shift + ctrl + f (fullscreen)

1
- Bienvenidos
- Gracias x estar
- Feedback apreciado
------
2
- Para seguir esta charla
------
3
- Única definición de diccio
- Foco en cómo se siente
- Polémica. Mayor error de Vue
- Docu oficial. No digan Vue
------
4
- Si usaron Angular / React
- Elementos en pantalla atados a variables js
- React: js con html
- Vue: filosofía &lt;&gt; html + js
------
5
- ¿Para qué?
- vanilla sirve, pero es específico. Vue se documenta solo
- jquery está en desuso. Fue superado
- No es tan claro q sea > React. Es alternativa
- No pertenece a corp Meta / Facebook
- Licencia MIT, código abierto. Comunidad voluntarios
- Iniciarse en Vue es + sencillo q React
- Opinión personal: hace más sentido. Se parece al lenguaje natural
------
6
- Vue es software maduro para usar en producción / app completa
- Pocos conceptos específicos o arbitrarios
- Muchas librerías muy buenas
- Documentación clara y linda
- Foros, subreddits, conferencias, juntadas amigable
- Performa súper bien. Es rápido en cualquier dispositivo
- React es más popular
- En github hay 10 veces + proy con R q con V
- El debug es difícil al principio, luego no
- Para q indexe Google hay que planear ssr
- Datazo: Vue tiene + estrellas. Es más querido
------
7
- Vue se puede usar con cualquier otro framework
- Incluso con React
- Con modelo vista controlador o solo front
------
8
- La manera más fácil de implementar es con un cdn
- Esto lo recomienda la docu oficial
- X lo gral, en produ no se hace así sino que se usa un bundler
- Pero performa súper bien, no tiene mayor contra el cdn
- Vite es el builder que recomienda la docu de Vue 3
- Hay un cliente de Vue para terminal similar a create-react-app
- Los componentes q se hagan de una manera se pasan fácil a la otra
------
9
- Nada más que esto, copiandolo y pegandolo en un html ya funciona
- Obviamente quité todo el head y body. Iría en el body
- Parte por parte: en html hay un contenedor
- La mayoría de las veces este contenedor contiene todo lo q hay en el body
- No siempre
- La doble llave es el caracter que le indica a Vue que se va a renderear javascript
- Si lo usan con otro sistema de templates, se puede cambiar para que sea otro
- Luego se carga Vue entero
- El tag se debe poner estratégicamente xq es render blocking
- Si hay contenido afuera se va a mostrar después de los tags script
- Ante la duda, poner script al cerrar body o con defer
- El script de Vue solo setea la variable Vue (objeto)
- De ese objeto solo vamos a hablar de createApp (la q + se usa)
- createApp tiene un solo parámetro q es un objeto
- de ese objeto el parámetro más importante es data
- Data contiene las variables que serán reactivas
- Data es una función que devuelve un objeto
- A veces lo van a ver directamente como objeto, esta es la manera correcta
- Estas variables no están tipadas. Pero hay maneras de tiparla
- Por último este objeto creado por createApp tiene una función mount
------
10
------
11
------
12
- Más fácil que React
- Se pone la directiva v-if
- También hay v-else
- No pone style display: none sino que la quita del DOM
------
13
- Más fácil que React
- Se pone la directiva v-for con in
- Igual que React tiene una directiva key
14
- Es el equivalente a lo que en js vanilla empieza con on
- Por ejemplo on click como en este caso
- También el on change de un select sería @change
- O el submit de un form sería @submit
15
- Cuando queremos que un attributo pueda cambiar y sea reactivo
- Se pone con :
- Dentro corre js así que puede ser variable, comparación o función
- En este ej até si el input está deshab o no a una var

