<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        status: "critical"
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<style scoped>

</style>
