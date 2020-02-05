import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Announcement from './components/Announcement.vue'
import Articles from './components/Articles.vue'
import Members from './components/Members.vue'

Vue.component('announcement',Announcement)
Vue.component('articles',Articles)
Vue.component('members',Members)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
