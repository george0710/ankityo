<template>
  <div class="container">
    <v-tabs
      centered
      grow
    >
      <v-tab
        href="#tab-day"
        style="margin-left: 0px;"
      >
        日ごと
      </v-tab>
      <v-tab
        href="#tab-week"
        style="margin-left: 0px;"
      >
        週ごと
      </v-tab>
      <v-tab
        href="#tab-month"
      >
        月ごと
      </v-tab>
      <v-tab-item
        value="tab-day"
      >
        <ChartDay />
      </v-tab-item>
      <v-tab-item
        value="tab-week"
      >
        <ChartWeek />
      </v-tab-item>
      <v-tab-item
        value="tab-month"
      >
        <ChartMonth />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import ChartDay from '@/components/chart/Day.vue';
import ChartWeek from '@/components/chart/Week.vue';
import ChartMonth from '@/components/chart/Month.vue';
export default {
  components : {
    ChartDay,
    ChartWeek,
    ChartMonth,
  }
};
</script>
