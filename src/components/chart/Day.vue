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
import MixinBase from '@/components/chart/MixinBase.js';
import moment from 'moment';
import LineChart from '@/components/chart/LineChart.js';

export default {
  components: { LineChart },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY年MM月DD日');
    }
  },
  mixins: [ MixinBase ],
  data: () => ({
    chartdata: null,
    options: null
  }),
  computed : {
    endDay() {
      return moment().add(-1 * (this.showCounter * 7), 'days');
    },
    startDay() {
      return moment(this.endDay).add(-6, 'days');
    }
  },
  methods:{
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
      this.options = this.createOption(data);
      this.chartdata = this.createChartData(data, labels);
    }
  }
};
</script>
