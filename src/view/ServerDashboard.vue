<template>
  <div class="container">
    <my-app-header></my-app-header>
    <hr>
    <div class="row">
      <my-app-list></my-app-list>
      <my-app-server-details></my-app-server-details>
    </div>
    <hr>
    <div class="col-xs-12">
      <my-app-footer></my-app-footer>
    </div>
  </div>
</template>

<script>
  import Footer from '../components/dashboard/MyFooter.vue';
  import Header from '../components/dashboard/MyHeader.vue';
  import List from '../components/dashboard/MyList';
  import ServerDetails from '../components/dashboard/ServerDetails';

  export default {
    components: {
      'my-app-footer': Footer,
      'my-app-header': Header,
      'my-app-list': List,
      'my-app-server-details': ServerDetails


    }
  }
</script>

<style scoped>

</style>
