<template>
  <div class="main-container">
    <div class="containerhv">
      <p class="title">HomeView Dashboard</p>

      <!-- Display Accumulated Totals -->
      <div class="totals-box">
        <h3>Accumulated Totals</h3>
        <p>
          Total Silver Earned:
          {{ formatNumber(accumulatedTotal.totalDiscounted) }}
        </p>
        <p>
          Highest Total Silver Earned in Session:
          {{ formatNumber(highestTotalDiscountedSilver) }}
        </p>
        <p>
          Average Silver Per Hour:
          {{ formatNumber(accumulatedTotal.averageSilver) }}
        </p>
        <p>Total Hours: {{ formatNumber(accumulatedTotal.totalHours) }}</p>
      </div>

      <!-- Display Totals Per Spot -->
      <div class="spot-totals">
        <h3>Totals Per Spot</h3>
        <div class="spot-item" v-for="spot in totalsPerSpot" :key="spot._id">
          <p><strong>Spot:</strong> {{ spot._id }}</p>
          <p>Total Silver Earned: {{ formatNumber(spot.totalDiscounted) }}</p>
          <p>Average Silver Per Hour: {{ formatNumber(spot.averageSilver) }}</p>
          <p>Total Hours: {{ formatNumber(spot.totalHours) }}</p>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <ApexPieChart v-if="dataCollection" :chart-data="dataCollection" />
    </div>
  </div>
</template>

<script>
import ApexPieChart from "./ApexPieChart.vue";
import axios from "axios";

export default {
  components: {
    ApexPieChart,
  },
  data() {
    return {
      highestTotalDiscountedSilver: 0,
      dataCollection: null,
      totalsPerSpot: [],
      accumulatedTotal: {},
    };
  },
  methods: {
    formatNumber(input) {
      const number = parseFloat(input);
      return number.toLocaleString();
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://backendgt.onrender.com/totalsilver",
        {
          withCredentials: true,
        }
      );
      const { totalsPerSpot, accumulatedTotal } = response.data;

      this.totalsPerSpot = totalsPerSpot;
      this.accumulatedTotal = accumulatedTotal;
      this.totalsPerSpot.forEach((spot) => {
        spot.totalDiscounted = spot.totalDiscounted || 0;
      });
      this.accumulatedTotal.totalDiscounted =
        this.accumulatedTotal.totalDiscounted || 0;

      // Fetching the highest TotalDisc value
      const responseHighestTotalDiscountedSilver = await axios.get(
        "https://backendgt.onrender.com/highestTotalDiscountedSilver",
        {
          withCredentials: true,
        }
      );
      this.highestTotalDiscountedSilver =
        responseHighestTotalDiscountedSilver.data.highestTotalDiscountedSilver;

      //chart
      const labels = totalsPerSpot.map((spot) => spot._id);
      const data = totalsPerSpot.map((spot) => spot.totalDiscounted);

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
