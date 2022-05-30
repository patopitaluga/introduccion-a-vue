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
