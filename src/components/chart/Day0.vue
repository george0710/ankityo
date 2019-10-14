<template>
  <span>
    <v-btn
      icon
      :disabled="isFirst"
      @click="changeCounter(false)"
    >
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    {{ startDay | moment }} ~ {{ endDay | moment }}
    <v-btn
      icon
      :disabled="isLast"
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
      return moment().add(-1 * (this.showCounter * 7), 'days');
    },
    startDay() {
      return moment(this.endDay).add(-6, 'days');
    },
    isLast() {
      return moment(this.endDay).isSameOrAfter(moment(), 'day');
    },
    isFirst() {
      var targetDay = moment.min(Object.keys(this.$store.state.studyHistory).map(d => moment(d)));
      return moment(this.startDay).isSameOrBefore(targetDay, 'day');
    }
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
        const targetDate = moment(this.endDay).add(-i, 'days').format('YYYY/MM/DD');
        data.unshift(targetDate in this.$store.state.studyHistory ? this.$store.state.studyHistory[targetDate] : 0);
      }
      var labels = [];
      for(var i = 0; i < 7; i++) {
        labels.unshift(moment(this.endDay).add(-i, 'days').format('MM/DD'));
      }

      var dataMax = data.reduce((a,b)=>Math.max(a,b));
      dataMax = dataMax===0 ? 8 : dataMax;
      var stepSize = Math.ceil(dataMax/8);

      this.options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0,
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
