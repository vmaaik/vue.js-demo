<template>
  <div>
    <button @click="getData">Get Data</button>
    <hr>
    <user-table :usersData='usersTable'></user-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import UserTable from "../components/rest/UserTable";

  export default {
    components: {UserTable},
    data() {
      return {
        usersTable: []
      }
    },

    methods: {
      getData() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
            const data = response.data;
            const users = [];
            for (let key in data) {
              const user = data[key]
              users.push(user);
            }
            this.usersTable = users;
          })
      },
    }

  }
</script>

<style scoped>

</style>
