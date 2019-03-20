import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueFire from "vuefire";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, { iconfont: "mdi" });
Vue.use(VueFire);

// Vue.prototype.$isLoggedIn = false;
// Vue.prototype.$isVerified = false;
// Vue.prototype.$email = "";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
