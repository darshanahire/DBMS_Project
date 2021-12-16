<template>
  <div class="container">
    <h1>User Profile</h1>
  </div>
</template>

<script>
import http from "@/services/http.vue";
export default {
  name: "UserProfile",
  async mounted() {
    let data = await http.GetUserData();
  },
  data() {
    return {
      userDetails: {},
    };
  },
};
</script>

<style>
</style>