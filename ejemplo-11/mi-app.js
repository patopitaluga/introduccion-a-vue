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
