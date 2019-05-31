import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements } from '@carto/airship-components/dist/loader';

defineCustomElements(window);
Vue.config.productionTip = false
// Vue.config.ignoredElements = [/as-\w+/];


new Vue({
  render: h => h(App),
}).$mount('#app')
