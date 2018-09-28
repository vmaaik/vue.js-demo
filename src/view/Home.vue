<template>
  <div>
    <ServerStatus v-for="server in 5"></ServerStatus>
  </div>
</template>

<script>
  import ServerStatus from '../components/ServerStatus.vue';

  export default {
    components: {
      ServerStatus
    }
  }
</script>

<style scoped>

</style>
