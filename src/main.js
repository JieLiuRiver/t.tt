
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/reset.css';
import '@/style/ionicons.min.css';
import '@/style/func.less';
import lazyload from 'vue-lazy-load'

Vue.use(lazyload)

Vue.config.productionTip = false

Vue.prototype.frequentlyUsedRegular = {
  phone: /^1[34578]\d{9}$/,
  email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
}

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '锤子科技官网'
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
