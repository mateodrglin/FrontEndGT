<template>
  <div>
    <apexchart
      type="pie"
      :options="chartOptions"
      :series="chartSeries"
      width="500"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useApexCharts } from "vue3-apexcharts";

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const chartOptions = ref({
      chart: {
        type: "pie",
      },
      labels: props.chartData.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });

    const chartSeries = ref(props.chartData.datasets[0].data);

    return {
      chartOptions,
      chartSeries,
    };
  },
};
</script>
