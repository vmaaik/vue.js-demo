<template>
  <div>
    <Filters/>
    <List/>
  </div>

</template>

<script>
  import Filters from '../components/filters/Filters.vue';
  import List from '../components/filters/List.vue';

  export default {
    name: "FiltersAndMixins",
    components: {
      Filters,
      List,
    }
  }
</script>
