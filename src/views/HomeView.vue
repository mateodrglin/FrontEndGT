<template>
  <div class="data-container">
    <h1>Saved Data</h1>
    <div v-for="record in records" :key="record.date">
      <p>Date: {{ record.date }}</p>
      <p>Time: {{ record.time }}</p>
      <!-- Display other data here -->
      <p>Total: {{ record.total.toLocaleString() }} Silver</p>
    </div>
  </div>
</template>

<script>
// You can import data from 'import.vue' or handle it differently based on your application structure
export default {
  data() {
    return {
      // An array to store the records
      records: [],
    };
  },
  methods: {
    // Method to load the saved data
    loadSavedData() {
      // Logic to load data, possibly from a Vuex store, local storage, or an API
    },
  },
  mounted() {
    // Load saved data when the component is mounted
    this.loadSavedData();
  },
};
</script>

<style>
.data-container {
  /* Add styling for your container here */
}
</style>
