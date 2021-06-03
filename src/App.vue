<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'app',
  components: {
    Home
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
