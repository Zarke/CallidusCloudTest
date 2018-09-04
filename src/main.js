import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueResource);
Vue.http.options.root = 'https://cors-anywhere.herokuapp.com/https://api.meetup.com/';

library.add(faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
