<template>
  <!-- <div class="container">
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
  </div> -->
   <div class="container-fluid">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="loginParent mx-5">
        <form  @submit.prevent>
          <h3 class="text-center mb-3">Create Account</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input
              type="text"
              class="form-control inputField"
              id="exampleInputEmail1"
              v-model="username"
              autocomplete="off"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control inputField"
              id="exampleInputPassword1"
              v-model="password"
              autocomplete="off"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="text"
              class="form-control inputField"
              id="exampleInputEmail1"
              v-model="email"
              autocomplete="off"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Mobile</label>
            <input
              type="text"
              class="form-control inputField"
              id="exampleInputEmail1"
              v-model="mobile_no"
              autocomplete="off"
            />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-4">
            <button class="btn btn-dark w-50 mx-auto" @click="CreateUser">Create Account</button>
          </div>
        </form>

      </div>
    </div>
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
      mobile_no: "",
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