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