import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Announcement from './components/Announcement.vue'
import Articles from './components/Articles.vue'
import Contact from './components/Contact.vue';
// import Members from './components/Members.vue'
export const eventBus = new Vue()

Vue.component('announcement',Announcement)
Vue.component('articles',Articles)
Vue.component('contact',Contact)
// Vue.component('members',Members)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
