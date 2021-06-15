function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}
function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}
function wrapperMoney(o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}
function wrapperNumber(o, k) {
  return o && o[k] ? format(o[k]) : 0
}
function wrapperArray(o, k) {
  return o && o[k] ? o[k] : []
}
function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0
}
function wrapperObject(o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

export default {
  computed: {
    reportData() {
      return this.getReportData()
    },
    wordCloud() {
      return this.getWordCloud()
    },
    mapData() {
      return this.getMapData()
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    category1() {
      return wrapperObject(this.reportData, 'category.data1')
    },
    category2() {
      return wrapperObject(this.reportData, 'category.data2')
    },
  },
  filters: {
    format(v) {
      return format(v)
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}