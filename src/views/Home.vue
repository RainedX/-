<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView';
import SalesView from '../components/SalesView';
import BottomView from '../components/BottomView';
import MapView from '../components/MapView';
import { wordcloud, screenData, mapScatter } from '../api';

export default {
  name: 'Home',
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  mounted() {
    screenData().then(data => {
      this.reportData = data;
    });
  },
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
