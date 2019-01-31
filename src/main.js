import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

/**
 * 插件和全局对象的设置
 */
Vue.use(ElementUI)//注册elementUI插件
Vue.prototype.$axios = axios//把axios设置为所有Vue组件实例的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false
/* 创建全局过滤器 */
Vue.filter('date',(val)=>{
  //把bigint转换为yyyy-mm-dd
  var date = new Date(val)
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  m<10&&(m='0'+m);
  d<10&&(d='0'+d);
  return `${y}-${m}-${d}`;
})
Vue.filter('dateTime',(val)=>{
  //把bigint转换为yyyy-mm-dd hh:mm:ss
  var date = new Date(val)
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  m<10&&(m='0'+m);
  d<10&&(d='0'+d);
  h<10&&(h='0'+h);
  mi<10&&(mi='0'+mi);
  s<10&&(s='0'+s);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})
Vue.filter('currency',(val)=>{
  //把int转换为￥ xx.yy
  return '￥'+val.toFixed(2)
})
Vue.filter('tableStatus',(val)=>{
  if(val==1) return '空闲'
  else if(val==2) return '预定'
  else if(val==3) return '占用'
  else return '其他'
})

new Vue({
  router,
  store, //指定当前项目唯一的Vuex存储仓库对项象，其中保存着可供所有组件共享的数据
  render: h => h(App) //根据App组件创建<App></App>元素，挂载到#app内部
}).$mount('#app')
