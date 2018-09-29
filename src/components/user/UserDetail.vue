<template>
  <div class="component">
    <h3>User Details </h3>
    <p>Name: {{ childName }} </p>
    <p>Reverse: {{ switchName() }} </p>
    <button @click="resetName">Reset</button>

  </div>
</template>

<script>

  export default {
    props: {
      childName: {
        type: String,
        required: true,
        // default: "Michal"
      }
    },
    methods: {
      switchName() {
        return this.childName.split("").reverse().join("");
      },

      resetName() {
        return this.childName = "XXXXXX"
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
*
