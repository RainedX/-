<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  
};
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.echarts {
  width: 100% !important;
  height: 100% !important;
}
.anchorBL{
    display:none;
}
</style>
