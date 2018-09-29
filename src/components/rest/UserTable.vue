<template>
  <table style="width:100%">
    <tr>
      <th>User ID</th>
      <th>User Title</th>
    </tr>
    <tr v-for="user in usersData">
      <td>{{ user.id }}</td>
      <td>{{ user.title }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: "UserTable",
    props: ['usersData']
  }
</script>

<style scoped>

</style>
