<template>
  <p>Counter : {{ counter }}</p>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      }
    }
  }
</script>
