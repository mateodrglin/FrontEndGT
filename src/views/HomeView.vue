<template>
  <div>
    <p>This is the HomeView component</p>
    <ApexPieChart v-if="dataCollection" :chart-data="dataCollection" />
  </div>
</template>

<script>
import ApexPieChart from "./ApexPieChart.vue"; // Make sure the path is correct
import axios from "axios";

export default {
  components: {
    ApexPieChart,
  },
  data() {
    return {
      dataCollection: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5000/totalsilver", {
        withCredentials: true,
      });
      const spotsData = response.data;

      const labels = spotsData.map((spot) => spot._id);
      const data = spotsData.map((spot) => spot.totalSilver);

      this.dataCollection = {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
