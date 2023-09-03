<template>
  <div class="main-container">
    <div class="container">
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

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
  border-radius: 8px;
  border: 2px solid #a0a0a0;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.totals-box,
.spot-totals {
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  border: 2px solid #a0a0a0;
}

.spot-item {
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
}

.spot-item:first-child {
  border-top: none;
}

.chart-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: 5%;
  right: 5%;
  border: 2px solid #a0a0a0;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
