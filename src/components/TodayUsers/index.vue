<template>
  <common-card
    title="今日交易用户数"
    value="81,014"
  >
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixin/commonCardMixin.js';

export default {
  data() {
    return {};
  },
  mixins: [commonCardMixin],
  mounted() {},
  methods: {
    getOptions() {
      return {
        color: '#45c',
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
          ],
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 45, 76],
            type: 'bar',
            barWidth: '60%',
          },
        ],
      };
    },
  },
};
</script>