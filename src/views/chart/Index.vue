<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chart-data="chartdata"
      :options="options"
    />
  </div>
</template>

<script>
import LineChart from '@/components/chart/LineChart.js';

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null
  }),
  async mounted () {
    this.loaded = false;
    try {
      // const { userlist } = await fetch('/api/userlist');
      this.chartdata = {
        labels: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  methods:{
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
