import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import useApexCharts from 'vue3-apexcharts';  

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
const app = createApp(App);
app.component('apexchart', useApexCharts);  
app.use(router).mount("#app");


export { App };
