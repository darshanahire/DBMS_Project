<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="loginParent mx-5">
        <form @submit.prevent>
          <h3 class="text-center">Login</h3>
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
          <div class="d-flex justify-content-around align-items-center mt-4">
            <button class="btn btn-dark" @click="loginUser">User Login</button>
            <button class="btn btn-dark" @click="loginBank">Bank Login</button>
          </div>
          <div class="text-center mt-3">
            <a href="/create" class="custom-link">New User create account</a>
          </div>
        </form>

        <!-- <h3 className="text-center">Login</h3>
        <form action="">
        <div  className="form-group">
          <label for="">Username :</label>
          <input  className="form-control" type="text" name="username" v-model="username" />
        </div>
        <div  className="form-group">
          <label for="">Password</label>
          <input  className="form-control" type="text" name="password" v-model="password" />
        </div>
        <div  className="form-group">
          <button @click="loginUser">Login User</button>
          <button @click="loginBank">Login Bank</button>
        </div>
        </form>
        <div>
          <a href="/create">create account</a>
        </div> -->
      </div>
    </div>
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
        .loginAsUser({
          username: this.username,
          password: this.password,
        })
        .then((data) => {
          localStorage.setItem("token", data.data.jwt);
          localStorage.setItem("type", "user");
          this.$router.push({ path: "/user" });
          this.username = "";
          this.password = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginBank() {
      http
        .loginAsBank({
          username: this.username,
          password: this.password,
        })
        .then((data) => {
          localStorage.setItem("token", data.data.jwt);
          localStorage.setItem("type", data.data.type);
          this.$router.push({ path: "/bank" });
          this.username = "";
          this.password = "";
        })
        .catch((err) => {
          alert("Username and Password Incorrect");
        });
    },
  },
};
</script>
<style>
body {
  background: #f1f1f1 !important;
}
.container-fluid {
  height: 80vh;
}
.loginParent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  width: 450px;
}
.inputField {
  box-shadow: none !important;
  border: 1px solid #ced4da !important;
}
.link {
  color: white !important;
  text-decoration: none;
}
.custom-link {
  color: gray;
  text-decoration: none;
}
form {
  width: 300px;
}
</style>