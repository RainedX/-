function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

export default {
  filters: {
    format(v) {
      return format(v)
    }
  },
}