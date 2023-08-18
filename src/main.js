import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useApexCharts from 'vue3-apexcharts';  // Note: No curly braces around useApexCharts

const app = createApp(App);
app.component('apexchart', useApexCharts);  // Use apexchart instead of ApexChart
app.use(router).mount("#app");

export { App };
