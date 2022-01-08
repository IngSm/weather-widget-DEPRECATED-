import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
// import VueDayjs from 'vue-dayjs-plugin'
import '@/plugins/day';
import '@/plugins/moment';

Vue.use(VueAxios, axios);

// Vue.use(VueDayjs)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
