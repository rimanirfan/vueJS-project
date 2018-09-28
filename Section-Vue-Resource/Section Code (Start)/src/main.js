import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-http-52dfc.firebaseio.com/data.json'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method == 'POST'){
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => {
      return { messages: response.body}
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
