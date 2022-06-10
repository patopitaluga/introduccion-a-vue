import { createApp, ref } from 'vue';

import miComponenteHeader from '../componentes/mi-componente-header.vue';

createApp({
  components: {
    'micomponenteheader': miComponenteHeader,
  },
  data: function() {
    return {
      saludo: 'buenas noches',
    };
  },

  /* composition api
  setup: function(/* props */ /*) {
    const saludo = ref('buenas tardes');

    return {
      saludo,
    };
  }, */
})
  .mount('#contenedor-de-mi-app');
