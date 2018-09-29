<template>
  <div class="component">
    <h3>User Details </h3>
    <p>Name: {{ name }} </p>
    <p>Reverse: {{ switchName() }} </p>

  </div>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,
        required: true,
        // default: "Michal"
      }
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
