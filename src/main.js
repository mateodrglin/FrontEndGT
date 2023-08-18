import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useApexCharts from 'vue3-apexcharts';  

const app = createApp(App);
app.component('apexchart', useApexCharts);  
app.use(router).mount("#app");

export { App };
