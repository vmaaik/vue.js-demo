<template>
  <div>
    <table style="width:100%">
      <tr>
        <th>User ID</th>
        <th>User Title</th>
      </tr>
      <tr v-for="user in usersTable">
        <td>{{ user.id}}</td>
        <td>{{user.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
  import ServerDetails from "../components/dashboard/ServerDetails";

  export default {
    components: {ServerDetails},
    data() {
      return {
        usersTable: []
      }
    },
    created() {
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
</script>

<style scoped>

</style>
