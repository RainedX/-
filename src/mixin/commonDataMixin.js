function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
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
    }
  },
  filters: {
    format(v) {
      return format(v)
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}