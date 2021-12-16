<template>
  <div class="container">
    <h2>create account</h2>
    <label for="">Username</label>
    <input type="text" v-model="username" />
    <label for="">password</label>
    <input type="password" v-model="password" />
    <label for="">Mobile</label>
    <input type="number" v-model="mobile_no" />
    <label for="">email</label>
    <input type="email" v-model="email" />
    <button @click="CreateUser">Create</button>
  </div>
</template>

<script>
import http from "@/services/http.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      mobile_no: 0,
    };
  },
  methods: {
    CreateUser() {
      let payload = {
        username: this.username,
        password: this.password,
        email: this.email,
        mobile_no: this.mobile,
      };
      http
        .CreateUser(payload)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>