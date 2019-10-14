import LineChart from '@/components/chart/LineChart.js';
import moment from 'moment';

export default {
  data: () => ({
    baseChartdata: {
      labels: [],
      datasets: [
        {
          label: '学習した単語数',
          backgroundColor: '#f87979',
          data: []
        }
      ]
    },
    baseOptions: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            min: 0
          }
        }]
      }
    },
    showCounter: 0
  }),
  computed : {
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
    createOption(data) {
      var dataMax = data.reduce((a,b)=>Math.max(a,b));
      dataMax = dataMax===0 ? 8 : dataMax;
      var stepSize = Math.ceil(dataMax/8);

      this.baseOptions.scales.yAxes[0].ticks.max = stepSize * 9;
      this.baseOptions.scales.yAxes[0].ticks.stepSize = stepSize;
      var options = {};
      Object.assign(options, this.baseOptions);
      return options;
    },

    createChartData(data, labels) {
      this.baseChartdata.labels = labels;
      this.baseChartdata.datasets[0].data = data;
      var chartdata = {};
      Object.assign(chartdata, this.baseChartdata);
      return chartdata;
    }
  }
};
