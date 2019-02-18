<template>
  <div>
    <MixinsAssignment></MixinsAssignment>
  </div>

</template>

<script>
  import Filters from '../components/filters/Filters.vue';
  import List from '../components/filters/List.vue';
  import MixinsAssignment from '../training/mixins/MixinsAssignment.vue';

  export default {
    name: "FiltersAndMixins",
    components: {
      Filters,
      List,
      MixinsAssignment,
    }
  }
</script>
