<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{userCount}}</div>
                <v-chart :options="searchUserOption" class="user-chart" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{searchCount}}</div>
                <v-chart :options="searchNumberOption" class="num-chart" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
     <div class="view">
       <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small" @change="onCategoryChange">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchUserOption: {},
      searchNumberOption: {},
      tableData: [
        {rank: 1, keyword: '小龙虾', count: 9195, users: 7287, range: '10%'},
        {rank: 2, keyword: '送药', count: 2125, users: 4285, range: '20%'},
        {rank: 3, keyword: '医疗', count: 4195, users: 2287, range: '30%'},
        {rank: 4, keyword: '买家', count: 6195, users: 6280, range: '40%'}
      ],
      totalData: [],
      total: 0,
      pageSize: 4,
      userCount: "93,634",
      searchCount: "198,782",
      radioSelect: '品类',
      categoryOptions: {},
    }
  },
  mounted() {
    this.renderLineChart();
    this.renderPieChart();
  },
  methods: {
    onPageChange(page) {
      this.renderTable(page)
    },
    renderTable() {},
    onCategoryChange() {},
    renderLineChart() {
      const createOption = (key) => {
        const data = [42, 31, 46, 65, 66, 33, 99, 12]
        const axis = [1, 2, 3, 4, 5, 6, 7, 8]
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axis
          },
          yAxis: {
            show: false
          },
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          },
          series: [
            {
              type: 'line',
              data,
              areaStyle: {
                color: 'rgba(95,187,255,.5)'
              },
              lineStyle: {
                color: 'rgb(95,187,255)'
              },
              itemStyle: {
                opacity: 0
              },
              smooth: true
            }
          ]
        }
      }
      this.searchUserOption = createOption('user')
      this.searchNumberOption = createOption('count')
    },
    renderPieChart() {
      const mockData = [
        {
          legendName: "粉面粥店",
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#2672ff'
          },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendName: "简餐便当",
          value: 97,
          percent: '22.30%',
          itemStyle: {
              color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        },
        {
          legendName: "汉堡披萨",
          value: 92,
          percent: '21.30%',
          itemStyle: {
            color: '#e73'
          },
          name: '汉堡披萨 | 21.30%'
        }
      ]
      this.categoryOptions = {
        tooltip: {
          trigger: 'item',
          formatter(params) {
            const str = params.seriesName + '<br />' +
                params.marker + params.data.legendName + '<br />' +
                '数量：' + params.data.value + '<br />' +
                '占比：' + params.data.percent + '%'
              return str
          }
        },
        title: [
          {
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
          }
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '65%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        series: [
          {
            type: 'pie',
            data: mockData,
            label: {
              show: true,
              position: 'outside',
              formatter(params) {
                return params.data.legendName
              }
            },
            name: '品类分布',
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              length: 5,
              length2: 3,
              smooth: true
            },
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;

      &:first-child {
        padding: 0 10px 0 0;
      }

      &:last-child {
        padding: 0 0 0 10px;
      }

      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;

        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;

          .chart {
            flex: 1;
            padding: 0 10px;

            .chart-title {
              color: #999;
              font-size: 14px;
            }

            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }

            .user-chart, .num-chart {
              height: 50px !important;
            }
          }
        }

        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;

          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
