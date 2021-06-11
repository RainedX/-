<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'visualMap',
            value: 2199
          },
          {
            name: 'rained',
            value: 3399
          },
          {
            name: 'yy',
            value: 1922
          },
          {
            name: 'hj',
            value: 2139
          },
          {
            name: 'dd',
            value: 4439
          }
        ]
      },
      chartSettings: {
          color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
        }
    }
  }
}
</script>
