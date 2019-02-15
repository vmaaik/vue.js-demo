<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <button @click="fruits.push('apple')">Add fruit</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits ">{{fruit}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mixin} from "./mixin";
  export default {
    mixins: [mixin],
    created(){
      console.log('component created');
    }
  }
</script>

<style>

</style>
