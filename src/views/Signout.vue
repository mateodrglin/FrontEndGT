<template>
  <div>
    <div class="text-center">You're now logged in as</div>
    <div id="username_display" class="display-6">{{ email }}</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
    <div v-if="logoutSuccess" class="alert alert-success mt-4">
      Successfully logged out!
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "Loading...", // Default value while fetching data
      logoutSuccess: false,
    };
  },
  mounted() {
    this.fetchUserEmail();
  },
  methods: {
    async fetchUserEmail() {
      try {
        const response = await axios.get(
          "http://https://backendgt.onrender.com:10000/user",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          this.email = response.data.email;
        } else {
          console.error("Error fetching user email:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    },
    async signOut() {
      try {
        const response = await axios.delete(
          "http://https://backendgt.onrender.com:10000/logout",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          // Update logoutSuccess to display the message
          this.logoutSuccess = true;

          // Navigate to home after a short delay and then refresh
          setTimeout(() => {
            window.location.href = "/";
            window.location.reload();
          }, 2000); // 2 seconds delay to let the user see the message
        } else {
          console.error("Error during logout:", response.data.message);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    },
  },
};
</script>
