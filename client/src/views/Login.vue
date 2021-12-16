<template>
  <div class="container">
    <label for="">username :</label>
    <input type="text" name="username" v-model="username" />
    <br />
    <label for="">password :</label>
    <input type="text" name="password" v-model="password" />
    <br />
    <button @click="loginUser">Login User</button>
    <button @click="loginBank">Login Bank</button>
    <br />
    <a href="/create">create account</a>
  </div>
</template>

<script>
import http from "@/services/http.vue";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      http
        .loginAsUser(this.payload)
        .then((data) => {
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginBank() {
      http
        .loginAsBank(this.payload)
        .then((data) => {
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    payload() {
      return {
        username: this.username,
        password: this.password,
      };
    },
  },
};
</script>
<style>
</style>