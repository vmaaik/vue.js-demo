<template>
  <div id="app">
    <Animations></Animations>
  </div>
</template>

<script>
  import FiltersAndMixins from './view/FiltersAndMixins.vue';
  import Animations from './components/animations/Animations.vue'

  export default {
    components: {
      FiltersAndMixins,
      Animations,
    }
  }
</script>
