import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Icon from './libs/Icon/index';
createApp(App)
  .use(Icon)
  .use(store)
  .use(router)
  .mount('#app');
