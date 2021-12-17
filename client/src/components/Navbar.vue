<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/">
      <a class="navbar-brand p-3">
        <img src="@/assets/logo.png" width="40px" />
      </a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample09"
      aria-controls="navbarsExample09"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-0 ml-auto">
        <li class="nav-item mx-3">
          <router-link to="/create" class="nav-link">Create</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <!-- <li class="nav-item mx-3">
          <router-link to="/user" class="nav-link">User</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/bank" class="nav-link">Bank</router-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer !important;
}
.navbar {
  background-color: #ffffff;
  box-shadow: 0px 2px 17px -7px;
  height: 60px;
}

.nav-link {
  font-size: 15px;
  color: rgb(0, 0, 0) !important;
}

.nav-link:hover {
  color: rgb(158, 158, 158) !important;
}
.nav-button {
  background: #ffffff;
  color: #303030;
  padding: 0px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.link-button {
  color: #303030;
}
</style>
