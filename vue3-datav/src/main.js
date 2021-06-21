import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Icon from './libs/Icon/index';
import SvgAnimation from './libs/SvgAnimation/index'
import Loading from './libs/Loading/index'
import FlyBox from './libs/FlyBox/index'
import Logo from './libs/Logo/index'
import CountTo from './libs/CountTo/index'
import VueEcharts from './libs/VueEcharts/index'
import BaseScrollList from './libs/BaseScrollList/index'
import Container from './libs/Container/index'
createApp(App)
  .use(Icon)
  .use(SvgAnimation)
  .use(Loading)
  .use(FlyBox)
  .use(Logo)
  .use(CountTo)
  .use(VueEcharts)
  .use(BaseScrollList)
  .use(Container)
  .use(store)
  .use(router)
  .mount('#app');
