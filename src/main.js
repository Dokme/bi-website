import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './assets/scss/app.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faLeaf, faFire, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faLeaf, faFire, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
