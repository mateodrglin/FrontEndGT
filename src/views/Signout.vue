<template>
  <div>
    <div class="text-center">You're now logged as</div>
    <div id="username_display" class="display-6">{{ email }}</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: localStorage.getItem("userEmail") || "Unknown User",
    };
  },
  methods: {
    async signOut() {
      try {
        // Call the logout endpoint to end the session on the server
        const response = await axios.delete("http://localhost:5000/logout", {
          withCredentials: true,
        });

        if (response.status === 200) {
          // Clear local storage (or session storage or cookies depending on where you store the data)
          localStorage.removeItem("userEmail");
          localStorage.removeItem("userId"); // Assuming you stored user ID on login

          // Redirect to login page or home page
          this.$router.push("/login");
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
