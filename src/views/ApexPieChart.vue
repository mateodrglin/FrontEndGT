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
import useApexCharts from "vue3-apexcharts";

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
        background: "#f4f4f4", // Background color of the chart
        fontFamily: "Arial, sans-serif", // Font family for the chart
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
      annotations: {
        points: props.chartData.labels.map((label, index) => ({
          x: index,
          y: props.chartData.datasets[0].data[index],
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeWidth: 0,
          },
          label: {
            borderColor: "#333",
            offsetY: 0,
            style: {
              color: "#FFD700",
              background: "#fff",
            },
            text: label,
          },
        })),
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            return `${value.toLocaleString()} Silver`;
          },
        },
      },
      title: {
        text: "Total Discounted Silver",
        align: "center",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#263238", // Adjust the color as needed
        },
      },
    });

    const chartSeries = ref(props.chartData.datasets[0].data);

    return {
      chartOptions,
      chartSeries,
    };
  },
};
</script>
