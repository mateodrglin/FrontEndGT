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
export default {
  data() {
    return {
      email: localStorage.getItem("userEmail") || "Unknown User", // Assuming you've stored the email in local storage on login
    };
  },
  methods: {
    signOut() {
      // Clear local storage (or session storage or cookies depending on where you store the data)
      localStorage.removeItem("userEmail");
      localStorage.removeItem("authToken"); // If you've stored an authentication token

      // Redirect to login page or home page
      this.$router.push("/login");
    },
  },
};
</script>
