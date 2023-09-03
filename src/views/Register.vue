<template>
  <div class="container">
    <form @submit.prevent="Register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="username">Username</label>
        <input
          class="form-control"
          type="text"
          required
          v-model="username"
          name="username"
          placeholder="Your username"
        />
      </div>
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
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
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

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async Register() {
      this.errorMessage = null; // Reset the error message

      // Check password length
      if (this.password.length < 6) {
        this.errorMessage = "Password must be at least 6 characters long.";
        document.getElementById("alert_2").classList.remove("d-none");
        return;
      }

      // Debug: Print the email value
      console.log("Email value:", this.email);

      // Check email format
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(this.email)) {
        console.log("Invalid email format detected"); // Debug message
        this.errorMessage = "Invalid email format.";
        document.getElementById("alert_2").classList.remove("d-none");
        return;
      }

      document.getElementById("alert_2").classList.add("d-none");

      try {
        const response = await axios.post(
          "http://https://backendgt.onrender.com:10000/register",
          {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        );

        if (response.status === 201) {
          // Registration successful
          this.$router.push("/login");
        } else {
          this.errorMessage = "Failed to register. Please try again.";
        }
      } catch (error) {
        this.errorMessage =
          error.response.data.message ||
          "Failed to register. Please try again.";
      }
    },
    moveToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
