<template>
  <common-card
    title="今日交易用户数"
    :value="orderUser"
  >
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixin/commonCardMixin';
import commonDataMixin from '@/mixin/commonDataMixin';

export default {
  data() {
    return {};
  },
  mixins: [commonCardMixin, commonDataMixin],
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
          data: this.orderUserTrendAxis,
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
            data: this.orderUserTrend,
            type: 'bar',
            barWidth: '60%',
          },
        ],
      };
    },
  },
};
</script>