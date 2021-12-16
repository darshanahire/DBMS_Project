<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="loginParent mx-5">
        <form>
          <h3 class="text-center">Login</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input
              type="email"
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
          <button type="submit" class="btn btn-dark">
            <a class="link" href="/create">create account</a>
          </button>
          <div>
            <button @click="loginUser">Login User</button>
            <button @click="loginBank">Login Bank</button>
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
          console.log(data.data);
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
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.container-fluid {
  background: #f1f1f1;
  height: 90vh;
}
.loginParent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  align-items: center;
  padding: 40px;
  border-radius: 15px;
}
.inputField {
  box-shadow: none !important;
  border: 1px solid #ced4da !important;
}
.link {
  color: white !important;
  text-decoration: none;
}
</style>