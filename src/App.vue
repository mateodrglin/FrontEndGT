<template>
  <nav>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">BDOTracker</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <img class="bspirit" src="@/assets/bspirit.png" />
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/import">Import</router-link>
          </li>

          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/Login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/Register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/Signout">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </nav>
  <router-view />
  <img class="background" />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },

  mounted() {
    axios
      .get("http://https://backendgt.onrender.com:10000/isAuthenticated", {
        withCredentials: true,
      })
      .then((response) => {
        this.isLoggedIn = response.data.isAuthenticated;
      });
  },
};
</script>

<style lang="scss">
body {
  background-image: url("@/assets/backg.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

.bspirit {
  width: 60px;
  height: 60px;
  background-attachment: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: rgba(255, 167, 16, 0.833);

    &.router-link-exact-active {
      color: #bcee3e;
    }
  }
}
.navbar .navbar-nav {
  margin-left: auto;
  font-weight: normal;
  font-size: 25px;
  letter-spacing: 0.5px;
  padding: 0;
  margin-right: 30px;
  text-transform: uppercase;
  transition: all 0.4s ease;
  font-family: Arial, Helvetica, sans-serif;
}
.navbar .nav-item {
  margin-left: 55px;
  font-size: 20px;
}
.navbar .navbar-brand {
  font-weight: normal;
  font-size: 35px;
  margin-left: 30px;
  color: rgba(255, 167, 16, 0.833);
}
.navbar .nav-link {
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 0;
  text-transform: uppercase;
  transition: all 0.4s ease;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(255, 167, 16, 0.833);
  margin-right: 30px;
}
.navbar {
  background-color: rgba(28, 26, 26, 0.874);
}
.navbar .nav-link:hover {
  color: whitesmoke;
}
</style>
