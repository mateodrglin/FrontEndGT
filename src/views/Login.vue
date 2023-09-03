<template>
  <div class="container">
    <form @submit.prevent="Login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          required
          v-model="email"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          required
          v-model="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Login
      </button>
      <div
        v-if="errorMessage"
        class="alert alert-warning alert-dismissible fade show mt-5"
        role="alert"
      >
        {{ errorMessage }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

// Set Axios configuration globally
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoggedIn: false,
    };
  },
  created() {
    // Check if userId exists in localStorage upon Vue instance creation
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    async Login() {
      try {
        const response = await axios.post(
          "https://backendgt.onrender.com:10000/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        if (response.status === 200) {
          // Login successful
          localStorage.setItem("userId", response.data.userId);
          console.log("About to redirect to /import");
          this.$router.push("/import");
        } else {
          this.handleError(response);
        }
      } catch (error) {
        this.handleError(error.response);
      }
    },

    handleError(response) {
      console.error("Error:", response);
      this.errorMessage =
        response.data.message || "Failed to login. Please try again.";
    },

    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss">
.container {
  padding-top: 50px;
}
</style>
<style lang="scss">
.container {
  padding-top: 50px;
}
</style>
