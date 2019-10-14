<template>
  <span>
    <v-btn
      icon
      @click="changeCounter(false)"
    >
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    {{ startDay | moment }} ~ {{ endDay | moment }}
    <v-btn
      icon
      @click="changeCounter(true)"
    >
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
    <line-chart
      ref="lineChart"
      :chart-data="chartdata"
      :options="options"
    />
  </span>
</template>

<script>
import LineChart from '@/components/chart/LineChart.js';
import moment from 'moment';

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY年MM月DD日');
    }
  },
  data: () => ({
    chartdata: null,
    options: null,
    showCounter: 0
  }),
  computed : {
    endDay() {
      return moment().add(-1 * this.showCounter, 'months').endOf('month').format('YYYY-MM-DD hh:mm');
    },
    startDay() {
      return moment(this.endDay).startOf('month').format('YYYY-MM-DD hh:mm');
    },
  },
  watch: {
    showCounter() {
      this.graphDraw();
    }
  },
  mounted () {
    this.graphDraw();
  },
  methods:{
    getRandomInt () {
      return Math.floor(Math.random() * (100 - 5 + 1)) + 5;
    },
    changeCounter(isNext) {
      if (isNext) {
        this.showCounter--;
      } else {
        this.showCounter++;
      }
    },
    graphDraw() {
      var data = [];
      for(var i = 0; i < 7; i++) {
        data.unshift(this.getRandomInt());
      }

      var labels = [];
      for(var i = 0; i < 7; i++) {
        labels.unshift(moment(this.endDay).add(-i, 'days').format('MM/DD'));
      }

      const dataMax = data.reduce((a,b)=>Math.max(a,b));
      var stepSize = parseInt(dataMax/8);

      this.options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              max: stepSize * 9,
              stepSize: stepSize
            }
          }]
        }
      };

      this.chartdata = {
        labels: labels,
        datasets: [
          {
            label: '学習した単語数',
            backgroundColor: '#f87979',
            data: data
          }
        ]
      };
    }
  }
};
</script>
