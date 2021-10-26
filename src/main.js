import Vue from "vue";
import App from "./App.vue";
import axios from "axios"; // 追加します。
import VueAxios from "vue-axios"; // 追加します。

Vue.config.productionTip = false;
Vue.use(VueAxios, axios); // 追加します。

new Vue({
  render: (h) => h(App),
}).$mount("#app");
